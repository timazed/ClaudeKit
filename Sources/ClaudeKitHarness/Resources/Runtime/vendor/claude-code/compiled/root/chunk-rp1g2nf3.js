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
var chunk_rp1g2nf3_exports = {};
__export(chunk_rp1g2nf3_exports, {
  $Ot: () => $Ot,
  B9l: () => B9l,
  Ega: () => Ega,
  G8n: () => G8n,
  Tga: () => Tga,
  U9l: () => U9l,
  g$o: () => g$o,
  gBr: () => gBr,
  hBr: () => hBr,
  j8n: () => j8n,
  vga: () => vga
});
module.exports = __toCommonJS(chunk_rp1g2nf3_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_p548ry42 = require("/$bunfs/root/chunk-p548ry42.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_2cayg0rf = require("/$bunfs/root/chunk-2cayg0rf.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var X = "<cloud-transcript-unavailable>";
function hBr(e) {
  let o = e.length;
  while (o > 0 && e[o - 1] === "/") o -= 1;
  return o === 0 && e.startsWith("/") ? "/" : e.slice(0, o);
}
function Y(e) {
  return e !== "" && e !== "." && e !== ".." && !/[\p{Cc}\p{Cf}\u2028\u2029\\:]/u.test(e);
}
function q(e, o) {
  let n = hBr(o.containerProjectDir), r = hBr(o.deviceLaunchDir);
  if (!n.startsWith("/") || !r.startsWith("/") || n === "/") return null;
  if (!(0, import_chunk_p548ry42.kGt)(e, n)) return null;
  if (e === n || e === `${n}/`) return r;
  let c = e.slice(n.length + 1).split("/"), l = c.at(-1) === "" ? c.slice(0, -1) : c;
  return l.length > 0 && l.every(Y) ? `${r === "/" ? "" : r}/${l.join("/")}` : null;
}
var E = { Read: { input: "file_path", responseNested: [["file", "filePath"], ["file", "outputDir"]] }, Write: { input: "file_path", responseMembers: ["filePath"] }, Edit: { input: "file_path", responseMembers: ["filePath"] }, MultiEdit: { input: "file_path", responseMembers: ["filePath"] }, NotebookEdit: { input: "notebook_path", responseMembers: ["notebook_path"] }, Glob: { input: "path", responseArrays: ["filenames"] }, Grep: { input: "path", responseArrays: ["filenames"] }, LSP: { input: "filePath", responseMembers: ["filePath"] }, Bash: { responseMembers: ["rawOutputPath", "persistedOutputPath"] }, Agent: { input: "cwd", responseMembers: ["worktreePath", "outputFile"] }, Workflow: { input: "scriptPath", responseMembers: ["scriptPath", "transcriptDir"] }, EnterWorktree: { input: "path", responseMembers: ["worktreePath"] }, ExitWorktree: { responseMembers: ["worktreePath", "originalCwd"] } }, de = new Set(Object.values(E).flatMap((e) => e.responseMembers ?? [])), pe = new Set(Object.values(E).flatMap((e) => (e.responseNested ?? []).map(([o, n]) => `${o}/${n}`)));
function j8n(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function G8n(e) {
  return e.split("/").slice(1).map((o) => o.replace(/~1/g, "/").replace(/~0/g, "~"));
}
function Ega(e) {
  let o = G8n(e), n = o[0] === "tool_calls" ? o.slice(2) : o;
  if (n[0] === "tool_input") return n.length >= 1;
  if (n[0] === "tool_response") return n.length === 2 && (n[1] === "filePath" || n[1] === "notebook_path" || n[1] === "file") || n.length === 3 && n[1] === "file" && n[2] === "filePath";
  return false;
}
function vga(e) {
  let o = G8n(e), n = o[0] === "tool_calls" ? o.slice(2) : o;
  return n[0] === "tool_response" && (n.length === 2 && de.has(n[1] ?? "") || n.length === 3 && pe.has(`${n[1]}/${n[2]}`));
}
function $Ot(e) {
  return me.test(e) || L.test(e);
}
function gBr(e, o) {
  return Q(e, o)?.input;
}
var me = /(?:^|_)(?:path|paths|file|files|filename|filenames|dir|directory|directories|cwd|filepath|filepaths|abspath|realpath|fullpath|relpath|dirname|basename|pathname|folder|folders|dirs|workdir|outdir|rootdir|basedir|tmpdir|subdir|srcdir|destdir|builddir|datadir|homedir)$|(?:Path|Paths|File|Files|Filename|Filenames|Dir|Dirs|Directory|Directories|Folder|Folders|Cwd)$/, L = /(?:^|_)(?:uri|uris|url|urls)$|(?:Uri|Uris|Url|Urls|URI|URIs|URL|URLs)$/, z = /^(?:https?|s3|gs|ftps?|mailto|data):[^\p{Cc}\p{Cf}\p{Z}\s]*$/iu, fe = 4, C = 256;
function S(e, o, n, r, c, l = 0, f = false, a = false) {
  if (l > fe || l > 0 && c.members <= 0) {
    if (typeof e === "object" && e !== null) v(r, o);
    return e;
  }
  if (Array.isArray(e)) {
    let s = false, p = e.map((m, g) => {
      let k = `${o}/${g}`;
      if (k in r.paths || r.listed.has(k)) return m;
      let _ = f && !(P(m) && Object.keys(m).some($Ot)), y = f && typeof m === "string" ? a && z.test(m) ? m : A(m, k, n, r) : S(m, k, n, r, c, l + 1, _, _ && a);
      return s ||= y !== m, y;
    });
    return s ? p : e;
  }
  if (!P(e)) return e;
  let h = e, u = false;
  for (let [s, p] of Object.entries(e)) {
    let m = `${o}/${j8n(s)}`;
    if (l > 0) {
      if (c.members -= 1, c.members < 0) {
        v(r, o);
        break;
      }
    }
    let g = p, k = false;
    if ((f || $Ot(s)) && !(m in r.paths) && !r.listed.has(m)) {
      let _ = a || L.test(s);
      if (typeof p === "string") k = true, g = _ && z.test(p) ? p : A(p, m, n, r);
      else if (Array.isArray(p)) k = true, g = S(p, m, n, r, c, l + 1, true, _);
    }
    if (!k && g === p && typeof p === "object" && p !== null) {
      let y = (f || $Ot(s)) && !(P(p) && Object.keys(p).some($Ot));
      g = S(p, m, n, r, c, l + 1, y, y && (a || L.test(s)));
    }
    if (g !== p) {
      if (!u) h = { ...e }, u = true;
      h[s] = g;
    }
  }
  return h;
}
function V(e, o, n, r, c, l) {
  if (l && typeof e === "string") return A(e, o, n, r);
  return S(e, o, n, r, c, 0, l && Array.isArray(e));
}
function Z(e) {
  let o = e.trim();
  return o !== e || /^~[^/]*(?:$|\/)/.test(o) || /^[$%`!=]/.test(o);
}
function K(e) {
  return Object.hasOwn(E, e);
}
function Q(e, o) {
  let n = (0, import_chunk_qebpc5de.Gl)(e);
  if (K(n)) return E[n];
  let r = (0, import_chunk_qebpc5de.nJ)(n, o).map(import_chunk_qebpc5de.Gl).find(K);
  return r === void 0 ? void 0 : E[r];
}
function v(e, o) {
  if (!e.listed.has(o)) e.listed.add(o), e.untranslated.push(o);
}
var P = import_chunk_ma3kja9f.T;
function A(e, o, n, r) {
  if (typeof e !== "string") return e;
  if (Z(e)) return v(r, o), e;
  if (!e.startsWith("/")) {
    let l = (e.endsWith("/") ? e.slice(0, -1) : e).split("/").filter((f) => f !== ".");
    if (e !== "" && l.length > 0 && !l.every(Y)) v(r, o);
    return e;
  }
  let c = q(e, n);
  if (c === null) return v(r, o), e;
  return r.paths[o] = e, c;
}
function x(e, o, n, r, c) {
  if (!P(e) || !(o in e)) return e;
  let l = A(e[o], n, r, c);
  return l === e[o] ? e : { ...e, [o]: l };
}
function he(e, o, n, r, c) {
  if (!P(e) || !Array.isArray(e[o])) return e;
  let l = false, f = e[o].map((a, h) => {
    let u = A(a, `${n}/${h}`, r, c);
    return l ||= u !== a, u;
  });
  return l ? { ...e, [o]: f } : e;
}
function U(e, o, n, r, c) {
  let l = Q(e.tool_name, c);
  if (l === void 0 || !P(e.tool_input)) {
    let u = { members: C }, s = V(e.tool_input, `${o}/tool_input`, n, r, u, true);
    return "tool_response" in e ? { ...e, tool_input: s, tool_response: V(e.tool_response, `${o}/tool_response`, n, r, u, false) } : { ...e, tool_input: s };
  }
  let f = l.input === void 0 ? e.tool_input : x(e.tool_input, l.input, `${o}/tool_input/${l.input}`, n, r);
  if (!("tool_response" in e)) return { ...e, tool_input: S(f, `${o}/tool_input`, n, r, { members: C }) };
  let a = e.tool_response;
  for (let u of l.responseMembers ?? []) a = x(a, u, `${o}/tool_response/${u}`, n, r);
  for (let [u, s] of l.responseNested ?? []) if (P(a) && P(a[u])) a = { ...a, [u]: x(a[u], s, `${o}/tool_response/${u}/${s}`, n, r) };
  for (let u of l.responseArrays ?? []) a = he(a, u, `${o}/tool_response/${u}`, n, r);
  let h = { members: C };
  return { ...e, tool_input: S(f, `${o}/tool_input`, n, r, h), tool_response: S(a, `${o}/tool_response`, n, r, h) };
}
function Tga(e, o, n, r) {
  let c = { paths: {}, untranslated: [], listed: /* @__PURE__ */ new Set() }, l = Z(e.cwd) ? null : q(e.cwd, o);
  if (l === null) v(c, "/cwd");
  let f = l ?? hBr(o.deviceLaunchDir), a = { ...e, cwd: f, transcript_path: X };
  if ("agent_transcript_path" in a) a = { ...a, agent_transcript_path: X };
  switch (a.hook_event_name) {
    case "PreToolUse":
    case "PostToolUse":
    case "PostToolUseFailure":
    case "PermissionDenied":
      a = U(a, "", o, c, r);
      break;
    case "PermissionRequest":
      if (a = U(a, "", o, c, r), a.permission_suggestions !== void 0) v(c, "/permission_suggestions");
      break;
    case "PostToolBatch":
      a = { ...a, tool_calls: a.tool_calls.map((u, s) => U(u, `/tool_calls/${s}`, o, c, r)) };
      break;
    default:
      break;
  }
  let h = { id: n.cloudSessionId, container_cwd: o.containerCwd, container_project_dir: o.containerProjectDir, device_launch_dir: o.deviceLaunchDir, original: { cwd: e.cwd, transcript_path: e.transcript_path, ..."agent_transcript_path" in e && { agent_transcript_path: e.agent_transcript_path }, paths: c.paths } };
  return { input: { ...a, cloud_session: h }, untranslated: c.untranslated };
}
var ee = 3, ge = 64, re = ["PreToolUse", "PostToolUse", "PostToolUseFailure", "UserPromptSubmit"], te = [...re, "PostToolBatch", "UserPromptExpansion", "Stop"];
function ie() {
  let e = false, o = null, n = 0, r = false, c = 0, l = /* @__PURE__ */ new Set();
  return { skipped({ event: f, agentId: a, machine: h, inTurn: u }, s) {
    if (!e) e = true, r = false, c = 0;
    let p = a ?? "main", m = u && o !== s && a === void 0 && te.includes(f), g = u && (r || n < ee) && !l.has(p) && (a === void 0 || c < ge) && oe(f, "Hooks that run on the user's own machine are paused because it did not answer in time. Tool calls proceed without them. If the user asks whether their hooks ran, say they were paused.");
    if (m) o = s;
    if (g) l.add(p), c += a === void 0 ? 0 : 1, n += r ? 0 : 1, r = true;
    return { ...m && { systemMessage: `Paused hooks from "${h}" because it did not answer in time. Tool calls continue without them.` }, ...g && { hookSpecificOutput: g } };
  }, answered({ event: f, agentId: a, machine: h, inTurn: u }, s) {
    if (e = false, !u || (0, import_chunk_sjqze7qg.xT)(s)) return s;
    let p = a ?? "main", m = o !== null && a === void 0 && te.includes(f), g = l.has(p) && oe(f, `Hooks from a machine the user attached are running.${n >= ee ? " Later changes are not announced." : ""}`);
    if (!m && !g) return s;
    if (m) o = null;
    if (g) l.delete(p);
    let k = s.hookSpecificOutput, _ = k !== void 0 && "additionalContext" in k ? k.additionalContext : void 0;
    return { ...s, ...m && { systemMessage: ne(s.systemMessage, `Resumed hooks from "${h}".`) }, ...g && { hookSpecificOutput: { ...g, ...k, additionalContext: ne(_, g.additionalContext) } } };
  } };
}
function oe(e, o) {
  let n = re.find((r) => r === e);
  return n && { hookEventName: n, additionalContext: o };
}
function ne(e, o) {
  return e === void 0 ? o : `${e}
${o}`;
}
var _e = 1044480, g$o = { PreToolUse: 15, PostToolUse: 15, PostToolUseFailure: 15, PostToolBatch: 15, PermissionDenied: 15, SubagentStart: 15, UserPromptSubmit: 30, UserPromptExpansion: 30, Stop: 120, StopFailure: 120, SubagentStop: 120 }, we = 5e3, ye = 30;
function ae(e) {
  return (e.timeoutS ?? g$o[e.event]) * 1e3 + we;
}
function Pe(e) {
  return Math.ceil(ae(e) / 1e3) + ye;
}
function U9l(e) {
  let o = e.install ?? import_chunk_sjqze7qg.Qio, n = e.remove ?? import_chunk_sjqze7qg.Zio, r = e.absence ?? ie(), c = /* @__PURE__ */ new Set(), l = () => e.registry.current()?.displayName ?? "the attached machine", f = (u, s) => c.has(u) ? {} : (c.add(u), { systemMessage: s }), a = (u, s, p = {}) => e.telemetry.forwarded({ event: u.event, outcome: s, fieldsDropped: p.fieldsDropped ?? false, blocked: p.blocked ?? false, rttMs: p.rttMs ?? 0, errorRepliesIgnored: p.errorRepliesIgnored ?? 0, malformedRepliesIgnored: p.malformedRepliesIgnored ?? 0 }), h = (u, s, p = e.registry.generation()) => async (m, g, k, _, y) => {
    let j = () => {
      let b = e.registry.current();
      return b !== null && b.instanceId === u && e.now() < b.leaseExpiresAt && b.entries.some((O) => O.id === s.id);
    };
    if (!j()) return a(s, "owner_gone"), {};
    if (e.registry.isAway(u)) return a(s, "away_skipped"), se({}, () => r.skipped({ event: s.event, agentId: m.agent_id, machine: l(), inTurn: y !== void 0 }, u));
    let R = null, B = 0, W = false;
    try {
      let b = (0, import_chunk_w578pjby.Ka)(m);
      W = !await Re(b, e.toolAliases(), { realpath: e.realpath ?? Se, readlink: e.readlink ?? ve }), B = Buffer.byteLength((0, import_chunk_2cayg0rf.yVs)(b), "utf8"), R = b;
    } catch {
    }
    let H = B > _e;
    if (R === null || H) return (0, import_chunk_w578pjby.t)(`Device hook ${s.id}: input ${H ? "exceeds what the device accepts" : "is not plain serialisable data"}; not forwarded`, { level: "warn" }), a(s, H ? "input_too_large" : "input_unclonable"), s.event === "PreToolUse" ? { hookSpecificOutput: { hookEventName: "PreToolUse", permissionDecision: "deny", permissionDecisionReason: `[hook on ${e.registry.current()?.displayName ?? "your machine"}]: not run \u2014 the tool call ${H ? "is too large to forward to the attached machine; retry with a smaller input" : "could not be forwarded to the attached machine; retry with plain input"}` } } : {};
    if (W) return a(s, "input_unresolvable"), s.event === "PreToolUse" ? { hookSpecificOutput: { hookEventName: "PreToolUse", permissionDecision: "deny", permissionDecisionReason: `[hook on ${e.registry.current()?.displayName ?? "your machine"}]: not run \u2014 the path this tool call names could not be resolved for the attached machine; retry with a plain path` } } : {};
    if ((0, import_chunk_sjqze7qg.qJa)(R, e.toolAliases())) return a(s, "after_edit_held"), {};
    let J;
    try {
      let b = e.now(), O = l(), F = ae(s), D = e.sender.sendDeviceHookCallback({ callbackId: s.id, input: (0, import_chunk_bzyb60p0.Krs)(R, s.matcher, e.toolAliases()), toolUseID: g, issuedAt: b, deadlineMs: F, ...k !== void 0 && { signal: k } }), le = new Promise((ue) => {
        J = e.setTimer(() => ue("deadline"), F);
      }), N = await Promise.race([D.reply, le]), I = { rttMs: e.now() - b, errorRepliesIgnored: D.errorRepliesIgnored(), malformedRepliesIgnored: D.malformedRepliesIgnored() };
      if (N === "deadline") {
        if (e.registry.recordMiss(u, p), D.reply.catch(() => {
        }), D.cancel(), a(s, "deadline", I), p !== e.registry.generation()) return {};
        return f(`deadline:${s.event}`, `A ${s.event} hook on ${O} did not answer within ${Math.round(F / 1e3)}s; continuing without it. If it keeps missing, hooks from that machine pause until it registers again.`);
      }
      if ("malformed" in N) return a(s, "malformed", I), {};
      if (!j()) return a(s, "owner_gone", I), {};
      e.registry.recordHit(u);
      let { answer: M, report: G } = (0, import_chunk_sjqze7qg.Lfe)(N.answer, s.event);
      if (a(s, "answered", { ...I, fieldsDropped: G.dropped.length > 0 || G.truncated.length > 0, blocked: (0, import_chunk_sjqze7qg.xT)(M) }), e.registry.isAway(u)) return M;
      let ce = { event: s.event, agentId: R.agent_id, machine: O, inTurn: y !== void 0 };
      return se(M, () => r.answered(ce, M));
    } catch (b) {
      if ((0, import_chunk_jv7av99m.Fe)(b)) throw a(s, "aborted"), b;
      return (0, import_chunk_w578pjby.t)(`Device hook ${s.id}: forwarding failed internally: ${(0, import_chunk_jv7av99m.d)(b)}`, { level: "error" }), a(s, "internal_error"), {};
    } finally {
      J?.clear();
    }
  };
  return { forwardToDevice: h, installForOwner(u) {
    c.clear();
    let s = e.registry.generation(), p = {};
    for (let m of u.entries) {
      let g = p[m.event] ?? [];
      g.push({ ...m.matcher !== void 0 && { matcher: m.matcher }, hooks: [{ type: "callback", timeout: Pe(m), callback: h(u.instanceId, m, s) }] }), p[m.event] = g;
    }
    o(u.instanceId, p, "forwarded");
  }, removeForOwner(u) {
    n(u, "forwarded");
  } };
}
function se(e, o) {
  try {
    return o();
  } catch (n) {
    return (0, import_chunk_k449cc64.i)(Error("Device hooks: the away notice failed internally", { cause: n })), e;
  }
}
function B9l(e, o) {
  let n = setTimeout(e, o);
  return n.unref(), { clear: () => clearTimeout(n) };
}
var Se = (e) => (0, import_promises.realpath)(e), ve = (e) => (0, import_promises.readlink)(e), Te = 40;
async function Re(e, o, n) {
  let r = "tool_calls" in e && Array.isArray(e.tool_calls) ? e.tool_calls : [e], c = true;
  for (let l of r) {
    let f = De(l, o);
    if (f !== null && !await Ee(f, n)) c = false;
  }
  return c;
}
function De(e, o) {
  if (typeof e !== "object" || e === null || !("tool_name" in e) || typeof e.tool_name !== "string") return null;
  let n = "tool_input" in e ? e.tool_input : void 0;
  if (typeof n !== "object" || n === null) return null;
  let r = gBr(e.tool_name, o);
  if (r === void 0) return null;
  let c = n, l = c[r];
  return typeof l === "string" && import_path.posix.isAbsolute(l) ? { fields: c, member: r, value: l } : null;
}
async function Ee({ fields: e, member: o, value: n }, r) {
  let c = import_path.posix.normalize(n), l = [];
  for (let f = 0; f <= Te; f++) try {
    let a = await r.realpath(c), h = l.length === 0 ? a : import_path.posix.join(a, ...l);
    if (h !== n) e[o] = h;
    return true;
  } catch {
    let a = await r.readlink(c).catch(() => null);
    if (a !== null) {
      let u = import_path.posix.dirname(c), s = await r.realpath(u).catch(() => u);
      c = import_path.posix.normalize(import_path.posix.join(import_path.posix.resolve(s, a), ...l)), l = [];
      continue;
    }
    let h = import_path.posix.dirname(c);
    if (h === c) return true;
    l.unshift(import_path.posix.basename(c)), c = h;
  }
  return false;
}
