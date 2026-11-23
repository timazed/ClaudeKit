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
var chunk_yt7wk02j_exports = {};
__export(chunk_yt7wk02j_exports, {
  Ifo: () => Ifo,
  Mfo: () => Mfo,
  Owt: () => Owt,
  Pwt: () => Pwt,
  TNn: () => TNn,
  Ust: () => Ust,
  ZWe: () => ZWe,
  cxi: () => cxi,
  dxi: () => dxi,
  l_r: () => l_r,
  nql: () => nql,
  ofs: () => ofs,
  rfs: () => rfs,
  sfs: () => sfs,
  tbe: () => tbe,
  uxi: () => uxi,
  w9e: () => w9e
});
module.exports = __toCommonJS(chunk_yt7wk02j_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_fwgyarbe = require("/$bunfs/root/chunk-fwgyarbe.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_pqb914sj = require("/$bunfs/root/chunk-pqb914sj.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_b3gt63am = require("/$bunfs/root/chunk-b3gt63am.js");
var import_chunk_4fssttte = require("/$bunfs/root/chunk-4fssttte.js");
var import_chunk_r949v7h0 = require("/$bunfs/root/chunk-r949v7h0.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
class Pwt extends Error {
  constructor() {
    super("the name or the place of a credential");
  }
}
var te = import_fs.constants.O_NOFOLLOW, de = import_fs.constants.O_NONBLOCK, ue = import_fs.constants.O_DIRECTORY, ce = "tengu_squishy_magpie", Owt = 10485760, v = { tag: "chrome", validate: Ust, rejection: fe, noPaths: "file_upload requires a non-empty `paths` array of files the user has shared with this session.", namesSource: false };
async function rfs(r) {
  let e = [{ path: (0, import_chunk_fwgyarbe.ov)(), kind: "attachments" }];
  if (r.isRemoteMode || import_chunk_c203g5kd.s.CLAUDE_STAGE_FILE_ROOT) try {
    if (e.push({ path: (0, import_chunk_6mfepmbb.eP)(), kind: "staging", fromChat: true }), (0, import_chunk_r949v7h0.FG)(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID, import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND)) e.push({ path: (0, import_chunk_6mfepmbb.tge)(), kind: "staging" });
  } catch (a) {
    (0, import_chunk_w578pjby.t)(`[chrome file_upload] stage root unresolvable, skipping staging roots (${a instanceof Error ? a.message : String(a)})`);
  }
  return e;
}
async function l_r(r, e, a, { maxTotalBytes: i = Owt, hosted: n, screen: o = v.validate, rejection: f = v.rejection } = {}) {
  let k = { remaining: i, total: i }, l = () => F(r, e, (_) => ne(_, a, k, { ...v, validate: o, rejection: f }));
  if (n === void 0) return l();
  if (r !== "file_upload") {
    let _ = { error: import_chunk_prn6030k.ZOo };
    return F(r, e, async () => _, import_chunk_b3gt63am.O9e.peek(n.session)?.host ? _ : W);
  }
  if (n.cardListed === true && !(import_chunk_b3gt63am.P9e in e) && (0, import_chunk_xcgcdx61.da)({ mcpInfo: { serverName: import_chunk_prn6030k.Xi, toolName: r }, excludedFromModeBypassAllow: () => true }, a) !== "auto") return (0, import_chunk_cqa9hrgx.m)("chrome_upload_card", "send_without_card"), { error: import_chunk_prn6030k.MLl };
  if ("files" in e) return { error: "file_upload takes `paths`, not `files`. Nothing was uploaded. Call it again without `files`." };
  let c = (0, import_chunk_f9x2f6cx.Y)() ? import_chunk_b3gt63am.O9e.peek(n.session)?.host : void 0, p;
  if (c) {
    let { paths: _ } = e;
    if (!Array.isArray(_) || _.length === 0) return { error: v.noPaths };
    p = await c.read(_, a, i, n.signal, false);
  } else {
    let _ = await l();
    p = { files: _.input?.files, error: _.error };
  }
  return p.error !== void 0 ? { error: p.error } : { input: e, callMeta: { [import_chunk_b3gt63am.Ufo]: p.files } };
}
async function dxi(r, e, { hostAsksPerFile: a }) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return W;
  if (Array.isArray(r.paths) && r.paths.length > 1) return { error: re };
  return ne(r, e, { remaining: Owt, total: Owt }, { tag: "pane", validate: (n, o) => ye(n, o, a), rejection: Ifo, noPaths: "file_upload needs `paths` to be an array holding one absolute file path. Nothing was uploaded.", namesSource: true });
}
async function ofs(r, e) {
  if (Array.isArray(r.paths) && r.paths.length > 1) return { error: re };
  return nql("file_upload", r, e);
}
async function nql(r, e, a) {
  return F(r, e, async (i) => {
    let n = i.paths;
    if (!Array.isArray(n) || n.length === 0) return { error: "file_upload requires a non-empty `paths` array of files the user has shared with this session." };
    let o = [];
    for (let l of n) {
      if (typeof l !== "string") return { error: "file_upload `paths` entries must be strings." };
      try {
        o.push(await _e(l, a));
      } catch (c) {
        return (0, import_chunk_w578pjby.t)(`[chrome file_upload] rejected path (pass-through): ${l} (${c instanceof Error ? c.message : String(c)})`), { error: c instanceof B ? pe(l) : c instanceof Pwt ? oe(l) : Ifo(l), refusedByRule: c instanceof E ? c.rule : void 0 };
      }
    }
    let { files: f, ...k } = i;
    return { input: { ...k, paths: o } };
  });
}
async function cxi({ serverName: r, serverType: e, toolName: a }, i, n) {
  let o = { name: import_chunk_k883m4fq.De };
  if (!(e === "sdk" && (0, import_chunk_bz1f2qnq.Fat)(r) && import_chunk_bz1f2qnq.s2t.includes(a) || (0, import_chunk_prn6030k._b)(r)) || !(0, import_chunk_ht27b0vz.Vs)(n).some((p) => p.ruleValue.toolName.includes("(") || (0, import_chunk_ht27b0vz.jc)(n, o, p))) return;
  let k = e !== "stdio" && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && import_chunk_c203g5kd.s.CLAUDE_CODE_IS_COWORK, l = false, { error: c } = await F(a, i, async (p) => {
    for (let _ of [p.paths].flat().map(String)) try {
      await (k ? TNn(_, n) : N(_, n, false));
    } catch {
      return l = (0, import_chunk_ht27b0vz.Tr)(n, o) !== null || _.length <= import_chunk_w82axegn.v9e && (0, import_chunk_w578pjby.Ei)((0, import_chunk_n2dbhmj2.xt)(_)).some((h) => (0, import_chunk_p1ewvgeh.Ia)(h, n, "read", "deny")), { error: "refused" };
    }
    return { input: p };
  });
  return l ? "covered" : c === void 0 ? void 0 : "unread";
}
async function F(r, e, a, i = W) {
  if (r === "file_upload") return (0, import_chunk_f9x2f6cx.Y)() ? i : a(e);
  if (r === "browser_batch") {
    if (!Array.isArray(e.actions)) return { error: "browser_batch requires an `actions` array." };
    let n = [...e.actions], o = false;
    for (let f = 0; f < n.length; f++) {
      let k = n[f];
      if (typeof k !== "object" || k === null || typeof k.name !== "string") return { error: "browser_batch sub-actions must be objects with a string name, and browser_batch cannot be nested." };
      let l = k.name;
      if (!/^[\x20-\x7E]+$/.test(l)) return { error: V(l) };
      let c = l.trim().toLowerCase();
      if (c === "browser_batch") return { error: "browser_batch sub-actions must be objects with a string name, and browser_batch cannot be nested." };
      if (c === "file_upload" && l !== "file_upload") return { error: V(l) };
      if (l !== "file_upload") continue;
      let p = k, _ = typeof p.input === "object" && p.input !== null ? p.input : {}, h = (0, import_chunk_f9x2f6cx.Y)() ? i : await a(_);
      if (h.error) return { error: h.error };
      if (h.input !== p.input) n[f] = { ...p, input: h.input }, o = true;
    }
    return o ? { input: { ...e, actions: n } } : { input: e };
  }
  return { input: e };
}
var W = { error: import_chunk_prn6030k.iJe }, re = "file_upload takes one file per call in this browser pane. Nothing was uploaded. Call it once for each file.";
function w9e(r) {
  return r.replace(/["\u0000-\u001f\u007f-\u009f\u2028\u2029]/g, "\uFFFD");
}
function fe(r) {
  return `Cannot upload "${w9e(r)}": only files this session is allowed to read can be uploaded. Ask the user to share the file with this session, or to add its folder with /add-dir.`;
}
function oe(r) {
  return `Cannot upload "${w9e(r)}": its name or folder is one that credentials are kept under (such as .env, a .pem or .key file, or .ssh), so it is not uploaded on Claude's word alone. Tell the user it was not uploaded.`;
}
function he(r) {
  return `Cannot upload "${w9e(r)}": the cloud browser saved it from a website, and a file in that folder is uploaded only with the cloud browser's own upload tool. Nothing was uploaded.`;
}
function Ifo(r) {
  return `Cannot upload "${w9e(r)}": only files this session is allowed to read can be uploaded. Ask the user to share the file or its folder with this session.`;
}
function pe(r) {
  return `Cannot upload "${w9e(r)}": file_upload \`paths\` must be absolute paths as this session sees them (for example /sessions/\u2026 in a Cowork VM, or a drive-letter path on Windows).`;
}
function V(r) {
  return `browser_batch sub-action name "${w9e(r)}" is not a valid tool name.`;
}
async function ne(r, e, a, i) {
  let n = r.paths;
  if (!Array.isArray(n) || n.length === 0) return { error: i.noPaths };
  let o = [];
  for (let g of n) {
    if (typeof g !== "string") return { error: "file_upload `paths` entries must be strings." };
    let u, b, C, y;
    try {
      ({ realPath: u, requiredDigest: b, outsideWorkingFolders: C, needsHostAsk: y } = await i.validate(g, e));
    } catch (S) {
      return (0, import_chunk_w578pjby.t)(`[${i.tag} file_upload] rejected path: ${g} (${S instanceof Error ? S.message : String(S)})`), { error: S instanceof Pwt ? oe(g) : S instanceof q ? he(g) : i.rejection(g) };
    }
    let P = await Se(g, u, a, i.tag, C ? i.rejection : void 0);
    if ("error" in P) return { error: P.error };
    if (b !== void 0 && (0, import_chunk_ccm69jjy.Je)(P.buf) !== b) return (0, import_chunk_w578pjby.t)(`[${i.tag} file_upload] registered attachment digest mismatch: ${g}`), { error: i.rejection(g) };
    o.push({ data: P.buf.toString("base64"), name: await ZWe(u), mimeType: Ue(u), ...i.namesSource && { sourcePath: u, requestedPath: w9e(g).replace(/[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g, "\uFFFD"), needsHostAsk: y !== false } });
  }
  let { paths: f, ...k } = r;
  if (!i.namesSource) return { input: { ...k, files: o } };
  let { needsHostAsk: l, sourcePath: c, requestedPath: p, hostAsksPerFile: _, ...h } = k;
  return { input: { ...h, files: o } };
}
async function ZWe(r) {
  let e = await (0, import_promises.realpath)((0, import_chunk_fwgyarbe.ov)()).catch(() => {
    return;
  });
  return e !== void 0 && (0, import_path.dirname)(r) === e ? (0, import_chunk_fwgyarbe.Dal)((0, import_path.basename)(r)) : (0, import_path.basename)(r);
}
function ae(r, e, a = false) {
  let i = a ? r.trim() : (0, import_chunk_n2dbhmj2.xt)(r), n = r.trim();
  if ((0, import_chunk_z6pfqf6e.xv)(n) || (0, import_chunk_z6pfqf6e.xv)(i)) throw new import_chunk_jv7av99m.A(`network path not allowed: ${(0, import_chunk_z6pfqf6e.xv)(n) ? n : i}`, "claudeInChrome/fileUpload: network path rejected before filesystem access");
  let { paths: o, vetted: f } = a ? { paths: [i], vetted: true } : (0, import_chunk_w578pjby.gJ)(i);
  if (!f) throw new import_chunk_jv7av99m.A("path could not be vetted (symbolic link chain or unreadable component)", "claudeInChrome/fileUpload: unvettable path ancestry rejected before filesystem access");
  let k = e.trustedNetworkDirectories;
  for (let l of [n, ...o]) H(l, k);
  return { absPath: i, absChain: o };
}
function H(r, e) {
  if ((0, import_chunk_p1ewvgeh.nLe)(r, e) || (0, import_chunk_p1ewvgeh.y2e)(r, e)) throw new import_chunk_jv7av99m.A(`network path not allowed: ${r}`, "claudeInChrome/fileUpload: network path rejected");
  if ((0, import_chunk_p1ewvgeh.m4)(r, e)) throw new import_chunk_jv7av99m.A(`suspicious path spelling: ${r}`, "claudeInChrome/fileUpload: suspicious Windows path pattern rejected");
}
class E extends import_chunk_jv7av99m.A {
  rule;
  constructor(r, e, a) {
    super(r, e);
    this.rule = a;
  }
}
function D(r, e, a = {}) {
  for (let i of r) {
    let n = (0, import_chunk_p1ewvgeh.Ia)(i, e, "read", "deny", a);
    if (n) throw new E(`read denied: ${i}`, "claudeInChrome/fileUpload: path matches a read deny rule", n);
    let o = (0, import_chunk_p1ewvgeh.Ia)(i, e, "read", "ask", a);
    if (o) throw new E(`read requires approval: ${i}`, "claudeInChrome/fileUpload: path matches a read ask rule", o);
  }
}
var me = 4096, ge = 3, we = 64;
async function _e(r, e) {
  return (await TNn(r, e)).judged;
}
async function TNn(r, e, a = ge, i = /* @__PURE__ */ new Set(), { mappedByHost: n = false } = {}) {
  let o = r.trim();
  if (o !== r) throw new import_chunk_jv7av99m.A("surrounding whitespace", "claudeInChrome/fileUpload: whitespace-padded path rejected on the pass-through");
  if (o.length > me) throw new import_chunk_jv7av99m.A("path too long", "claudeInChrome/fileUpload: over-long path rejected on the pass-through");
  if (a < 0) throw new import_chunk_jv7av99m.A(`nested percent-encoding: ${o}`, "claudeInChrome/fileUpload: multiply percent-encoded path rejected on the pass-through");
  if (o.split(/[/\\]/).some((u) => u === "..")) throw new import_chunk_jv7av99m.A(`parent-segment spelling not allowed: ${o}`, "claudeInChrome/fileUpload: dot-dot segment rejected on the pass-through");
  j(o);
  let f = n ? o : (0, import_chunk_n2dbhmj2.xt)(o);
  if (n ? !o.startsWith("/") : !ke(o, f)) throw new B();
  if ((0, import_chunk_cg8dqz0a.x)() !== "windows" && o.includes("\\")) throw new import_chunk_jv7av99m.A(`backslash in a POSIX spelling: ${o}`, "claudeInChrome/fileUpload: backslash spelling rejected on the pass-through");
  if (/[/\\]\.?$/.test(o)) throw new import_chunk_jv7av99m.A("trailing separator", "claudeInChrome/fileUpload: trailing-separator path rejected on the pass-through");
  let k = (0, import_chunk_ht27b0vz.Tr)(e, { name: import_chunk_k883m4fq.De }) ?? (0, import_chunk_ht27b0vz.Di)(e, { name: import_chunk_k883m4fq.De });
  if (k !== null) throw new E("Read tool is restricted for this session", "claudeInChrome/fileUpload: Read tool denied or ask-gated for this session (pass-through)", k);
  for (let u of [o, f]) {
    let b = await K(u);
    if (b !== void 0) throw b === "credential_name" ? new Pwt() : L("a kernel or device path, or one of Claude Code's own credentials");
  }
  let l = o.split(/([/\\])/).map((u) => {
    if (u === "/" || u === "\\" || !u.includes("%")) return u;
    try {
      return decodeURIComponent(u);
    } catch {
      return u;
    }
  }).join("");
  if (l !== o) await TNn(l, e, a - 1, i, { mappedByHost: n });
  let { absChain: c } = ae(o, e, n);
  for (let u of c) j(u);
  let { realPath: p, looped: _, spellings: h } = n ? { realPath: void 0, looped: false, spellings: [] } : await Ce(f);
  for (let u of h) H(u, e.trustedNetworkDirectories), j(u);
  let g = /* @__PURE__ */ new Set();
  for (let u of /* @__PURE__ */ new Set([o, ...c, ...h])) {
    let b = be(u);
    if (b !== null && !i.has(b)) {
      if (i.size >= we) throw new import_chunk_jv7av99m.A("too many stream-base spellings", "claudeInChrome/fileUpload: stream-base fan-out rejected on the pass-through");
      i.add(b);
      try {
        await TNn(b, e, a, i, { mappedByHost: n });
      } catch (C) {
        throw C instanceof Pwt ? L(G) : C;
      }
    }
    for (let C of [u, (0, import_chunk_z6pfqf6e.lA)(u)]) g.add(C).add(C.normalize("NFC")).add(C.normalize("NFD"));
  }
  D(g, e), D(g, e, { caseInsensitiveTarget: true });
  for (let u of g) if (await K(u) !== void 0) throw L(G);
  return { judged: f, resolved: p, linked: c.length > 1 || _ };
}
function K(r) {
  return (0, import_chunk_w82axegn.J6)(r, r, { readable: true, secretStores: I() });
}
var G = "a name or place reached through a link, a case- or Unicode-folded spelling, or the file before a ':stream'";
function L(r) {
  return new import_chunk_jv7av99m.A(r, "claudeInChrome/fileUpload: path refused by its name or place on the pass-through");
}
function ke(r, e) {
  if ((0, import_chunk_z6pfqf6e.$r)(r) || (0, import_chunk_z6pfqf6e.$r)(e)) return true;
  if (!(0, import_path.isAbsolute)(r)) return false;
  return (0, import_chunk_cg8dqz0a.x)() !== "windows" || /^[a-z]:[\\/]/i.test(e);
}
function be(r) {
  let e = r.length;
  for (; ; ) {
    let f = r[e - 1];
    if (f === "/" || f === "\\") {
      e -= 1;
      continue;
    }
    if (f === "." && e >= 2 && (r[e - 2] === "/" || r[e - 2] === "\\")) {
      e -= 2;
      continue;
    }
    break;
  }
  let a = r.slice(0, e), i = Math.max(a.lastIndexOf("/"), a.lastIndexOf("\\")) + 1, n = a.indexOf(":", i + 1);
  if (n === -1 || i === 0 && n === 1) return null;
  let o = n;
  while (o > i && a[o - 1] === " ") o -= 1;
  return a.slice(0, o);
}
class B extends Error {
  constructor() {
    super("not an anchored absolute path");
  }
}
async function Ce(r) {
  let e;
  try {
    e = await (0, import_promises.realpath)(r);
  } catch (a) {
    return { realPath: void 0, looped: (0, import_chunk_jv7av99m.w)(a) === "ELOOP", spellings: [] };
  }
  return { realPath: e, looped: false, spellings: (0, import_chunk_w578pjby.Ei)(e) };
}
function j(r) {
  let e = r.replace(/\\/g, "/");
  if (/^\/(?:dev|proc)(?:\/|$)/i.test(e) || (0, import_chunk_z6pfqf6e.$w)(e) || (0, import_chunk_w82axegn.k9e)(e) || /:\$[a-z_]/i.test(e) || (0, import_chunk_z6pfqf6e.KS)(e) || e.split("/").some(import_chunk_z6pfqf6e.lx)) throw new import_chunk_jv7av99m.A(`alias namespace path not allowed: ${r}`, "claudeInChrome/fileUpload: kernel alias namespace path rejected on the pass-through");
}
async function O(r, e, a = I()) {
  if (await (0, import_chunk_w82axegn.J6)(r, e, { readable: true, secretStores: a }) === "credential_name") throw new Pwt();
}
function X(r) {
  return new import_chunk_jv7av99m.A(`path through a named fork: ${r}`, "claudeInChrome/fileUpload: path through a named fork rejected");
}
async function N(r, e, a = I()) {
  if (r.length > import_chunk_w82axegn.v9e) throw new import_chunk_jv7av99m.A("path too long", "claudeInChrome/fileUpload: over-long path rejected");
  let i = await rfs(e), n = (0, import_chunk_n2dbhmj2.xt)(r);
  if (!i.some((h) => (h.fromChat || h.kind === "attachments") && n.startsWith(h.path + import_path.sep))) await O(n, n, a);
  if ((0, import_chunk_w82axegn.k9e)(n)) throw X(n);
  let { absPath: o, absChain: f } = ae(r, e), k = e.trustedNetworkDirectories, l = await (0, import_promises.realpath)(o), c = /* @__PURE__ */ new Set([...f, ...(0, import_chunk_w578pjby.Ei)(l)]);
  for (let h of c) H(h, k);
  D(c, e), D(c, e, { caseInsensitiveTarget: true });
  let p = await (0, import_chunk_w82axegn.J6)(o, l, { readable: true, attached: true });
  if (p === "named_fork") throw X(l);
  if (p !== void 0) throw new import_chunk_jv7av99m.A(`kernel or device path, or one of Claude Code's credentials: ${l}`, "claudeInChrome/fileUpload: kernel or device path, or one of Claude Code's own credentials");
  if ((0, import_chunk_6mfepmbb.Vze)(o) || (0, import_chunk_6mfepmbb.Vze)(l)) throw new q(l);
  for (let h of i) {
    let g = await (0, import_promises.lstat)(h.path).catch(() => null);
    if (g === null || g.isSymbolicLink() || !g.isDirectory()) continue;
    let u = await (0, import_promises.open)(h.path, import_fs.constants.O_RDONLY | ue | te).catch(() => null);
    if (u === null) continue;
    let b;
    try {
      let C = await u.stat();
      if (!C.isDirectory()) continue;
      let y = await (0, import_promises.realpath)(h.path).catch(() => {
        return;
      });
      if (y === void 0) continue;
      let P = await (0, import_promises.stat)(y).catch(() => null);
      if (P === null || P.ino !== C.ino || P.dev !== C.dev) continue;
      b = y;
    } finally {
      await u.close();
    }
    if (l === b || l.startsWith(b + import_path.sep)) {
      if (h.kind === "staging") {
        let y = await (0, import_promises.realpath)((0, import_chunk_2gtmjt3y.Ze)()).catch(() => (0, import_chunk_2gtmjt3y.Ze)());
        if (b === y || b.startsWith(y + import_path.sep) || y.startsWith(b + import_path.sep)) continue;
        if (!h.fromChat) await O(o, l, a);
        return { absPath: o, realPath: l, pathsToCheck: c, sharedWithSession: h.fromChat ? { fromChat: true } : {}, sessionRoot: h.kind };
      }
      let C = (0, import_chunk_fwgyarbe.sUt)(l);
      if (C !== void 0) return { absPath: o, realPath: l, pathsToCheck: c, sharedWithSession: { requiredDigest: C }, sessionRoot: h.kind };
      break;
    }
  }
  let _ = (0, import_chunk_ht27b0vz.Tr)(e, { name: import_chunk_k883m4fq.De }) ?? (0, import_chunk_ht27b0vz.Di)(e, { name: import_chunk_k883m4fq.De });
  if (_ !== null) throw new E("Read tool is restricted for this session", "claudeInChrome/fileUpload: Read tool denied or ask-gated for this session", _);
  if ((0, import_chunk_pbteexar.jS)(e)) for (let h of c) {
    let g = (0, import_chunk_pqb914sj.cpe)(h, e, "read");
    if (!g.allowed && g.decisionReason?.type === "safetyCheck" && (g.decisionReason.reason === import_chunk_pbteexar.Hz || g.decisionReason.reason === import_chunk_pbteexar.SEe)) throw new import_chunk_jv7av99m.A(`read not allowed: ${h}`, "claudeInChrome/fileUpload: path outside the working directories under the read block");
  }
  return { absPath: o, realPath: l, pathsToCheck: c };
}
class q extends import_chunk_jv7av99m.A {
  constructor(r) {
    super(`a browser download: ${r}`, "claudeInChrome/fileUpload: a file in the folder of browser downloads");
  }
}
class Mfo extends import_chunk_jv7av99m.A {
  constructor(r) {
    super(`read not allowed: ${r}`, "claudeInChrome/fileUpload: path read not allowed by session permissions");
  }
}
async function Ust(r, e) {
  let a = await N(r, e);
  return a.sharedWithSession === void 0 ? se(a, e) : { realPath: a.realPath, ...a.sharedWithSession };
}
async function se({ absPath: r, realPath: e, pathsToCheck: a }, i) {
  if (i.mode === "bypassPermissions" && !i.restricted) return await O(r, e), { realPath: e };
  for (let n of a) {
    let o = (0, import_chunk_pqb914sj.R9e)(n, i);
    if ((0, import_chunk_pqb914sj.A9e)(o)) throw new Mfo(n);
    if (!o.allowed) throw new import_chunk_jv7av99m.A(`read not allowed: ${n}`, "claudeInChrome/fileUpload: path read not allowed by session permissions");
    if (i.restricted && (0, import_chunk_4fssttte.v7)(n, i)) throw new import_chunk_jv7av99m.A(`read not allowed under --restricted: ${n}`, "claudeInChrome/fileUpload: restricted mode refused a file only an allow rule opens");
  }
  return await O(r, e), { realPath: e };
}
async function uxi(r, e) {
  let a = await N(r, e), { absPath: i, realPath: n, pathsToCheck: o, sharedWithSession: f, sessionRoot: k } = a;
  if (f !== void 0) return { realPath: n, ...f, sessionRoot: k };
  if (e.mode !== "bypassPermissions" && !e.restricted) {
    let l = Array.from(o, (c) => (0, import_chunk_pqb914sj.R9e)(c, e));
    if (l.some((c) => (0, import_chunk_pqb914sj.A9e)(c))) {
      let c = l.some((p) => !p.allowed && !(0, import_chunk_pqb914sj.A9e)(p)) ? "another path of its chain is refused" : await (0, import_chunk_w82axegn.J6)(i, n, { realDirectory: M });
      if (c !== void 0) throw new import_chunk_jv7av99m.A(`outside the working folders and refused (${c}): ${n}`, "claudeInChrome/fileUpload: path outside the working folders refused: another path in its link chain is refused, or it is one of Claude Code's own files, or it is named like a credential");
      return { realPath: n, outsideWorkingFolders: true };
    }
  }
  return se(a, e);
}
async function ye(r, e, a) {
  let i = !a && I(), { absPath: n, realPath: o, pathsToCheck: f, sharedWithSession: k } = await N(r, e, i);
  if (k !== void 0) return { realPath: o, ...k, needsHostAsk: true };
  let { restricted: l } = e, c = Re(o, e), p = false, _ = false;
  for (let g of f) {
    let u = (0, import_chunk_pqb914sj.R9e)(g, e);
    if (u.allowed && !(l && u.decisionReason?.type === "rule") && (u.decisionReason !== void 0 || c)) {
      _ ||= u.decisionReason !== void 0;
      continue;
    }
    let b = !u.allowed && !(0, import_chunk_pqb914sj.A9e)(u) ? `refused by isPathAllowed (${u.decisionReason?.type ?? "no reason given"})` : l ? "--restricted session: no rule or host question reaches outside the working folders" : !a ? "outside the working folders, and the host does not ask per file" : void 0;
    if (b !== void 0) throw new import_chunk_jv7av99m.A(`read not allowed (${b}): ${g}`, "claudeInChrome/fileUpload: pane path read not allowed by session permissions");
    p = true;
  }
  if (!p) return await O(n, o, i), { realPath: o, needsHostAsk: _ || I() && await (0, import_chunk_w82axegn.J6)(n, o, { readable: true, secretStores: true }) === "credential_name" || await (0, import_chunk_w82axegn.f_r)(o, M).catch((g) => ((0, import_chunk_w578pjby.t)(`[pane file_upload] own-files check failed, so the host asks: ${(0, import_chunk_jv7av99m.d)(g)}`), true)) };
  let h = await (0, import_chunk_w82axegn.J6)(n, o, { realDirectory: M });
  if (h !== void 0) throw new import_chunk_jv7av99m.A(`refused by its name or place (${h}): ${o}`, "claudeInChrome/fileUpload: pane path outside the working folders is one of Claude Code's own files or is named like a credential");
  return { realPath: o, outsideWorkingFolders: true, needsHostAsk: true };
}
function Re(r, e) {
  return Array.from((0, import_chunk_p1ewvgeh.sv)(e)).flatMap((a) => (0, import_chunk_p1ewvgeh.rLe)(a)).some((a) => (0, import_chunk_p1ewvgeh.Sc)(r, a, { caseFold: false, skipPrivateAlias: true, uncShapeParity: true }));
}
async function M(r) {
  try {
    return await (0, import_promises.realpath)(r);
  } catch (e) {
    if (Ae(r, e)) return;
    throw e;
  }
}
function Ae(r, e) {
  if ((0, import_chunk_jv7av99m.kn)(e)) return true;
  let a = (0, import_chunk_jv7av99m.w)(e);
  return r === (0, import_path.dirname)(import_chunk_fzp6hh55.Oee) && (a === "EACCES" || a === "EPERM");
}
async function Ee(r, e) {
  let a = e + 1, i = Buffer.allocUnsafe(a), n = 0;
  while (n < a) {
    let { bytesRead: o } = await r.read(i, n, a - n, n);
    if (o === 0) break;
    n += o;
  }
  if (n > e) return "grew";
  return { buf: i.subarray(0, n) };
}
async function sfs(r, e, a) {
  let n = await (0, import_promises.realpath)(e).catch(() => null) === e ? await (0, import_promises.stat)(e).catch(() => null) : null;
  if (n === null || n.ino !== a.ino || n.dev !== a.dev) return "moved";
  return "ok";
}
async function tbe(r, e, a) {
  let i = await (0, import_promises.lstat)(r).catch(() => null);
  if (i === null || !i.isFile()) return { refusal: "not_regular" };
  let n;
  try {
    n = await (0, import_promises.open)(r, import_fs.constants.O_RDONLY | te | de);
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`readValidatedFileWithin: open failed: ${(0, import_chunk_jv7av99m.d)(o)}`), { refusal: "open_failed", detail: (0, import_chunk_jv7av99m.Cr)(o) ?? "unknown error" };
  }
  try {
    let o = await n.stat();
    if (o.nlink > 1) return { refusal: "hard_links" };
    if (!o.isFile()) return { refusal: "moved" };
    if (await sfs(n, r, o) === "moved") return { refusal: "moved" };
    if (a !== void 0) {
      if (o.size > e) return { refusal: "too_large", size: o.size };
      return await a(n, o.size), { buf: Buffer.alloc(0) };
    }
    if (o.size > e) return { refusal: "too_large" };
    let f = await Ee(n, o.size);
    if (f === "grew") return { refusal: "grew" };
    return { buf: f.buf };
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`readValidatedFileWithin: read failed: ${(0, import_chunk_jv7av99m.d)(o)}`), { refusal: "read_failed", detail: (0, import_chunk_jv7av99m.Cr)(o) ?? "unknown error" };
  } finally {
    await n.close();
  }
}
async function Se(r, e, a, i, n) {
  let o = await tbe(e, a.remaining);
  if ("buf" in o) return a.remaining -= o.buf.length, o;
  if (n !== void 0) {
    let f = "detail" in o ? `: ${o.detail}` : "";
    return (0, import_chunk_w578pjby.t)(`[${i} file_upload] read refused (${o.refusal}${f}): ${r}`), { error: n(r) };
  }
  return { error: Oe(r, o, a.total) };
}
function Oe(r, e, a = Owt) {
  let i = w9e(r);
  switch (e.refusal) {
    case "not_regular":
      return `Cannot upload "${i}": not a regular file.`;
    case "open_failed":
      return `Cannot upload "${i}": failed to open file (${e.detail}).`;
    case "hard_links":
      return `Cannot upload "${i}": the file has multiple hard links, which can alias a file outside the session's allowed directories. This commonly triggers for files inside package-manager stores like node_modules (Bun and pnpm hard-link packages). Copy the file (e.g. with cp) and upload the copy.`;
    case "moved":
      return `Cannot upload "${i}": path moved during validation.`;
    case "too_large":
      return `Cannot upload "${i}": the files in one call can total at most ${a >= 1e6 ? `${(Math.floor(a / 1e5) / 10).toFixed(1)} MB` : a >= 1e3 ? `${Math.floor(a / 1e3)} KB` : `${a} bytes`}, and nothing in this call was uploaded. Upload a smaller file, or one file per call if the page takes them one at a time. Otherwise ask the user to choose the file in their browser themselves.`;
    case "grew":
      return `Cannot upload "${i}": file grew during read.`;
    case "read_failed":
      return `Cannot upload "${i}": failed to read file (${e.detail}).`;
  }
}
var Ie = { ".pdf": "application/pdf", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".webp": "image/webp", ".svg": "image/svg+xml", ".txt": "text/plain", ".md": "text/markdown", ".csv": "text/csv", ".tsv": "text/tab-separated-values", ".json": "application/json", ".html": "text/html", ".htm": "text/html", ".xml": "application/xml", ".zip": "application/zip", ".doc": "application/msword", ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", ".xls": "application/vnd.ms-excel", ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ".ppt": "application/vnd.ms-powerpoint", ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation", ".mp3": "audio/mpeg", ".wav": "audio/wav", ".mp4": "video/mp4", ".webm": "video/webm" };
function Ue(r) {
  return Ie[(0, import_path.extname)(r).toLowerCase()] ?? "application/octet-stream";
}
function I() {
  return (0, import_chunk_sghy0qej.Pe)(ce, { safe: true });
}
