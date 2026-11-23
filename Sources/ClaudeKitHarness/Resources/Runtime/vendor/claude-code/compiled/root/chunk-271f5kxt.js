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
var chunk_271f5kxt_exports = {};
__export(chunk_271f5kxt_exports, {
  E7: () => E7,
  ENn: () => ENn,
  Ial: () => Ial,
  Mal: () => Mal,
  Nae: () => Nae,
  Oal: () => Oal,
  Ofo: () => Ofo,
  Pal: () => Pal,
  QWe: () => QWe,
  Ral: () => Ral,
  WDe: () => WDe,
  axi: () => axi,
  eUt: () => eUt,
  esn: () => esn,
  ixi: () => ixi,
  jDe: () => jDe,
  lxi: () => lxi,
  nfs: () => nfs,
  sxi: () => sxi,
  tUt: () => tUt,
  vNn: () => vNn,
  xal: () => xal
});
module.exports = __toCommonJS(chunk_271f5kxt_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_478yxt5w = require("/$bunfs/root/chunk-478yxt5w.js");
var import_chunk_587zek71 = require("/$bunfs/root/chunk-587zek71.js");
var import_chunk_t9fn978c = require("/$bunfs/root/chunk-t9fn978c.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
var import_crypto = require("crypto");
var T = __toESM(require("fs/promises"));
var h = __toESM(require("path"));
class b {
  byToolUse = /* @__PURE__ */ new Map();
  rounds = /* @__PURE__ */ new Map();
  nextRound = 1;
}
var O = 256;
function P(e, r) {
  try {
    return r();
  } catch (o) {
    return (0, import_chunk_k449cc64.i)(o), e;
  }
}
function M(e, r) {
  if (e.permissionPhase !== void 0 || e.permissionRound === void 0) return;
  let o = e.toolState.get(b).rounds.get(r);
  return o?.round === e.permissionRound ? o : void 0;
}
function R(e, r, o) {
  let n = M(e, r);
  if (n === void 0) return false;
  if (n.toolName === o) return true;
  if (!n.refusalLogged) n.refusalLogged = true, (0, import_chunk_w578pjby.t)(`permission record: a write for ${o} was refused under the round of ${n.toolName}`, { level: "error" }), (0, import_chunk_k449cc64.i)(Error("permission record: a write for another tool was refused under a round"));
  return false;
}
function k(e, r) {
  let o = e.toolState.get(b), n = o.rounds.get(r)?.round ?? 0, s = o.byToolUse.get(r);
  if (s !== void 0 && s.round === n) return s;
  let f = { round: n, record: {} };
  if (o.byToolUse.set(r, f), o.byToolUse.size > O) {
    let [c] = o.byToolUse.keys();
    if (c !== void 0 && c !== r) o.byToolUse.delete(c), o.rounds.delete(c);
  }
  return f;
}
function QWe(e, r, o) {
  return P(0, () => {
    let n = e.toolState.get(b), s = n.nextRound++;
    if (n.rounds.delete(r), n.rounds.set(r, { round: s, toolName: o, refusalLogged: false }), n.rounds.size > O) {
      let [f] = n.rounds.keys();
      if (f !== void 0 && f !== r) n.rounds.delete(f), n.byToolUse.delete(f);
    }
    return n.byToolUse.delete(r), s;
  });
}
function nfs(e, r, o, n) {
  let { toolUseId: s } = e;
  if (!s) return;
  P(void 0, () => {
    let f = e.rewriteProbe;
    if (f?.toolName === n) f.checked = { input: r, ...f.pendingNote?.input === r && { note: f.pendingNote.note } }, f.pendingNote = void 0;
    if (!R(e, s, n)) return;
    let c = k(e, s), g = { input: r, result: o, ...c.pendingNote?.input === r && { note: c.pendingNote.note } };
    if (c.pendingNote = void 0, c.provisional?.open) {
      c.provisional.checked = g;
      return;
    }
    c.record.checked = g, c.record.rewriteNoted = void 0;
  });
}
function WDe(e, r, o, n, s) {
  if (!r) return;
  P(void 0, () => {
    if (!R(e, r, s)) return;
    if (n.behavior === "deny") {
      e.toolState.get(b).byToolUse.delete(r);
      return;
    }
    let f = k(e, r);
    f.record.pipeline = { input: o, result: n, ...f.pendingAnswered !== void 0 && n.behavior === "allow" && { answered: f.pendingAnswered } }, f.pendingAnswered = void 0;
  });
}
function sxi(e, r, o, n) {
  if (!r) return;
  P(void 0, () => {
    if (!R(e, r, n)) return;
    k(e, r).pendingAnswered = o;
  });
}
function E7(e, r, o, n) {
  let { toolUseId: s } = e;
  if (!s) return;
  P(void 0, () => {
    if (e.rewriteProbe?.toolName === n) e.rewriteProbe.pendingNote = { input: r, note: o };
    if (!R(e, s, n)) return;
    k(e, s).pendingNote = { input: r, note: o };
  });
}
async function Ral(e, r, o, n) {
  let s = P(void 0, () => {
    if (!R(e, r, o)) return;
    let f = k(e, r);
    return f.provisional = { open: true }, f;
  });
  try {
    return await n();
  } finally {
    if (s?.provisional !== void 0) s.provisional.open = false;
  }
}
function xal(e, r, o, n, s) {
  P(void 0, () => {
    if (!R(e, r, s)) return;
    let f = k(e, r);
    if (f.provisional?.checked !== void 0) f.record.checked = f.provisional.checked;
    f.provisional = void 0, f.record.pipeline = { input: o, result: n };
  });
}
function esn(e, r, o) {
  P(void 0, () => {
    if (o.checked !== void 0 && R(e, r, o.toolName)) k(e, r).record.rewriteNoted = o.checked;
  });
}
function eUt(e, r) {
  P(void 0, () => {
    if (M(e, r) === void 0) return;
    e.toolState.get(b).byToolUse.delete(r);
  });
}
function Nae(e, r, o) {
  return P(void 0, () => {
    let n = e.toolState.get(b);
    if (n.rounds.get(r)?.round !== o) return;
    n.rounds.delete(r);
    let s = n.byToolUse.get(r);
    if (s === void 0 || s.round !== o) return;
    return n.byToolUse.delete(r), s.record;
  });
}
function ixi(e) {
  return e.permissionPhase !== void 0;
}
function ENn(e, r) {
  return P(void 0, () => e.toolState.get(b).byToolUse.get(r)?.record);
}
var axi = "2023-06-01";
function D() {
  return (0, import_chunk_t9fn978c.wkt)() || process.env.CLAUDE_CODE_API_BASE_URL || "https://api.anthropic.com";
}
function tUt(e, r) {
  let o = e || D();
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") throw Error("Files API is unavailable on third-party providers (data-residency)");
  if ((0, import_chunk_tvttgr51.Hze)("firstParty", o, "files"), (0, import_chunk_865at33z.qU)(o)) throw Error("Files API is unavailable at your organization's gateway, which doesn't accept your own Anthropic sign-in");
  if ((0, import_chunk_865at33z.Rt)() && (0, import_chunk_478yxt5w.KAe)(o, false, true) || r?.isStoredLogin && (0, import_chunk_478yxt5w.KAe)(o, true, true) && (!(0, import_chunk_865at33z.eO)() || (0, import_chunk_f9x2f6cx.QM)() || (0, import_chunk_865at33z.aoe)() || (0, import_chunk_865at33z.tr)()?.accessToken !== r.oauthToken)) throw new import_chunk_587zek71.RA((0, import_chunk_478yxt5w.Tje)());
  if ((0, import_chunk_2zeyvjwb.uo)("hipaa")) throw Error("File upload is disabled by your organization's policy.");
}
function x(e) {
  (0, import_chunk_w578pjby.t)(`[files-api] ${e}`, { level: "error" });
}
function w(e) {
  (0, import_chunk_w578pjby.t)(`[files-api] ${e}`);
}
function E(e) {
  return { "User-Agent": (0, import_chunk_tb84sczh.Ri)(), Authorization: `Bearer ${e.oauthToken}`, "anthropic-client-platform": (0, import_chunk_tb84sczh.H_)(), "anthropic-client-version": { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, "anthropic-version": axi, "anthropic-beta": import_chunk_ephf358x.ff };
}
var v = 3, W = 500, Y = 12e4, jDe = 524288e3;
async function I(e, r) {
  let o = "";
  for (let n = 1; n <= v; n++) {
    let s = await r(n);
    if (s.done) return s.value;
    if (o = s.error || `${e} failed`, w(`${e} attempt ${n}/${v} failed: ${o}`), n < v) {
      let f = W * Math.pow(2, n - 1);
      w(`Retrying ${e} in ${f}ms...`), await (0, import_chunk_5appeerh.K)(f);
    }
  }
  throw Error(`${o} after ${v} attempts`);
}
function N(e) {
  return e === "" || e === "." || e === ".." ? void 0 : `/v1/files/${encodeURIComponent(e)}`;
}
async function X(e, r) {
  let o = r.baseUrl || D();
  tUt(r.baseUrl, r);
  let n = N(e);
  if (n === void 0) throw Error("Invalid file ID");
  let s = `${o}${n}/content`, f = E(r);
  return w(`Downloading file ${e} from ${s}`), I(`Download file ${e}`, async () => {
    try {
      let c = await import_chunk_3jjr3wje.bn.get(s, { headers: f, responseType: "arraybuffer", timeout: 6e4, validateStatus: (g) => g < 500 });
      if (c.status === 200) return w(`Downloaded file ${e} (${c.data.length} bytes)`), { done: true, value: Buffer.from(c.data) };
      if (c.status === 404) throw Error(`File not found: ${e}`);
      if (c.status === 401) throw Error("Authentication failed: invalid or missing API key");
      if (c.status === 403) throw Error(`Access denied to file: ${e}`);
      return { done: false, error: `status ${c.status}` };
    } catch (c) {
      if (!import_chunk_3jjr3wje.bn.isAxiosError(c)) throw c;
      return { done: false, error: c.message };
    }
  });
}
function G(e, r, o) {
  let n = h.normalize(o);
  if (n.startsWith("..")) return x(`Invalid file path: ${o}. Path must not traverse above workspace`), null;
  let s = h.join(e, r, "uploads"), c = [h.join(e, r, "uploads") + h.sep, h.sep + "uploads" + h.sep].find((_) => n.startsWith(_)), g = c ? n.slice(c.length) : n;
  return h.join(s, g);
}
async function V(e, r) {
  let { fileId: o, relativePath: n } = e, s = G((0, import_chunk_18rsj2ts.pe)(), r.sessionId, n);
  if (!s) return { fileId: o, path: "", success: false, error: `Invalid file path: ${n}` };
  try {
    let f = await X(o, r), c = h.dirname(s);
    return await T.mkdir(c, { recursive: true }), await T.writeFile(s, f), w(`Saved file ${o} to ${s} (${f.length} bytes)`), { fileId: o, path: s, success: true, bytesWritten: f.length };
  } catch (f) {
    return x(`Failed to download file ${o}: ${(0, import_chunk_jv7av99m.d)(f)}`), { fileId: o, path: s, success: false, error: (0, import_chunk_jv7av99m.d)(f) };
  }
}
var q = 5;
async function Pal(e, r, o = q) {
  if (e.length === 0) return [];
  w(`Downloading ${e.length} file(s) for session ${r.sessionId}`);
  let n = Date.now(), s = await Promise.all(e.map((0, import_chunk_w71cxznt.Rl)(o, (g) => V(g, r)))), f = Date.now() - n, c = (0, import_chunk_4smdap7r.U)(s, (g) => g.success);
  if (w(`Downloaded ${c}/${e.length} file(s) in ${f}ms`), c === e.length) (0, import_chunk_cqa9hrgx.u)("api_files_download");
  else if (c > 0) (0, import_chunk_cqa9hrgx.l)("api_files_download", "partial_failed");
  else (0, import_chunk_cqa9hrgx.m)("api_files_download", "all_failed");
  return s;
}
async function Oal(e, r, o, n) {
  tUt(o.baseUrl, o), w(`Uploading file ${e} as ${r}`);
  let s;
  try {
    s = n?.content ?? await T.readFile(e);
  } catch (f) {
    return (0, import_chunk_y53wbr8a.a)("tengu_file_upload_failed", { error_type: (0, import_chunk_78g0060s.S)("file_read") }), { path: r, error: (0, import_chunk_jv7av99m.d)(f), success: false, reason: "file_read" };
  }
  return lxi(s, r, o, n);
}
async function lxi(e, r, o, n) {
  let s = o.baseUrl || D();
  tUt(o.baseUrl, o);
  let f = `${s}/v1/files`, c = E(o), g = e.length;
  if (g > jDe) return (0, import_chunk_y53wbr8a.a)("tengu_file_upload_failed", { error_type: (0, import_chunk_78g0060s.S)("file_too_large") }), { path: r, error: `File exceeds maximum size of ${jDe} bytes (actual: ${g})`, success: false, reason: "too_large" };
  let _ = `----FormBoundary${(0, import_crypto.randomUUID)()}`, j = Z(h.basename(r)), A = [];
  if (A.push(Buffer.from(`--${_}\r
Content-Disposition: form-data; name="file"; filename="${j}"\r
Content-Type: application/octet-stream\r
\r
`)), A.push(e), A.push(Buffer.from(`\r
`)), A.push(Buffer.from(`--${_}\r
Content-Disposition: form-data; name="purpose"\r
\r
user_data\r
`)), n?.expiresInSeconds !== void 0) A.push(Buffer.from(`--${_}\r
Content-Disposition: form-data; name="expires_in_seconds"\r
\r
${n.expiresInSeconds}\r
`));
  A.push(Buffer.from(`--${_}--\r
`));
  let B = Buffer.concat(A);
  try {
    return await I(`Upload file ${r}`, async (C) => {
      if (n?.signal?.aborted) throw new y("Upload canceled", "canceled");
      let L = (p) => {
        if (C >= v) throw (0, import_chunk_y53wbr8a.a)("tengu_file_upload_failed", { error_type: (0, import_chunk_78g0060s.S)("server") }), new y(`${p} after ${v} attempts`, "server");
        return { done: false, error: p };
      };
      try {
        let p = await import_chunk_3jjr3wje.bn.post(f, B, { headers: { ...c, "Content-Type": `multipart/form-data; boundary=${_}`, "Content-Length": B.length.toString() }, timeout: n?.timeoutMs ?? Y, signal: n?.signal, validateStatus: (F) => F < 500 });
        if (p.status === 200 || p.status === 201) {
          let F = p.data?.id;
          if (!F) return L("Upload succeeded but no file ID returned");
          return w(`Uploaded ${r} (${g} bytes)`), { done: true, value: { path: r, fileId: F, size: g, success: true } };
        }
        if (p.status === 401) throw (0, import_chunk_y53wbr8a.a)("tengu_file_upload_failed", { error_type: (0, import_chunk_78g0060s.S)("auth") }), new y("Authentication failed: invalid or missing API key", "auth");
        if (p.status === 403) throw (0, import_chunk_y53wbr8a.a)("tengu_file_upload_failed", { error_type: (0, import_chunk_78g0060s.S)("forbidden") }), new y("Access denied for upload", "forbidden");
        if (p.status === 413) throw (0, import_chunk_y53wbr8a.a)("tengu_file_upload_failed", { error_type: (0, import_chunk_78g0060s.S)("size") }), new y("File too large for upload", "too_large");
        if (p.status === 400 || p.status === 404 || p.status === 422) throw (0, import_chunk_y53wbr8a.a)("tengu_file_upload_failed", { error_type: (0, import_chunk_78g0060s.S)("server") }), new y(`status ${p.status}`, "server");
        return L(`status ${p.status}`);
      } catch (p) {
        if (p instanceof y) throw p;
        if (import_chunk_3jjr3wje.bn.isCancel(p)) throw new y("Upload canceled", "canceled");
        if (import_chunk_3jjr3wje.bn.isAxiosError(p)) {
          if (n?.retryAfterTimeout === false && p.code === "ECONNABORTED" && p.cause === void 0) throw (0, import_chunk_y53wbr8a.a)("tengu_file_upload_failed", { error_type: (0, import_chunk_78g0060s.S)("network") }), new y(p.message, "network");
          return { done: false, error: p.message };
        }
        throw p;
      }
    });
  } catch (C) {
    if (C instanceof y) return { path: r, error: C.message, success: false, reason: C.reason };
    return (0, import_chunk_y53wbr8a.a)("tengu_file_upload_failed", { error_type: (0, import_chunk_78g0060s.S)("network") }), { path: r, error: (0, import_chunk_jv7av99m.d)(C), success: false, reason: "network" };
  }
}
function Z(e) {
  return e.replace(/["\r\n]/g, (r) => r === '"' ? "%22" : r === "\r" ? "%0D" : "%0A");
}
class y extends Error {
  reason;
  constructor(e, r) {
    super(e);
    this.reason = r;
    this.name = "UploadNonRetriableError";
  }
}
async function Ofo(e, r, o) {
  let n = r.baseUrl || D();
  tUt(r.baseUrl, r);
  let s = N(e);
  if (s === void 0) return w("Delete file refused: the id names no file"), { success: false, reason: "not_found" };
  let f = `${n}${s}`;
  try {
    let c = await import_chunk_3jjr3wje.bn.delete(f, { headers: E(r), timeout: o.timeoutMs, validateStatus: () => true });
    if (c.status >= 200 && c.status < 300) return w(`Deleted file ${e}`), { success: true };
    switch (w(`Delete file ${e} failed: HTTP ${c.status}`), c.status) {
      case 401:
        return { success: false, reason: "auth" };
      case 403:
        return { success: false, reason: "forbidden" };
      case 404:
        return { success: false, reason: "not_found" };
      default:
        return { success: false, reason: "server" };
    }
  } catch (c) {
    if (!import_chunk_3jjr3wje.bn.isAxiosError(c)) throw c;
    return w(`Delete file ${e} failed: ${c.message}`), { success: false, reason: "network" };
  }
}
function Ial(e) {
  let r = [], o = e.flatMap((n) => n.split(" ").filter(Boolean));
  for (let n of o) {
    let s = n.indexOf(":");
    if (s === -1) continue;
    let f = n.substring(0, s), c = n.substring(s + 1);
    if (!f || !c) {
      x(`Invalid file spec: ${n}. Both file_id and path are required`);
      continue;
    }
    r.push({ fileId: f, relativePath: c });
  }
  return r;
}
var z = Symbol("an error of a call that sends files");
function vNn(e) {
  Object.defineProperty(e, z, { value: true });
}
function Mal(e) {
  return typeof e === "object" && e !== null && z in e;
}
