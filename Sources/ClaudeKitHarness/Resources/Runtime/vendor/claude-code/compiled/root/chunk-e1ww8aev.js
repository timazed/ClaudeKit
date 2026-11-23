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
var chunk_e1ww8aev_exports = {};
__export(chunk_e1ww8aev_exports, {
  $7r: () => $7r,
  $Ba: () => $Ba,
  AJt: () => AJt,
  BBa: () => BBa,
  CJt: () => CJt,
  D7r: () => D7r,
  Dsi: () => Dsi,
  F7r: () => F7r,
  GBa: () => GBa,
  Hsi: () => Hsi,
  Kgt: () => Kgt,
  L7r: () => L7r,
  Lsi: () => Lsi,
  N7r: () => N7r,
  RJt: () => RJt,
  Ssr: () => Ssr,
  U7r: () => U7r,
  UBa: () => UBa,
  WBa: () => WBa,
  bsr: () => bsr,
  g0t: () => g0t,
  h0t: () => h0t,
  jBa: () => jBa,
  wsr: () => wsr
});
module.exports = __toCommonJS(chunk_e1ww8aev_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_yt7wk02j = require("/$bunfs/root/chunk-yt7wk02j.js");
var import_chunk_mndk3x2g = require("/$bunfs/root/chunk-mndk3x2g.js");
var import_chunk_0a5vv9nr = require("/$bunfs/root/chunk-0a5vv9nr.js");
var import_chunk_4fssttte = require("/$bunfs/root/chunk-4fssttte.js");
var import_chunk_shs9e3r5 = require("/$bunfs/root/chunk-shs9e3r5.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_os = require("os");
var import_path = require("path");
var import_promises = require("fs/promises");
var import_path2 = require("path");
var _ = (e) => e.replace(/[A-Z]+/g, (t) => t.toLowerCase());
function c(e, t) {
  return _(e) === _(t);
}
async function k(e, t) {
  let o = (0, import_path2.dirname)(t);
  if (o === t) return true;
  let n = (0, import_path2.basename)(t);
  if ((0, import_path2.basename)(e) !== n) {
    let r = await (0, import_promises.readdir)(o).catch(() => []);
    if ((0, import_chunk_4smdap7r.U)(r, (s) => c(s, n)) !== 1) return false;
  }
  return k((0, import_path2.dirname)(e), o);
}
async function C(e, t, o = (0, import_chunk_cg8dqz0a.x)()) {
  if (o !== "windows" || e === t || !c(e, t)) return false;
  let { resolvedPath: n, isCanonical: r } = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), e);
  if (!r || n.slice(1) !== e.slice(1)) return false;
  let [s, i] = await Promise.all([e, t].map((a) => (0, import_promises.lstat)(a, { bigint: true }).catch(() => {
    return;
  })));
  return s !== void 0 && i !== void 0 && s.dev === i.dev && s.ino === i.ino && s.ino !== 0n && await k(e, t);
}
var h0t = /[\u202a-\u202e\u2066-\u2069]/;
function Ssr(e) {
  return h0t.test(e) || /[\p{Cc}\u2028\u2029]/u.test(e);
}
var j = /^(.*\d)([ \u202F])((?:[ap]m|[ap]\.m\.)(?![a-z])[^/\\\n\r\u2028\u2029]*)$/is;
function $Ba(e) {
  let [, t, o, n] = j.exec(e) ?? [];
  return o === void 0 ? void 0 : `${t}${o === " " ? "\u202F" : " "}${n}`;
}
function Kgt(e) {
  return e !== "" && e !== "." && e !== ".." && e.length <= 255 && !/[/\\]/.test(e) && !Ssr(e);
}
function D7r(e, t) {
  return (0, import_chunk_yt7wk02j.Ust)(e, t);
}
function CJt(e, t, o) {
  let n = [(0, import_chunk_n2dbhmj2.xt)(e), t.realPath];
  if (n.some((r) => (0, import_chunk_4fssttte.v7)(r, o))) throw n.some((s) => (0, import_chunk_4fssttte.v7)(s, { ...o, blockReadsOutsideWorkingDirectories: false, blockFileToolReadsOutsideWorkingDirectories: false })) ? new import_chunk_jv7av99m.A(`read not allowed under --restricted: ${e}`, "fileInputs/screenPath: restricted mode refused a file the upload screen passed") : new import_chunk_jv7av99m.A(`read not allowed under ${(0, import_chunk_pbteexar.Zut)(o)}: ${e}`, "fileInputs/screenPath: read block refused a file the upload screen passed");
}
function g0t(e) {
  return e instanceof import_chunk_yt7wk02j.Pwt ? "credential_name" : "path_rejected";
}
var W = /* @__PURE__ */ new Map([["claudeInChrome/fileUpload: path read not allowed by session permissions", "read_not_allowed"], ["claudeInChrome/fileUpload: path matches a read deny rule", "read_deny_rule"], ["claudeInChrome/fileUpload: path matches a read ask rule", "read_ask_rule"], ["claudeInChrome/fileUpload: Read tool denied or ask-gated for this session", "read_tool_restricted"], ["claudeInChrome/fileUpload: path outside the working directories under the read block", "read_block"], ["fileInputs/screenPath: read block refused a file the upload screen passed", "read_block"], ["claudeInChrome/fileUpload: restricted mode refused a file only an allow rule opens", "restricted_mode"], ["fileInputs/screenPath: restricted mode refused a file the upload screen passed", "restricted_mode"], ["claudeInChrome/fileUpload: kernel or device path, or one of Claude Code's own credentials", "own_credential_or_device"], ["claudeInChrome/fileUpload: a file in the folder of browser downloads", "browser_download"], ["claudeInChrome/fileUpload: network path rejected before filesystem access", "network_path"], ["claudeInChrome/fileUpload: network path rejected", "network_path"], ["claudeInChrome/fileUpload: over-long path rejected", "too_long"], ["claudeInChrome/fileUpload: suspicious Windows path pattern rejected", "odd_spelling"], ["claudeInChrome/fileUpload: path through a named fork rejected", "odd_spelling"], ["claudeInChrome/fileUpload: unvettable path ancestry rejected before filesystem access", "unvettable_ancestry"]]);
function L7r(e) {
  if ((0, import_chunk_jv7av99m.kn)(e)) return "not_found";
  if (e instanceof import_chunk_yt7wk02j.Pwt) return "credential_name";
  if (e instanceof import_chunk_yt7wk02j.Mfo) return "outside_working_folders";
  return (e instanceof import_chunk_jv7av99m.A ? W.get(e.telemetryMessage) : void 0) ?? ((0, import_chunk_jv7av99m.w)(e) === void 0 ? "other" : "fs_error");
}
function N7r(e) {
  return e === "/sessions" || e.startsWith("/sessions/");
}
function bsr(e, t, o) {
  return { reason: (0, import_chunk_78g0060s.f)(t), fileRefPathKind: Hsi(e, o) };
}
function Hsi(e, t) {
  if (N7r(e)) return (0, import_chunk_78g0060s.S)("vm_sessions");
  if ((0, import_chunk_n2dbhmj2.Fa)(e) === null) return (0, import_chunk_78g0060s.S)("other");
  try {
    let o = { caseFold: true, uncShapeParity: true }, n = (0, import_os.homedir)(), r = (0, import_chunk_2gtmjt3y.Nl)(), s = (0, import_path.dirname)((0, import_chunk_f9x2f6cx.Te)()), a = [["uploads", [import_chunk_6mfepmbb.yD]], ["outputs", [import_chunk_6mfepmbb.qR]], ["project_files", [import_chunk_6mfepmbb.rOe]], ["claude_config", r === null ? [] : [r]], ["working_folder", [...(0, import_chunk_p1ewvgeh.sv)(t)]], ["tmp", [(0, import_chunk_8nvd6fqx.Fp)(), (0, import_os.tmpdir)()]], ["beside_working_folder", s === (0, import_path.dirname)(s) || (0, import_chunk_p1ewvgeh.Sc)(n, s, o) ? [] : [s]], ["home", [n, import_chunk_6mfepmbb.TKn]]].find(([, d]) => d.some((l) => (0, import_chunk_p1ewvgeh.Sc)(e, l, o)))?.[0];
    return a === void 0 ? (0, import_chunk_78g0060s.S)("other") : (0, import_chunk_78g0060s.f)(a);
  } catch (o) {
    let n = (0, import_chunk_jv7av99m.w)(o);
    if (n !== "ENOENT" && n !== "ERR_SYSTEM_ERROR") (0, import_chunk_shs9e3r5.kG)(new import_chunk_jv7av99m.A(`MCP file inputs: finding which folder a path is under for the upload log failed unexpectedly (${(0, import_chunk_shs9e3r5.u0)(o)})`, "MCP file inputs: finding which folder a path is under for the upload log failed unexpectedly"), o);
    return (0, import_chunk_78g0060s.S)("other");
  }
}
function F7r(e, t, o) {
  let n = AJt(t) === void 0 ? "Tell the user it was not attached." : "If the user wants it sent, ask them to attach it to the chat themselves.";
  return `Cannot attach "${e}": its name or folder is one that credentials are kept under (such as .env, a .pem or .key file, or .ssh), so it is not sent on Claude's word alone. ${n} ${o}`;
}
function $7r(e, t, o) {
  let n = AJt(t), r = n === void 0 ? "Ask the user to share the file with this session, or to add its folder with /add-dir." : `Files the user attached to this chat are usually in ${n}; give the full path of one of those. If the file is not there, ask the user to attach it to the chat.`;
  return `Cannot attach "${e}": only files this session is allowed to read can be attached. ${r} ${o}`;
}
function UBa(e, t, o) {
  return t !== void 0 && t !== "/" && !`${t}/`.startsWith("/tmp/") && /^\/tmp\/(?!claude)./.test(import_path.posix.normalize(e)) && !(0, import_chunk_z6pfqf6e.pg)(e) ? `Cannot attach "${e}": files under /tmp are not attached. If you made this file, copy it into ${t} and make the call again with the copy's path. ${o}` : void 0;
}
var N = /* @__PURE__ */ new Set(["session", "cliArg"]);
function p(e) {
  return [(0, import_chunk_f9x2f6cx.Te)(), ...Array.from(e.additionalWorkingDirectories.values()).filter(({ source: t }) => N.has(t)).map(({ path: t }) => t)];
}
function Dsi(e, t) {
  return (0, import_chunk_n2dbhmj2.Fa)(e) !== null && p(t).some((o) => (0, import_chunk_p1ewvgeh.Sc)(e, o, { caseFold: false, uncShapeParity: true }));
}
async function BBa(e, t, o) {
  let n = (0, import_chunk_n2dbhmj2.Fa)(e);
  for (let r of p(o)) {
    let s = t.slice(0, r.length);
    if (t[r.length] === import_path.sep && n?.[r.length] === import_path.sep && c(n.slice(0, r.length), r) && await C(r, s)) return r + t.slice(r.length);
  }
  return;
}
function b(e) {
  return ["deny", "ask"].some((t) => (0, import_chunk_ht27b0vz.Gk)(e, import_chunk_k883m4fq.De, t).size > 0);
}
function WBa({ realPath: e, sessionRoot: t, outsideWorkingFolders: o }, n, r = n.mode) {
  if ((0, import_chunk_p1ewvgeh.sme)(e, n)) return;
  if ((0, import_chunk_w82axegn.k9e)(e)) return;
  if ((0, import_chunk_mndk3x2g.xwt)()) return t === "attachments" ? "inside" : void 0;
  if (t !== void 0) return "inside";
  if (o !== true && (wsr(e) || (0, import_chunk_p1ewvgeh.w_)(e, n, void 0, p(n)))) return "inside";
  if (r === "dontAsk" || n.shouldAvoidPermissionPrompts || n.restricted || (0, import_chunk_0a5vv9nr.B7r)() && r !== "bypassPermissions") return;
  return b(n) ? void 0 : "outside";
}
function wsr(e) {
  let t = (0, import_chunk_p1ewvgeh.eLe)();
  if (t === void 0) return false;
  let { resolvedPath: o, isCanonical: n } = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), (0, import_path.dirname)(t));
  if (!n || (0, import_path.dirname)(e) !== (0, import_path.join)(o, (0, import_path.basename)(t)) || (0, import_path.basename)(e).startsWith(".")) return false;
  try {
    return (0, import_chunk_w578pjby.le)().lstatSync(e).nlink <= 1;
  } catch {
    return false;
  }
}
function jBa(e, t, o) {
  return `Cannot send ${e} ${t}: this path goes through a file's named fork (a part spelled "..namedfork"), and no file is sent to a connector by such a path, wherever it lies. To send that file, give its own path, without the fork. ${o}`;
}
function GBa(e, t, o, n, { inFolders: r = false, severalFiles: s = false } = {}) {
  let i = (0, import_chunk_pbteexar.Zut)(o);
  if ((0, import_chunk_mndk3x2g.xwt)()) {
    let T = (0, import_chunk_pbteexar.jS)(o) ? `This session also blocks reads outside its working directories (${i}), so an attached file is sent only if ${i.includes(" and ") ? "those settings let" : "that setting lets"} the ${import_chunk_k883m4fq.De} tool read it. To send this file, the user can run Claude Code in a terminal, with no background job, and ask there.` : "To send this file, the user can run Claude Code in a terminal, with no background job, and ask there. Or, if this chat is open in claude.ai, the user can attach the file to it there.";
    return (0, import_chunk_f9x2f6cx.HI)() === null ? `Cannot send ${e} ${t}: this session runs a background job, and from a background job only a file the user attached to the chat since the job last started can be sent to a connector; a file attached before it restarted, or before a window took it over, has to be attached again. ${T} ${n}` : `Cannot send ${e} ${t}: this session runs a background job, and a background job can send to a connector only a file that Claude Code has on record as attached by the user. This session keeps no such record, so no file can be sent from it, not even one attached to the chat. To send this file, the user can run Claude Code in a terminal, with no background job, and ask there. ${n}`;
  }
  let a = `Cannot send ${e} ${t}`, d = o.mode === "dontAsk" ? "in dontAsk mode Claude Code cannot ask the user, and it sends no file to a connector without asking" : o.shouldAvoidPermissionPrompts === true ? (0, import_chunk_pbteexar.EI)(o) ? "this agent cannot show Claude Code's prompt, and no file is sent to a connector without one" : "permissions.denyInsteadOfPrompting keeps Claude Code from asking the user, and it sends no file to a connector without asking" : void 0;
  if (d !== void 0) return `${a}: ${d}. Tell the user. ${n}`;
  let l = AJt(o), h = l === void 0 ? "" : ` Files the user attached to this chat are usually in ${l}.`;
  if (r) return `${a}: there is no such file, or this session may not read or send it. Check the path; a link that leads out of this session's folders is not followed.${h} ${n}`;
  if (o.restricted || b(o)) return `${a}: ${o.restricted ? "under --restricted" : `where this session has ${import_chunk_k883m4fq.De} deny or ask rules`}, only files in the folder Claude Code started in and in folders added for this session can be sent. The user can add a folder with /add-dir ("Yes, for this session") or start Claude Code there.${h} ${n}`;
  return `${a}: there is no such file, or Claude Code does not send it from outside this session's folders (for example a link, a folder, a file that is too large or named like a credential, one of Claude Code's own files, ${i === "" ? "" : `one that ${i} covers, `}or one that is not in the user's home or temporary folder, on that folder's own disk). Claude Code does not say which, so that a refusal cannot show what is there.${s ? " This may be about any of this call's files, or about how many the approval prompt can list: send one per call." : ""} If the path is right, the user can add its folder with /add-dir ("Yes, for this session"), or start Claude Code there, and ask again.${h} ${n}`;
}
function AJt(e) {
  if (e.isRemoteMode !== true) return;
  try {
    return (0, import_chunk_6mfepmbb.eP)();
  } catch {
    return;
  }
}
var Lsi = { too_large: true, hard_links: true, not_regular: true, moved: true, grew: true, open_failed: true, read_failed: true };
function RJt(e) {
  return Object.hasOwn(Lsi, e);
}
function U7r(e, t, o, n) {
  switch (t) {
    case "too_large":
      return { error: `Cannot attach "${e}": files over ${o / 1048576} MiB cannot be attached. ${n}`, code: "too_large" };
    case "hard_links":
      return { error: `Cannot attach "${e}": the file has more than one hard link, which can point at a file outside the folders this session may read. Copy the file and attach the copy. ${n}`, code: "hard_links" };
    case "not_regular":
      return { error: `Cannot attach "${e}": it is not a regular file. Attach files one at a time, not a folder. ${n}`, code: "not_regular" };
    case "moved":
    case "grew":
    case "open_failed":
    case "read_failed":
      return { error: `Could not read "${e}". ${n}`, code: t };
  }
}
