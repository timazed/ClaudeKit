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
var chunk_xs7m0bn1_exports = {};
__export(chunk_xs7m0bn1_exports, {
  O9o: () => O9o,
  P9o: () => P9o,
  aYr: () => aYr,
  dYr: () => dYr,
  iYr: () => iYr,
  lYr: () => lYr,
  mri: () => mri,
  pri: () => pri,
  tRn: () => tRn
});
module.exports = __toCommonJS(chunk_xs7m0bn1_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_gvzh3pxp = require("/$bunfs/root/chunk-gvzh3pxp.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_nnnbdrqx = require("/$bunfs/root/chunk-nnnbdrqx.js");
var import_chunk_3zfyrdna = require("/$bunfs/root/chunk-3zfyrdna.js");
var import_chunk_m2r5bdfb = require("/$bunfs/root/chunk-m2r5bdfb.js");
var import_chunk_sxd14zzs = require("/$bunfs/root/chunk-sxd14zzs.js");
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
var import_chunk_fpcs74d2 = require("/$bunfs/root/chunk-fpcs74d2.js");
var import_chunk_98tkmkvx = require("/$bunfs/root/chunk-98tkmkvx.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
function j(e) {
  let t;
  try {
    t = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true }).decode(e);
  } catch {
    return { ok: false, reason: "unreadable_frontmatter", detail: "the file is not valid UTF-8" };
  }
  return V(t);
}
function V(e) {
  let t = (0, import_chunk_p1ewvgeh.zd)(e, void 0, { untrusted: true });
  if (t.parseError !== void 0) return { ok: false, reason: "unreadable_frontmatter", detail: t.parseError };
  if (t.content.length === e.length) return { ok: false, reason: "no_frontmatter", detail: 'the file has no frontmatter block: it must open with a "---" line and close with another' };
  if (Object.keys(t.frontmatter).length === 0) return { ok: false, reason: "unreadable_frontmatter", detail: "the frontmatter is empty or is not a YAML mapping" };
  return { ok: true, frontmatter: t.frontmatter, text: e, contentStart: e.length - t.content.length };
}
function U(e, t) {
  return Bun.deepEquals(e, t);
}
function v() {
  return require("/$bunfs/root/chunk-4kvvnjdb.js");
}
var q = 524288, iYr = { ...import_chunk_3zfyrdna.sfo, past_list_bytes: "with an entry that puts the server over the limit of 512 KiB for all its entries in one connection (the server must serve fewer skills or shorten their entries)" };
function G(e) {
  return e.type !== void 0 && e.type !== "stdio" && (e.type === "claudeai-proxy" || e.type === "sdk" || (0, import_chunk_2mwshd9r.Bct)(e) || "url" in e && (0, import_chunk_qyhf6bts.KBn)(e.url) || (0, import_chunk_f9x2f6cx.st)() || (0, import_chunk_6e68m1dj.fT)() || (0, import_chunk_6e68m1dj.Qp)());
}
var z = { not_found: "because its SKILL.md file is not at the address that the server listed for it", unexpected_contents: "because the server's answer did not hold exactly its SKILL.md file, in a form that this app can read", size_mismatch: "because the content of its SKILL.md file does not match the size that the server listed for it", digest_mismatch: "because the content of its SKILL.md file does not match the checksum that the server listed for it", no_frontmatter: "because its SKILL.md file has no header", unreadable_frontmatter: "because the header of its SKILL.md file is not written in a form that this app can read", frontmatter_mismatch: "because the header of its SKILL.md file does not match the details that the server listed for it" };
async function pri({ serverName: e, connectionKey: t, uri: r, served: a, storageV5: i, context: o, isSlashLine: n }) {
  let h = (0, import_chunk_4vsz8a99.PU)(e);
  if (!(0, import_chunk_fpcs74d2.z_)()) throw new import_chunk_jv7av99m.A(`MCP skills are turned off for now, so this skill from MCP server "${h}" was not loaded. It cannot load until they are turned on again.`, "MCP skills turned off");
  if (!(0, import_chunk_fpcs74d2.wvt)(o.modelFacts, o.stickyBetas)) throw (0, import_chunk_cqa9hrgx.l)("skill_mcp_load", "skill_mcp_off_by_model"), new import_chunk_jv7av99m.A(`This skill from MCP server "${h}" was not loaded. ${import_chunk_fpcs74d2.Nwo}`, "MCP skills off for this model");
  let p = a.get(r);
  if (p === void 0) throw new import_chunk_jv7av99m.A(`This skill is no longer available from MCP server "${h}" in this session. ${lYr()}`, "MCP skill no longer served");
  let { options: k, abortController: f, agentId: c } = o, _ = (k.refreshMcpClients?.() ?? k.mcpClients).find((y) => y.name === e && (0, import_chunk_3bjtjsgp.Uo)(y.name, y.config) === t);
  if (_ === void 0 || !(0, import_chunk_xcgcdx61.ji)(_)) throw new import_chunk_jv7av99m.A(I() ? `MCP server "${h}" is not connected as it was when this skill was listed (it may have been reconfigured or disconnected, or may need you to sign in again). Start a new task or chat and invoke the skill again.` : `MCP server "${h}" is not connected as it was when this skill was listed (it may have been reconfigured or disconnected, or may need /login). Reconnect it from /mcp and invoke the skill again.`, "MCP server not connected");
  let g = (0, import_chunk_fpcs74d2.GBn)((0, import_chunk_fpcs74d2.jRe)(_));
  if (g !== void 0) throw P9o(e, g), new import_chunk_jv7av99m.A(`This skill from MCP server "${h}" was not loaded. ${g}`, "MCP skills of this server turned off");
  (0, import_chunk_ze4kt7fs.u0e)(_, c);
  let S = await v().mcpClientModule().ensureConnectedClient(_, { signal: f.signal, context: "MCP skill load" });
  (0, import_chunk_ze4kt7fs.u0e)(S, c);
  let O = G(S.config), B = O ? await Z(S, a, p, f.signal, n) : p, { entry: F, skillMd: E } = B, M = F.frontmatter.name, b = (y) => ee(S, O ? void 0 : a, F, y, f.signal, n), D = { serverName: e, skillName: M, row: E }, P = (0, import_chunk_f9x2f6cx.st)() && (0, import_chunk_m15w38ag.ne)() ? i : void 0, L = P && await (0, import_chunk_nnnbdrqx.z1a)(D, P), K = L !== void 0 && (0, import_chunk_3zfyrdna.LRi)(E, L).ok, T;
  if (L !== void 0 && K) T = L, (0, import_chunk_k449cc64.He)(e, `Skill '${M}' cache hit \u2014 no resources/read`);
  else {
    let y;
    try {
      y = await (0, import_chunk_gvzh3pxp._9e)(S, r, { signal: f.signal, timeout: (0, import_chunk_98tkmkvx.bf)() }, (0, import_chunk_2mwshd9r.DOo)(S.config, o.toolUseId));
    } catch (C) {
      if (v().mcpSdkErrorClassificationModule().isMcpResourceNotFoundError(C)) return b("not_found");
      if (f.signal.aborted) throw C;
      throw (0, import_chunk_k449cc64.He)(e, `Failed to read SKILL.md for '${M}': ${(0, import_chunk_kx2fp6pc.$c)((0, import_chunk_jv7av99m.d)(C))}`), Y(S, C), new import_chunk_jv7av99m.A(`The skill "${M}" from MCP server "${h}" was not loaded, because reading its SKILL.md file failed${n ? "" : ` (${(0, import_chunk_271xsh6x.Bl)((0, import_chunk_jv7av99m.d)(C))})`}. ${tRn()}`, "MCP skill read failed");
    }
    let R = (0, import_chunk_3zfyrdna.Vus)(y.contents, r, E.size);
    if (!R.ok) return b(R.reason);
    let N = (0, import_chunk_3zfyrdna.LRi)(E, R.bytes);
    if (!N.ok) return b(N.reason);
    T = R.bytes;
  }
  let w = j(T);
  if (!w.ok) return (0, import_chunk_k449cc64.He)(e, `SKILL.md for '${M}' has frontmatter this host cannot compare: ${(0, import_chunk_kx2fp6pc.$c)(w.detail)}`), b(w.reason);
  if (!U(F.frontmatter, w.frontmatter)) return b("frontmatter_mismatch");
  if (P && !K) await (0, import_chunk_nnnbdrqx.V1a)(D, T, P);
  return (0, import_chunk_k449cc64.He)(e, `Loaded MCP skill '${M}' from ${(0, import_chunk_kx2fp6pc.$c)(r)}`), (0, import_chunk_cqa9hrgx.u)("skill_mcp_load"), { body: (0, import_chunk_4vsz8a99.Fdn)((0, import_chunk_kx2fp6pc.qM)(w.text.slice(w.contentStart).trimStart())), loaded: B };
}
function P9o(e, t) {
  (0, import_chunk_k449cc64.He)(e, `Skills not used: ${t}`), (0, import_chunk_cqa9hrgx.l)("skill_mcp_load", t === import_chunk_fpcs74d2.dWi ? "skill_mcp_off_by_managed_key" : t === import_chunk_fpcs74d2.cWi ? "skill_mcp_off_by_plan" : t === import_chunk_fpcs74d2.lWi ? "skill_mcp_off_by_connector_switch" : t === import_chunk_fpcs74d2.pws ? "skill_mcp_off_by_compliance" : t === import_chunk_fpcs74d2.uWi ? "skill_mcp_off_by_no_policy" : "skill_mcp_off_by_lock");
}
function Y(e, t) {
  if (e.config.type === "claudeai-proxy" && v().mcpIsListAuthErrorModule().isClaudeAiBearerRejectedError(t)) (0, import_chunk_cqa9hrgx.l)("skill_mcp_load", "skill_mcp_claudeai_bearer_rejected");
  else (0, import_chunk_cqa9hrgx.m)("skill_mcp_load", "skill_mcp_fetch_failed");
}
function H(e, t) {
  return t ? "" : `: "${(0, import_chunk_271xsh6x.Bl)((0, import_chunk_jv7av99m.d)(e))}"`;
}
var W = "Anthropic Proxy: The safety check for this skill has no result yet. Try again shortly.", J = /^Anthropic Proxy: The safety check cannot take this skill\. The limits are (\d{1,4} [KM]B) for each text file, (\d{1,4} [KM]B) in all, and no archive or binary file\. It cannot load for now\.$/, Q = /^Anthropic Proxy: The safety scan stopped this version of the skill\. Content hash: ([0-9a-f]{64})\.$/;
async function Z(e, t, r, a, i) {
  let o = `The skill "${r.entry.frontmatter.name}" from MCP server "${(0, import_chunk_4vsz8a99.PU)(e.name)}" was not loaded`;
  if (!(0, import_chunk_fpcs74d2.VBn)(e.capabilities)) throw (0, import_chunk_cqa9hrgx.l)("skill_mcp_load", "skill_mcp_get_undeclared"), new import_chunk_jv7av99m.WE(`${o}, because the server no longer declares that it serves skills. ${lYr()}`);
  let n = await x(e, t, r.entry, a), h = ({ entry: { uri: c, resources: _ } }) => (0, import_chunk_sxd14zzs.IAe)({ serverName: e.name, uri: c, resources: _ });
  if ((n.outcome === "unchanged" || n.outcome === "changed") && h(n.skill) === h(r) && Bun.deepEquals(n.skill.entry.frontmatter, r.entry.frontmatter)) return n.skill;
  if (n.outcome === "unusable") (0, import_chunk_cqa9hrgx.m)("skill_mcp_load", "skill_mcp_get_unusable");
  else if (n.outcome !== "failed") (0, import_chunk_cqa9hrgx.l)("skill_mcp_load", `skill_mcp_get_${n.outcome}`);
  let p = X(o, n, i) ?? `${o}, because the server's answer about its current entry could not be used. This is a problem with the server; retrying will not help until the server's owner fixes it.`;
  if (n.outcome !== "failed" && n.outcome !== "gone") throw new import_chunk_jv7av99m.WE(p);
  let k = H(n.error, i), f = v().mcpSdkErrorClassificationModule().getMcpErrorCode(n.error) !== void 0;
  if (n.outcome === "failed" && f) (0, import_chunk_cqa9hrgx.l)("skill_mcp_load", "skill_mcp_get_refused");
  else if (n.outcome === "failed") Y(e, n.error);
  if (n.outcome === "failed" && f && (0, import_chunk_fpcs74d2.jRe)(e).isBehindGateway) {
    let c = (0, import_chunk_jv7av99m.d)(n.error);
    if (c === W) throw new import_chunk_jv7av99m.WE(`${o}, because Anthropic's safety scan of this skill has no result yet. Try invoking it again in a minute. If a few tries give the same answer, continue without the skill.`);
    let _ = J.exec(c);
    if (_ !== null) throw new import_chunk_jv7av99m.WE(`${o}, because Anthropic's safety scan cannot take it. ${i ? "A file or the skill is too large, or it has an archive or binary file" : `The scan takes at most ${_[1]} in a text file and about ${_[2]} in a skill, with its file names, and no archive or binary file`}. Do not repeat it. Tell the server's owner.`);
    let g = Q.exec(c)?.[1];
    if (g !== void 0) throw new import_chunk_jv7av99m.WE(`${o}, because Anthropic's safety scan stopped this version of it${i ? "" : ` (content hash ${g})`}. Retrying now will not help. Tell the server's owner.`);
  }
  throw new import_chunk_jv7av99m.A(n.outcome === "gone" ? p : f ? `${o}: the server answered the request for its current entry with an error${k}. Do not repeat it at once.` : `${o}, because asking the server for its current entry failed${k}. ${tRn()}`, "MCP skill entry request failed");
}
function X(e, t, r) {
  if (t.outcome === "declined") return `${e}, because the server has changed it into a skill ${iYr[t.reason]}, which Claude Code does not load.${aYr(t.reason)}`;
  if (t.outcome === "changed") return `${e}, because the server has changed it since it was listed. Its entry has been refreshed; invoke it again to load the current version.`;
  if (t.outcome === "gone") return `${e}, because the server reports that it no longer serves it${H(t.error, r)}. ${lYr()}`;
  return;
}
async function x(e, t, r, a) {
  try {
    let i = await v().mcpSkillsListModule().getMcpSkill(e, r.uri, { signal: a }), o = O9o(i.skill, t);
    if (!o.ok && o.uri === r.uri && o.reason !== "invalid_entry") return t.delete(r.uri), { outcome: "declined", reason: o.reason };
    if (!o.ok || o.skill.entry.uri !== r.uri) return { outcome: "unusable" };
    if (Bun.deepEquals(o.skill.entry, r)) return { outcome: "unchanged", skill: o.skill };
    return t.set(r.uri, o.skill), { outcome: "changed", skill: o.skill };
  } catch (i) {
    if (a.aborted) throw i;
    if (v().mcpSdkErrorClassificationModule().isMcpResourceNotFoundError(i)) return t.delete(r.uri), { outcome: "gone", error: i };
    return (0, import_chunk_k449cc64.He)(e.name, `skills/get for '${r.frontmatter.name}' failed: ${(0, import_chunk_kx2fp6pc.$c)((0, import_chunk_jv7av99m.d)(i))}`), { outcome: "failed", error: i };
  }
}
async function ee(e, t, r, a, i, o) {
  let n = e.name, h = r.frontmatter.name;
  (0, import_chunk_k449cc64.id)(n, `Skill '${h}' was not loaded, ${z[a]}`), (0, import_chunk_cqa9hrgx.m)("skill_mcp_load", `skill_mcp_${a}`);
  let p = `The skill "${h}" from MCP server "${(0, import_chunk_4vsz8a99.PU)(n)}" was not loaded`, k = z[a];
  if (t === void 0) throw new import_chunk_jv7av99m.A(`${p}, ${k}. ${a.includes("frontmatter") ? "This is a problem with the server; retrying will not help until the server's owner fixes it." : tRn()}`, "MCP skill failed verification");
  let f = await x(e, t, r, i), c = X(p, f, o) ?? `${p}, ${k}, and asking the server for its current entry failed. ${tRn()}`;
  if (f.outcome === "unusable") c = `${p}, ${k}, and the server's answer about its current entry could not be used. This is a problem with the server; retrying will not help until the server's owner fixes it.`;
  else if (f.outcome === "unchanged") c = `${p}, ${k}. This is a problem with the server; retrying will not help until the server's owner fixes it.`;
  throw new import_chunk_jv7av99m.A(c, "MCP skill failed verification");
}
async function mri({ connected: e, served: t, skills: r, uri: a, reason: i, signal: o }) {
  let n = `${(0, import_chunk_3zfyrdna.qus)(a, i)}${r.map((p) => (0, import_chunk_3zfyrdna.X$t)(p.skillName)).join("")}`;
  if ((0, import_chunk_k449cc64.id)(e.name, n), (0, import_chunk_cqa9hrgx.m)("skill_mcp_read", `skill_mcp_read_${i}`), t === void 0) return n;
  let h = await Promise.all(r.map(async ({ uri: p, skillName: k }) => {
    let f = t.get(p), c = f === void 0 ? { outcome: "gone" } : await x(e, t, f.entry, o), _ = f === void 0 ? "" : " Claude Code has now asked the server.";
    if (c.outcome === "changed") return ` The server has changed the skill "${k}" since it was loaded. Invoke the skill again to load the current version.`;
    if (c.outcome === "gone") return `${_} The skill "${k}" is no longer available from this server, so loading the skill again will not help. ${lYr()}`;
    if (c.outcome === "declined") return `${_} The server has changed the skill "${k}" into a skill ${iYr[c.reason]}, which Claude Code does not load. For this reason, loading the skill again will not help.${aYr(c.reason)}`;
    return (0, import_chunk_3zfyrdna.X$t)(k);
  }));
  return `${(0, import_chunk_3zfyrdna.qus)(a, i)}${h.join("")}`;
}
function I() {
  return (0, import_chunk_865at33z.tCt)() || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE;
}
function tRn() {
  return I() ? "Try invoking it again." : "Try invoking it again, or reconnect the server from /mcp.";
}
function aYr(e) {
  return e === "past_list_bytes" ? ` ${lYr()}` : "";
}
function lYr() {
  return I() ? "Start a new task or chat to refresh its skills." : "Reconnect the server from /mcp to refresh its skills.";
}
function O9o(e, t) {
  let r = (0, import_chunk_3zfyrdna.afo)(e);
  if (!r.ok || !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return r;
  let { uri: a } = r.skill.entry, i = Array.from(new Map(t).set(a, r.skill).values(), (o) => o.entry);
  return dYr(i, { bytes: 0 }) === i.length ? r : { ok: false, reason: "past_list_bytes", uri: a };
}
function dYr(e, t) {
  let r = e.findIndex((a) => (t.bytes += (0, import_chunk_m2r5bdfb.hri)(a, q - t.bytes), t.bytes > q));
  return r === -1 ? e.length : r;
}
