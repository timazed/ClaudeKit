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
var chunk_4c9g8s28_exports = {};
__export(chunk_4c9g8s28_exports, {
  Ezl: () => Ezl,
  JXl: () => JXl,
  QXl: () => QXl,
  Tzl: () => Tzl,
  W1a: () => W1a,
  XXl: () => XXl,
  YXl: () => YXl,
  cri: () => cri,
  dri: () => dri,
  eRn: () => eRn,
  kzl: () => kzl,
  qXl: () => qXl,
  vzl: () => vzl
});
module.exports = __toCommonJS(chunk_4c9g8s28_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_vfh414sa = require("/$bunfs/root/chunk-vfh414sa.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_vs7p9j3v = require("/$bunfs/root/chunk-vs7p9j3v.js");
var import_chunk_jnrh77bs = require("/$bunfs/root/chunk-jnrh77bs.js");
var import_chunk_vhpt9t1j = require("/$bunfs/root/chunk-vhpt9t1j.js");
var import_chunk_3zfyrdna = require("/$bunfs/root/chunk-3zfyrdna.js");
var import_chunk_xs7m0bn1 = require("/$bunfs/root/chunk-xs7m0bn1.js");
var import_chunk_rejrcjng = require("/$bunfs/root/chunk-rejrcjng.js");
var import_chunk_924etrq7 = require("/$bunfs/root/chunk-924etrq7.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
var import_chunk_fpcs74d2 = require("/$bunfs/root/chunk-fpcs74d2.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function A() {
  return require("/$bunfs/root/chunk-4kvvnjdb.js");
}
function W() {
  return require("/$bunfs/root/chunk-p6h9amsr.js");
}
var U = 100, ne = 20, se = 20, V = 20;
function te(e) {
  try {
    return (0, import_chunk_kx2fp6pc.qM)(e).includes("$");
  } catch {
    return true;
  }
}
function G(e) {
  let r = [`${(0, import_chunk_3f4m74y6.xn)(e)}:`, `${e}:`];
  if ((0, import_chunk_jnrh77bs.VWe)() && r.some(import_chunk_jnrh77bs.j5)) return `Skills not loaded: the server name ${(0, import_chunk_jnrh77bs.J$t)(...r)}. Rename the server in your MCP configuration to load its skills and prompts; its tools are unaffected.`;
  if ((0, import_chunk_4vsz8a99.PU)(e) !== e) return "Skills not loaded: the server name holds a hidden or control character, a double quote or an angle bracket. Rename the server to load its skills. Its tools and resources are not affected.";
  if (te(e)) return "Skills not loaded: the server name holds a dollar sign, which a placeholder such as $ARGUMENTS in a skill's text uses. Rename the server in your MCP configuration, or ask the administrator who manages it, to load its skills. Its tools and resources are not affected.";
  return;
}
var Z = { ...import_chunk_3zfyrdna.sfo, duplicate_uri: "listed more than once (the first entry is used)", duplicate_name: "sharing a name and directory with another skill", another_servers_name: "with the command name of another MCP server's skill (rename a server)", name_not_shown: "with a name Claude Code cannot show (too long, or not displayable); rename it on the server", reserved_name: "with a name reserved for the skills synced from your claude.ai account", past_list_bytes: "not within the first 512 KiB of the listing (the server must list fewer skills or shorten their entries)" };
function X(e, r, n) {
  if (e.counts.set(n, (e.counts.get(n) ?? 0) + 1), e.samples.length < V) e.samples.push({ uri: r?.slice(0, 200), reason: n });
}
function H(e, r, n) {
  let s = `${e}:${(0, import_chunk_3bjtjsgp.Uo)(r.name, r.config)}`, o = (0, import_chunk_qdcbcsg7.mt)().skillsFunnelSeen, m = o.has(s) ? "refetch" : "initial";
  o.add(s), (0, import_chunk_y53wbr8a.a)("tengu_mcp_skills_funnel", { step: (0, import_chunk_78g0060s.f)(e), client: (0, import_chunk_78g0060s.S)("claude-code-cli"), cause: (0, import_chunk_78g0060s.f)(m), skill_count: n });
}
class W1a {
  async servedBy(e) {
    return (await this.fetchForClient.cache.get((0, import_chunk_3bjtjsgp.Uo)(e.name, e.config))?.catch(() => {
      return;
    }))?.served;
  }
  async settleFailedRead(e) {
    let r = e.reason === "uri_too_long" || e.reason === "other_address" || e.reason === "other_spelling" || e.reason === "unparseable_uri" ? void 0 : await this.servedBy(e.connected);
    return (0, import_chunk_xs7m0bn1.mri)({ ...e, served: r });
  }
  fetchForClient = (0, import_chunk_jk26f2gn.u$)(async (e, r) => {
    if (this.adopted.delete((0, import_chunk_3bjtjsgp.Uo)(e.name, e.config)), this.lastListed.delete(e.name), !(0, import_chunk_fpcs74d2.VBn)(e.capabilities)) return { commands: [], served: /* @__PURE__ */ new Map() };
    if (!(0, import_chunk_fpcs74d2.ucn)(e)) return (0, import_chunk_k449cc64.He)(e.name, "skills/list not sent: this connection is not known to use MCP protocol version 2026-07-28 or later"), { commands: [], served: /* @__PURE__ */ new Map() };
    let n = G(e.name);
    if (n !== void 0) return (0, import_chunk_k449cc64.id)(e.name, n), { commands: [], served: /* @__PURE__ */ new Map() };
    let s = false, { accepted: o, declined: m } = await (0, import_chunk_vs7p9j3v.Pfo)(e, () => oe(e, () => {
      s = true, e.discoveryBearerRejected = true;
    }));
    if (s) this.invalidate((0, import_chunk_3bjtjsgp.Uo)(e.name, e.config)), (0, import_chunk_cqa9hrgx.l)("skill_mcp_load", "skill_mcp_claudeai_bearer_rejected");
    if (o.length > 0) H("parsed_nonempty", e, o.length), (0, import_chunk_k449cc64.He)(e.name, `Found ${o.length} ${(0, import_chunk_7cfjrnwy.O)(o.length, "skill")} via skills/list`);
    let i = Q(e, o, m, r, (p) => this.lastListed.entries().some(([k, { key: g, names: R }]) => k !== e.name && R.has(p) && this.fetchForClient.cache.has(g)));
    if (this.lastListed.set(e.name, { key: (0, import_chunk_3bjtjsgp.Uo)(e.name, e.config), names: new Set(i.commands.map((p) => p.name)) }), i.commands.length > 0) H("surfaced", e, i.commands.length), (0, import_chunk_w578pjby.t)(`[mcp-skills] Listed ${i.commands.length} skills from MCP server '${e.name}'`);
    return i;
  }, (e, r) => (0, import_chunk_3bjtjsgp.Uo)(e.name, e.config), ne);
  adopted = /* @__PURE__ */ new Map();
  lastListed = /* @__PURE__ */ new Map();
  reportedRefusals = /* @__PURE__ */ new Map();
  invalidate(e) {
    this.fetchForClient.cache.delete(e), this.adopted.delete(e), this.reportedRefusals.delete(e);
  }
  invalidateExcept(e) {
    (0, import_chunk_jk26f2gn.c4n)(this.fetchForClient.cache, e), (0, import_chunk_jk26f2gn.c4n)(this.adopted, e), (0, import_chunk_jk26f2gn.c4n)(this.reportedRefusals, e);
  }
  reset() {
    this.fetchForClient.cache.clear(), this.adopted.clear(), this.reportedRefusals.clear();
  }
}
function qXl(e) {
  let r = eRn();
  if (r.adopted.size === 0) return [];
  return e.flatMap((n) => {
    if (!(0, import_chunk_xcgcdx61.ji)(n)) return [];
    let s = (0, import_chunk_3bjtjsgp.Uo)(n.name, n.config);
    if (!r.fetchForClient.cache.has(s)) return r.adopted.delete(s), [];
    return (0, import_chunk_924etrq7.$ue)(n, r.adopted.get(s) ?? []);
  });
}
function kzl(e) {
  return Buffer.byteLength(e) > import_chunk_3zfyrdna.FDe ? `No skill was loaded: the address is longer than ${import_chunk_3zfyrdna.FDe} bytes; no skill has an address that long.` : void 0;
}
function Ezl({ server: e, uri: r }, n) {
  return `No skill was loaded from ${(0, import_chunk_4vsz8a99.PU)(r)}: the prefix "${(0, import_chunk_4vsz8a99.PU)(e)}" matches ${n.length} connected MCP servers (${n.map((s) => `"${(0, import_chunk_4vsz8a99.PU)(s.name)}"`).join(", ")}), so the address is ambiguous; rename one in the MCP settings to load its skills by address.`;
}
function vzl(e, r, n = false) {
  let s = e.filter((o) => o.type === "connected" && (n || (0, import_chunk_fpcs74d2.ucn)(o)) && (0, import_chunk_3f4m74y6.xn)(o.name) === r && (0, import_chunk_fpcs74d2.zat)(o.capabilities) && !(0, import_chunk_fpcs74d2.zBn)((0, import_chunk_fpcs74d2.jRe)(o)) && G(o.name) === void 0);
  return (0, import_chunk_4smdap7r.bT)(s, (o) => (0, import_chunk_3bjtjsgp.Uo)(o.name, o.config));
}
async function YXl({ server: e, uri: r, clients: n, agentId: s, caller: o = {}, storageV5: m, signal: i }) {
  let p = vzl(n, e), [k] = p;
  if (k === void 0) return;
  let g = kzl(r) ?? (p.length > 1 ? Ezl({ server: e, uri: r }, p) : void 0);
  if (g !== void 0) return { message: g };
  let R = `No skill was loaded from ${(0, import_chunk_4vsz8a99.PU)(r)}`;
  (0, import_chunk_ze4kt7fs.u0e)(k, s), (0, import_chunk_1ek4hhs6.LH)(import_chunk_pmryp5f3.vu, (0, import_chunk_vhpt9t1j.Px)(k), s, (0, import_chunk_1ek4hhs6.qv)(o));
  let c = await A().mcpClientModule().ensureConnectedClient(k, { signal: i, context: "MCP skill load" });
  if ((0, import_chunk_ze4kt7fs.u0e)(c, s), !(0, import_chunk_fpcs74d2.ucn)(c)) return;
  let y = eRn(), v = y.fetchForClient(c, m), w = await v, D = (0, import_chunk_3bjtjsgp.Uo)(c.name, c.config), E = () => w.served.has(r) ? [...w.commands, ...y.adopted.get(D) ?? []].find((_) => _.type === "prompt" && _.mcpSkillEntry?.()?.uri === r) : void 0, N = E();
  if (N !== void 0) return { command: N };
  let C = `${R} on MCP server "${(0, import_chunk_4vsz8a99.PU)(c.name)}"`, b = () => w.commands.length + (y.adopted.get(D)?.length ?? 0) >= U ? { message: `${C}: this session already holds ${U} skills from that server, the most it takes from one server.` } : void 0, L = b();
  if (L !== void 0) return L;
  let I;
  try {
    I = (await A().mcpSkillsListModule().getMcpSkill(c, r, { signal: i })).skill;
  } catch (_) {
    if (i.aborted) throw _;
    let K = A().mcpSdkErrorClassificationModule();
    if (K.isMcpResourceNotFoundError(_)) return { message: `${C}: the server does not serve a skill there.` };
    if (K.isMcpMethodNotFoundError(_)) return { message: `${C}: the server does not implement skills/get, so it cannot be asked for a skill by address.` };
    return (0, import_chunk_k449cc64.He)(c.name, `skills/get ${(0, import_chunk_kx2fp6pc.$c)(r)} failed: ${(0, import_chunk_kx2fp6pc.$c)((0, import_chunk_jv7av99m.d)(_))}`), { message: `${C}: asking the server for it failed (${(0, import_chunk_271xsh6x.Bl)((0, import_chunk_jv7av99m.d)(_))}). ${(0, import_chunk_xs7m0bn1.tRn)()}` };
  }
  if (y.fetchForClient.cache.get(D) !== v) return { message: `${C}: the server's skills were listed again meanwhile. Invoke it once more.` };
  let B = E();
  if (B !== void 0) return { command: B };
  let h = (0, import_chunk_xs7m0bn1.O9o)(I, w.served);
  if (!h.ok) return { message: `${C}: the server serves it as a skill ${import_chunk_xs7m0bn1.iYr[h.reason]}, which Claude Code does not load.${(0, import_chunk_xs7m0bn1.aYr)(h.reason)}` };
  if (h.skill.entry.uri !== r) return { message: `${C}: the server answered with the entry of another address.` };
  let P = b();
  if (P !== void 0) return P;
  let F = y.adopted.get(D) ?? [], j = [...w.served.values()].some((_) => _.entry.frontmatter.name === h.skill.entry.frontmatter.name), z = new Set([...w.commands, ...F].map((_) => _.name)), x = ee(c, h.skill, j, z, w.served, m, true);
  if (!x.ok) return { message: `${C}: it is a skill ${Z[x.reason]}.` };
  let T = (0, import_chunk_924etrq7.$ue)(c, [x.command])[0], re = new Set((T.type === "prompt" ? T.denyMatchAddressForms : void 0)?.map((_) => _.toLowerCase())), q = T.type === "prompt" ? { ...T, foundDenyTargets: { listed: w.commands.filter((_) => _.type === "prompt" && _.denyMatchAddressForms?.some((K) => re.has(K.toLowerCase()))) } } : T;
  return F.push(q), y.adopted.set(D, F), (0, import_chunk_k449cc64.He)(c.name, `Adopted skill '${q.name}' by address ${(0, import_chunk_kx2fp6pc.$c)(r)} (skills/get)`), (0, import_chunk_cqa9hrgx.u)("skill_mcp_load", { by_uri: true }), { command: q };
}
function eRn() {
  let e = (0, import_chunk_qdcbcsg7.mt)();
  if (e.skillsFetcher === null) e.skillsFetcher = new W1a();
  return e.skillsFetcher;
}
async function dri(e, r) {
  if (Y(e)) return [];
  let n = (0, import_chunk_924etrq7.$ue)(e, (await eRn().fetchForClient(e, r)).commands);
  return Y(e) ? [] : n;
}
function Y(e) {
  let r = (0, import_chunk_fpcs74d2.GBn)((0, import_chunk_fpcs74d2.jRe)(e)), { reportedRefusals: n } = eRn(), s = (0, import_chunk_3bjtjsgp.Uo)(e.name, e.config);
  if (r === void 0) n.delete(s);
  else if ((0, import_chunk_fpcs74d2.ucn)(e) && n.get(s) !== r) n.set(s, r), (0, import_chunk_xs7m0bn1.P9o)(e.name, r);
  return r !== void 0;
}
function cri(e) {
  return (0, import_chunk_fpcs74d2.z_)() && eRn().reportedRefusals.has((0, import_chunk_3bjtjsgp.Uo)(e.name, e.config)) && !(0, import_chunk_fpcs74d2.zBn)((0, import_chunk_fpcs74d2.jRe)(e));
}
async function XXl(e, r, n) {
  if (!(0, import_chunk_fpcs74d2.RYe)(e)) return [];
  let s = G(e.name);
  if (s !== void 0) return (0, import_chunk_k449cc64.id)(e.name, s), [];
  let o = [], m = { counts: /* @__PURE__ */ new Map(), samples: [], pagesUnread: false }, i = (0, import_chunk_xs7m0bn1.dYr)(r, { bytes: 0 });
  if (await J(r.slice(0, i), o, m, /* @__PURE__ */ new Set()) || i < r.length) (0, import_chunk_k449cc64.He)(e.name, `the host's copy of skills/list: kept ${o.length} ${(0, import_chunk_7cfjrnwy.O)(o.length, "skill", "skills")} and dropped the rest (the limits are ${U} skills and 512 KiB)`);
  return Q(e, o, m, n, () => false).commands;
}
function JXl(e) {
  eRn().invalidate(e);
}
function QXl(e) {
  eRn().invalidateExcept(e);
}
async function oe(e, r) {
  let n = [], s = { counts: /* @__PURE__ */ new Map(), samples: [], pagesUnread: false }, o = /* @__PURE__ */ new Set(), m = { bytes: 0 }, i = false, p, k = 0;
  e.skillsListFailed = void 0;
  do {
    let g;
    try {
      g = await A().mcpSkillsListModule().listMcpSkillPage(e, p);
    } catch (c) {
      if (k === 0) {
        if (!A().mcpSdkErrorClassificationModule().isMcpUnknownMethodError(c)) if (e.skillsListFailed = true, (0, import_chunk_k449cc64.He)(e.name, `skills/list failed (${(0, import_chunk_jv7av99m.d)(c)}) \u2014 skipping skill discovery`), e.config.type === "claudeai-proxy" && A().mcpIsListAuthErrorModule().isClaudeAiBearerRejectedError(c)) r();
        else (0, import_chunk_cqa9hrgx.l)("skill_mcp_load", "skill_mcp_list_failed");
        return { accepted: n, declined: s };
      }
      if (e.skillsListFailed = true, (0, import_chunk_k449cc64.He)(e.name, `skills/list page ${k + 1} failed (${(0, import_chunk_jv7av99m.d)(c)}) \u2014 using ${n.length} ${(0, import_chunk_7cfjrnwy.O)(n.length, "entry", "entries")} from prior pages`), e.config.type === "claudeai-proxy" && A().mcpIsListAuthErrorModule().isClaudeAiBearerRejectedError(c)) r();
      else (0, import_chunk_cqa9hrgx.l)("skill_mcp_load", "skill_mcp_list_page_failed");
      break;
    }
    let R = (0, import_chunk_xs7m0bn1.dYr)(g.skills, m);
    if (R < g.skills.length) {
      let c = g.skills[R], y = typeof c === "object" && c !== null ? Reflect.get(c, "uri") : c;
      s.samples.splice(V - 1, 1, { uri: typeof y === "string" ? y.slice(0, 200) : void 0, reason: "past_list_bytes" }), s.pagesUnread = Boolean(g.nextCursor), s.counts.set("past_list_bytes", g.skills.length - R), g = { skills: g.skills.slice(0, R) }, i = true;
    }
    i = await J(g.skills, n, s, o) || i, p = g.nextCursor || void 0, k++;
  } while (p !== void 0 && k < se && n.length < U);
  if (p !== void 0 || i) (0, import_chunk_k449cc64.He)(e.name, `skills/list: stopped after ${k} ${(0, import_chunk_7cfjrnwy.O)(k, "page")} / ${n.length} valid ${(0, import_chunk_7cfjrnwy.O)(n.length, "entry", "entries")} with more pending`);
  return { accepted: n, declined: s };
}
async function J(e, r, n, s) {
  let o = false;
  return await (0, import_chunk_vs7p9j3v.JWe)(e, (m) => {
    if (o ||= r.length >= U, o) return;
    let i = (0, import_chunk_3zfyrdna.afo)(m);
    if (!i.ok) {
      X(n, i.uri, i.reason);
      return;
    }
    if (s.has(i.skill.entry.uri)) {
      X(n, i.skill.entry.uri, "duplicate_uri");
      return;
    }
    s.add(i.skill.entry.uri), r.push(i.skill);
  }), o;
}
function Q(e, r, n, s, o) {
  let m = /* @__PURE__ */ new Map(), i = [], p = /* @__PURE__ */ new Map();
  for (let { entry: c } of r) {
    let y = c.frontmatter.name;
    p.set(y, (p.get(y) ?? 0) + 1);
  }
  let k = /* @__PURE__ */ new Set(), g = [], R = (0, import_chunk_vfh414sa.RRn)(e.config)?.skills;
  for (let c of r) {
    let y = ee(e, c, p.get(c.entry.frontmatter.name) !== 1, k, m, s, false);
    if (!y.ok) {
      X(n, c.entry.uri, y.reason);
      continue;
    }
    let { command: v } = y;
    if (o(v.name)) g.push(c.entry.uri);
    let w = R?.[v.name];
    i.push(w === void 0 ? v : { ...v, description: w });
  }
  for (let c of g) X(n, c, "another_servers_name");
  if (le(e.name, n), i.length > 0 && n.counts.size === 0) (0, import_chunk_cqa9hrgx.u)("skill_mcp_load");
  return { commands: i, served: m };
}
function ee(e, r, n, s, o, m, i) {
  let { entry: p } = r, k = p.frontmatter.name, g = (0, import_chunk_3f4m74y6.xn)(e.name), [R, c, y] = ae(r.root, k), v = (n ? [c, y] : [R]).find((b) => !s.has(`${g}:${b}`));
  if (v === void 0) return { ok: false, reason: "duplicate_name" };
  let w = (0, import_chunk_4smdap7r.M)([R, c, y]).filter((b) => b !== v).map((b) => `${g}:${b}`).concat(v === k ? [] : [k], [`${g}:${p.uri}`]), D = `${g}:${v}`;
  if (v !== k) (0, import_chunk_k449cc64.He)(e.name, `Skill at ${(0, import_chunk_kx2fp6pc.$c)(p.uri)} shares the name '${k}' with another skill on this server and is offered as '${v}'`);
  let E;
  try {
    E = ie(e, r, v, D, w, o, m, i);
  } catch (b) {
    return (0, import_chunk_k449cc64.He)(e.name, `Skill at ${(0, import_chunk_kx2fp6pc.$c)(p.uri)} not loaded: ${(0, import_chunk_kx2fp6pc.$c)((0, import_chunk_jv7av99m.d)(b))}`), { ok: false, reason: "invalid_entry" };
  }
  if (E === void 0) return { ok: false, reason: "name_not_shown" };
  let N = (0, import_chunk_vhsysgcd.Zs)(E).length;
  if (N > import_chunk_jnrh77bs.ffo) return (0, import_chunk_k449cc64.He)(e.name, `Skill '${E.name}' not loaded: its display name has ${N} characters, and may have at most ${import_chunk_jnrh77bs.ffo}`), { ok: false, reason: "name_not_shown" };
  let C = [k, v.replace(/[/:].*/, "")];
  if ((0, import_chunk_jnrh77bs.gNn)(E) || (0, import_chunk_jnrh77bs.VWe)() && C.some(import_chunk_jnrh77bs.j5)) return (0, import_chunk_k449cc64.He)(e.name, `Skill '${E.name}' not loaded: its name, '${v}', ${(0, import_chunk_jnrh77bs.J$t)(v, E.name, ...C)}; rename the skill on the server to load it`), { ok: false, reason: "reserved_name" };
  return (0, import_chunk_vhsysgcd.wNn)(E), s.add(D), o.set(p.uri, r), (0, import_chunk_865at33z.aIl)(E.name, e.name), { ok: true, command: E };
}
function Tzl(e, r = (0, import_chunk_qyhf6bts._2t)(e.name, [e])) {
  let { name: n, config: s } = e;
  return (0, import_chunk_4smdap7r.M)([...r, ...(0, import_chunk_px0hhsq7.N$l)({ serverName: n, serverType: s.type ?? "stdio", serverId: (0, import_chunk_qyhf6bts.eh)(s) })]);
}
function ie(e, { entry: r, skillMd: n, root: s }, o, m, i, p, k, g) {
  let { createSkillCommand: R, parseSkillFrontmatterFields: c } = (0, import_chunk_vhpt9t1j.rfo)(), y = r.frontmatter.name, v = (0, import_chunk_qyhf6bts._2t)(e.name, [e]), w = (h) => {
    let P = (0, import_chunk_p1ewvgeh.F$i)((0, import_chunk_kx2fp6pc.qM)(h.frontmatter), (0, import_chunk_kx2fp6pc.$c)(h.uri));
    return { shown: P, parsed: c(P, "", y) };
  }, { shown: D, parsed: E } = w(r), N = { server: (0, import_chunk_4vsz8a99.PU)(e.name), uri: (0, import_chunk_4vsz8a99.PU)(s), directoryRead: A().mcpDirectoryReadModule().serverDeclaresDirectoryRead(e.capabilities), skillNamePrefix: (0, import_chunk_3f4m74y6.xn)(e.name) }, C = e.name, b = (0, import_chunk_3bjtjsgp.Uo)(e.name, e.config), { uri: L } = r, I = R({ ...E, ...(0, import_chunk_4vsz8a99.bBn)(E), ...(0, import_chunk_4vsz8a99.Obo)(), displayName: o, skillName: m, markdownContent: "", resolveBody: async (h) => {
    let P = h.toolUseId === void 0, F = P ? await (0, import_chunk_vhpt9t1j.e_r)(h) : void 0;
    if ((0, import_chunk_865at33z.ZV)(C, e.config)) (0, import_chunk_865at33z.VRo)(C);
    let j = p.get(L), z = j && (W().mcpSkillLoadRefusal(h, B, { serverName: C, uri: L, resources: j.entry.resources }) ?? (P ? W().mcpSkillIsolationDenial(h, { serverName: C, serverType: e.config.type, scope: e.config.scope }, void 0, F) : void 0));
    if (z !== void 0) throw new import_chunk_jv7av99m.WE(z);
    (0, import_chunk_1ek4hhs6.LH)(import_chunk_pmryp5f3.vu, (0, import_chunk_vhpt9t1j.Px)(e), h.agentId, (0, import_chunk_1ek4hhs6.qv)(h));
    let { body: x, loaded: T } = await (0, import_chunk_xs7m0bn1.pri)({ serverName: C, connectionKey: b, uri: L, served: p, storageV5: k, context: h, isSlashLine: P });
    return h.mcpSkillLoaded?.push({ serverName: C, uri: L, resources: T.entry.resources }), x;
  }, contentLength: n.size, contentHash: n.digest, source: "mcp", baseDir: void 0, mcpResourceRoot: N, loadedFrom: "mcp", skillFile: (0, import_chunk_vhpt9t1j.Won)({ frontmatter: D, frontmatterAsWritten: r.frontmatter, content: "" }, void 0) });
  if (I === void 0 || I.type !== "prompt") return;
  let B = { ...I, mcpInfo: (0, import_chunk_fpcs74d2.jRe)(e), mcpSkillEntry: () => {
    let h = p.get(L), P = h === void 0 || h.entry === r ? void 0 : w(h.entry).parsed;
    return h && { serverName: C, uri: L, resources: h.entry.resources, serverType: e.config.type, connectorId: e.config.type === "claudeai-proxy" ? (0, import_chunk_qyhf6bts.TV)(e.config.id ?? "") : void 0, orgMaxPermission: (0, import_chunk_rejrcjng.fri)(e.name, e.config.type === "http" || e.config.type === "sse" ? e.config : {}), serverRuleKeys: Tzl(e, v), nested: [...p.values()].some((F) => F !== h && L.startsWith(`${F.root}/`)), ...g && { found: true }, ...P !== void 0 && { description: (0, import_chunk_4vsz8a99.bBn)(P).description, hasUserSpecifiedDescription: P.hasUserSpecifiedDescription } };
  }, ...i.length > 0 && { denyMatchNames: i }, denyMatchAddressForms: (0, import_chunk_3zfyrdna.$il)(L).map((h) => `${(0, import_chunk_3f4m74y6.xn)(e.name)}:${h}`) };
  return B;
}
function ae(e, r) {
  let n = e.indexOf(":"), s = (0, import_chunk_3f4m74y6.xn)(e.slice(0, n)), o = e.slice(n + 1, -r.length).split("/").filter((m) => m !== "").map(import_chunk_3f4m74y6.xn);
  return [r, o.length === 0 ? r : `${o.join("/")}:${r}`, `${[s, ...o].join("/")}:${r}`];
}
function le(e, { counts: r, samples: n, pagesUnread: s }) {
  if (r.size === 0) return;
  for (let { uri: m, reason: i } of n) {
    let p = m === void 0 ? "with no usable uri" : i === "unshowable_uri" ? (0, import_chunk_3zfyrdna.Lil)(m).slice(0, 400) : (0, import_chunk_kx2fp6pc.$c)(m);
    (0, import_chunk_k449cc64.He)(e, `skills/list entry ${p} not loaded (${i})`);
  }
  let o = 0;
  for (let m of r.values()) o += m;
  (0, import_chunk_k449cc64.id)(e, `${r.has("past_list_bytes") ? "At least " : ""}${o} ${(0, import_chunk_7cfjrnwy.O)(o, "skill")} not loaded: ${Array.from(r, ([m, i]) => `${i} ${Z[m]}`).join("; ")}. Run claude --debug to see which.${s ? " The later pages were not read." : ""}`), (0, import_chunk_cqa9hrgx.l)("skill_mcp_load", "skill_mcp_list_entries_declined");
}
