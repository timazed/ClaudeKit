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
var chunk_3zfyrdna_exports = {};
__export(chunk_3zfyrdna_exports, {
  $il: () => $il,
  Cwt: () => Cwt,
  FDe: () => FDe,
  FRi: () => FRi,
  Fil: () => Fil,
  Fst: () => Fst,
  Kus: () => Kus,
  LRi: () => LRi,
  Lil: () => Lil,
  NRi: () => NRi,
  Nil: () => Nil,
  Uil: () => Uil,
  Vus: () => Vus,
  X$t: () => X$t,
  afo: () => afo,
  cfo: () => cfo,
  dfo: () => dfo,
  ifo: () => ifo,
  jon: () => jon,
  lfo: () => lfo,
  mNn: () => mNn,
  pNn: () => pNn,
  qus: () => qus,
  sfo: () => sfo,
  ufo: () => ufo
});
module.exports = __toCommonJS(chunk_3zfyrdna_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_4s4nxvxt = require("/$bunfs/root/chunk-4s4nxvxt.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_ta56chse = require("/$bunfs/root/chunk-ta56chse.js");
var import_chunk_8mmj96hs = require("/$bunfs/root/chunk-8mmj96hs.js");
var import_chunk_sxd14zzs = require("/$bunfs/root/chunk-sxd14zzs.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_fpcs74d2 = require("/$bunfs/root/chunk-fpcs74d2.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_path = require("path");
function Fst(e) {
  return e.type === "invoked_skills" && Array.isArray(e.skills) && e.skills.some((t) => t?.mcpSkill !== void 0);
}
(0, import_chunk_adx6804h.B)();
function g(e) {
  if (!e.endsWith("/SKILL.md")) return;
  let t = e.slice(0, -9);
  if (!/^[a-z][a-z0-9+.-]*:\/*[^/]/i.test(t)) return;
  return t;
}
(0, import_chunk_adx6804h.B)();
var x = 512, X = 16777216, FDe = 2048, N = /^(?=.{1,64}$)[a-z0-9]+(?:-[a-z0-9]+)*$/, sfo = { invalid_entry: "with an entry that is not a valid skill entry", uri_too_long: `with a URI longer than ${FDe} bytes`, frontmatter_too_large: "with frontmatter larger than Claude Code reads", invalid_name: "with a name or last URI segment that is not a valid skill name", name_mismatch: "with a name that differs from the URI's last segment", invalid_manifest: "with a file list that omits SKILL.md, repeats a file, or leaves the skill directory", too_many_resources: `with more than ${x} files`, too_large: "larger than 16 MiB", skill_md_too_large: "with a SKILL.md over 1 MB", dynamic_declined: "generated dynamically (no file list to verify)", unshowable_uri: "with a directory URI that holds a hidden or control character, a double quote, an angle bracket, or a character that Unicode normalization rewrites (the server can percent-encode it)", placeholder_uri: "with a directory URI that holds a dollar sign, which a placeholder such as $ARGUMENTS in a skill's text uses (the server can write it as %24)", unparseable_uri: "with a directory URI whose scheme and host part a URL parser cannot read, for example a space in the host name, or a colon that is followed by text that is not a port number up to 65535 (the server can write that part as a valid URL)" }, L = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ uri: (0, import_chunk_adx6804h.n)(), digest: (0, import_chunk_adx6804h.n)().regex(/^sha256:[0-9a-f]{64}$/), size: (0, import_chunk_adx6804h.E)().int().nonnegative() })), H = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ uri: (0, import_chunk_adx6804h.n)(), frontmatter: (0, import_chunk_adx6804h.oc)(Y), resources: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.C)(L()), (0, import_chunk_adx6804h.v)("dynamic")]) }));
function Y(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return false;
  let t = Reflect.get(e, "name"), r = Reflect.get(e, "description");
  return typeof t === "string" && t.length > 0 && typeof r === "string";
}
var G = 64;
function q(e, t) {
  let r = [{ node: e, depth: 0 }], s = 1;
  for (let a = r.pop(); a !== void 0; a = r.pop()) {
    let { node: o, depth: l } = a;
    if (l > G) return true;
    if (typeof o !== "object" || o === null) continue;
    for (let u in o) {
      if (++s > t) return true;
      r.push({ node: Reflect.get(o, u), depth: l + 1 });
    }
  }
  try {
    return (0, import_chunk_w578pjby._)(e).length > t;
  } catch {
    return true;
  }
}
function T(e) {
  try {
    return (0, import_chunk_4vsz8a99.PU)(e) !== e || (0, import_chunk_kx2fp6pc.qM)(e) !== e;
  } catch {
    return true;
  }
}
function R(e) {
  let t = /^[a-z][a-z0-9+.-]*:(\/\/[^/?#]*)?/i.exec(e)?.[0] ?? "", r = O(t);
  return r === null ? void 0 : { url: r, length: t.length };
}
function ifo(e) {
  return O(e) !== null;
}
function O(e) {
  return URL.parse(e);
}
function Lil(e) {
  return e.replace(/[^\x20-\x7e]|["<>]/gu, (t) => `{U+${t.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")}}`);
}
function afo(e) {
  let t = typeof e === "object" && e !== null ? Reflect.get(e, "uri") : e, r = typeof t === "string" ? t : void 0, s = typeof e === "object" && e !== null ? Reflect.get(e, "resources") : void 0;
  if (Array.isArray(s) && s.length > x) return { ok: false, reason: "too_many_resources", uri: r };
  if ([t, ...(Array.isArray(s) ? s : []).map((h) => typeof h === "object" && h !== null ? Reflect.get(h, "uri") : void 0)].some((h) => typeof h === "string" && Buffer.byteLength(h) > FDe)) return { ok: false, reason: "uri_too_long", uri: r };
  let o = H().safeParse(e);
  if (!o.success) return { ok: false, reason: "invalid_entry", uri: r };
  let { uri: l, frontmatter: u, resources: f } = o.data, d = (h) => ({ ok: false, reason: h, uri: l }), m = g(l);
  if (m === void 0) return d("invalid_entry");
  if (T(m)) return d("unshowable_uri");
  if (m.includes("$")) return d("placeholder_uri");
  let k = m.lastIndexOf("/"), S = m.slice((k === -1 ? m.indexOf(":") : k) + 1);
  if (!N.test(u.name) || !N.test(S)) return d("invalid_name");
  if (S !== u.name) return d("name_mismatch");
  if (R(m) === void 0 || !ifo(m)) return d("unparseable_uri");
  if (q(u, 4 * import_chunk_p1ewvgeh.vle)) return d("frontmatter_too_large");
  if (f === "dynamic") return d("dynamic_declined");
  let P = /* @__PURE__ */ new Set(), b, z = 0;
  for (let h of f) {
    if (P.has(h.uri) || h.uri !== l && !h.uri.startsWith(`${m}/`)) return d("invalid_manifest");
    if (P.add(h.uri), h.uri === l) b = h;
    z += h.size;
  }
  if (b === void 0) return d("invalid_manifest");
  if (z > X) return d("too_large");
  if (b.size > import_chunk_ta56chse.sS) return d("skill_md_too_large");
  return { ok: true, skill: { entry: { uri: l, frontmatter: u, resources: f }, skillMd: b, root: m } };
}
function Vus(e, t, r) {
  let s = e.length === 1 ? e[0] : void 0;
  if (!s || s.uri !== t) return { ok: false, reason: "unexpected_contents" };
  if (typeof s.text === "string") {
    if (s.text.length > r) return { ok: false, reason: "size_mismatch" };
    return { ok: true, bytes: new TextEncoder().encode(s.text), from: "text" };
  }
  if (typeof s.blob === "string") {
    if (s.blob.length > 4 * Math.ceil(r / 3)) return { ok: false, reason: "size_mismatch" };
    return { ok: true, bytes: new Uint8Array(Buffer.from(s.blob, "base64")), from: "blob" };
  }
  return { ok: false, reason: "unexpected_contents" };
}
function LRi(e, t) {
  if (t.length !== e.size) return { ok: false, reason: "size_mismatch" };
  if ("sha256:" + (0, import_chunk_ccm69jjy.Je)(t) !== e.digest) return { ok: false, reason: "digest_mismatch" };
  return { ok: true };
}
function I(e, t, r) {
  let s = Q(t);
  return s ? { skillName: typeof e === "string" ? e : s.uri, entry: s, texts: r } : void 0;
}
function* F(e) {
  for (let t of Array.isArray(e) ? e : []) {
    let r = I(t?.name, t?.mcpSkill, []);
    if (r) yield r;
  }
}
function* jon(e) {
  for (let t of (0, import_chunk_865at33z.Or)([...e])) if (t.type === "user" && t.mcpSkill != null) {
    let r = t.isMeta ? t.message.content : [], s = typeof r === "string" ? [r] : r.flatMap((o) => o.type === "text" ? [o.text] : []), a = I(t.mcpSkill.name, t.mcpSkill, s.map(import_chunk_pmryp5f3.lTr));
    if (a) yield a;
  } else if (t.type === "user" && t.isCompactSummary === true) yield* F(t.mcpSkillEntries);
  else if (t.type === "attachment" && t.attachment.type === "invoked_skills" && Array.isArray(t.attachment.skills)) {
    for (let r of t.attachment.skills) if (typeof r === "object" && r?.mcpSkill !== void 0 && typeof r.content === "string" && r.content) {
      let s = I(r.name, r.mcpSkill, [r.content]);
      if (s) yield s;
    }
    yield* F(t.attachment.mcpSkillEntries);
  }
}
function w(e) {
  let t = /* @__PURE__ */ new Map();
  for (let { skillName: r, entry: s } of jon(e)) {
    let a = g(s.uri);
    if (a !== void 0) {
      let o = `${s.serverName}\0${s.uri}`;
      t.set(o, { ...s, skillName: (0, import_chunk_4vsz8a99.PU)(r), root: a });
    }
  }
  return [...t.values()];
}
function Cwt(e, t, r = []) {
  let s = w(t);
  return [...w(r).filter((o) => !s.some((l) => l.serverName === o.serverName && l.uri === o.uri)), ...s].filter((o) => o.serverName === e);
}
async function Kus(e, t, r = []) {
  {
    let s = (0, import_chunk_qdcbcsg7.mt)().skillsFetcher, a = s === null ? void 0 : await (0, import_chunk_5appeerh.me)(s.servedBy(e), 0);
    return Cwt(e.name, t, r).flatMap((o) => {
      let l = a?.get(o.uri)?.entry;
      return l !== void 0 && (0, import_chunk_sxd14zzs.IAe)({ serverName: e.name, uri: l.uri, resources: l.resources }) === (0, import_chunk_sxd14zzs.IAe)(o) ? [{ ...o, resources: l.resources }] : [];
    });
  }
  return [];
}
function pNn(e, t, r, s = []) {
  {
    let a = (0, import_chunk_3f4m74y6.mT)(e), o = [...w(s), ...w(r)].filter((d) => t === d.root || t.startsWith(`${d.root}/`) || d.resources.some((m) => m.uri === t)), l = o.filter((d) => (0, import_chunk_3f4m74y6.mT)(d.serverName) === a), u = l.filter((d) => d.serverName !== e), f = l.length > 0 ? u : o;
    if (f.length > 0) {
      let m = `This read was refused. The address is in ${[...new Set(f.map((k) => `the skill "${k.skillName}", which is loaded from the server "${(0, import_chunk_4vsz8a99.PU)(k.serverName)}"`))].join(", and in ")}. This call goes to another server, "${(0, import_chunk_4vsz8a99.PU)(e)}"`;
      return l.length === 0 ? `${m}. An address in a loaded skill is read only from that skill's server. To read a file of a loaded skill, give the name of its server.` : `${m}, and these server names read alike. ${u.length < l.length ? "A loaded skill of this server has the address too. While these skills are loaded, this address is not read from any of these servers." : "To read a file of that skill, give its server's exact name. If this call gave that name, no server has that name now."}`;
    }
  }
  return;
}
function lfo(e, t, r = []) {
  try {
    let s = new Set(r.map((l) => l.uuid)), a = t.filter(({ uuid: l }) => !s.has(l)), o = /* @__PURE__ */ new Map();
    for (let { skillName: l, entry: u } of jon(a)) {
      let f = `${u.serverName}\0${u.uri}`;
      o.set(f, { name: l, mcpSkill: u });
    }
    if (o.size > 0) return { ...e, mcpSkillEntries: [...o.values()] };
  } catch {
    (0, import_chunk_k449cc64.i)(Error("A compaction's summary got no entry of a loaded MCP skill, because the scan of the replaced messages threw"));
  }
  return e;
}
function dfo(e) {
  return (0, import_chunk_865at33z.Or)([...e]).filter((t) => t.type === "user" && t.mcpSkill != null || t.type === "user" && t.isCompactSummary === true && Array.isArray(t.mcpSkillEntries) && t.mcpSkillEntries.length > 0 || t.type === "attachment" && (Fst(t.attachment) || t.attachment.type === "invoked_skills" && Array.isArray(t.attachment.mcpSkillEntries) && t.attachment.mcpSkillEntries.length > 0));
}
function Nil(e, t, r) {
  let s;
  for (let a of jon(e)) if (a.skillName === t && J(a.texts, r)) s = a.entry;
  return s;
}
function J(e, t) {
  return e.some((r, s) => e.slice(s).join(`

`) === t);
}
async function Fil(e) {
  let t = !(0, import_chunk_fpcs74d2.RYe)(e.connected);
  {
    let s = (0, import_chunk_fpcs74d2.h2t)(e.connected);
    if (s !== void 0 && e.reason === "unlisted" && (0, import_chunk_fpcs74d2.z_)()) return `This file was not read. ${s}`;
  }
  if (t && e.reason === "unlisted") return "This file was not read, because MCP skills are turned off for now. While they are off, this app reads no file of a loaded skill.";
  return await (t ? void 0 : (0, import_chunk_qdcbcsg7.mt)().skillsFetcher)?.settleFailedRead(e) ?? qus(e.uri, e.reason) + e.skills.map((s) => X$t(s.skillName)).join("");
}
function mNn(e, t, r) {
  if (t.length === 0) return { case: "outside" };
  if (!A(e)) return { case: "unlisted", skills: [...t], reason: "uri_too_long" };
  let s = [], a = [];
  for (let u of t) {
    let f = u.resources.find((d) => d.uri === e);
    if (f !== void 0) s.push(f), a.push(u);
  }
  if (s.length > 0) return r ? { case: "listed", rows: s, skills: a } : { case: "unlisted", skills: a, reason: "unlisted" };
  let o = t.filter((u) => e.startsWith(`${u.root}/`));
  if (o.length > 0) return { case: "unlisted", skills: o, reason: "unlisted" };
  let l = t.filter((u) => NRi(e, u.root));
  if (l.length > 0) return { case: "unlisted", skills: l, reason: "other_spelling" };
  return ifo(e) ? { case: "outside" } : { case: "unlisted", skills: [...t], reason: "unparseable_uri" };
}
function NRi(e, t) {
  return U(e).startsWith(U(`${t}/`));
}
function cfo(e, t) {
  return t.filter((r) => r.resources.some(({ uri: s }) => e.some((a) => a.uri === s)));
}
function U(e) {
  let t = R(e);
  if (t === void 0) return e;
  let { url: r } = t;
  return r.hostname = r.hostname.toLowerCase(), r.username = "", r.password = "", r.port = "", r.href + e.slice(t.length);
}
function $il(e) {
  let t = K(e), r = [e, ...t.slice(2, 3)].map(W);
  return (0, import_chunk_4smdap7r.M)([...t, ...r.flatMap(K)]);
}
function W(e) {
  return [1, 2, 3].reduce((t) => (0, import_chunk_4s4nxvxt.kTr)(t)[0], e);
}
function K(e) {
  let t = R(e);
  if (t === void 0) return [e];
  let r = e.slice(0, t.length), s = e.slice(t.length), { url: a } = t, o = (k) => a.pathname === "/" ? k.slice(0, -1) : k, { port: l } = a;
  a.hostname = a.hostname.toLowerCase();
  let u = o(a.href);
  a.port = "";
  let f = o(a.href);
  a.username = "", a.password = "", a.port = l;
  let d = o(a.href), m = [o(U(r)), f, d, u, r.toLowerCase()];
  return [s, W(s)].flatMap((k) => [k, k && import_path.posix.normalize(k)]).flatMap((k) => m.map((S) => S + k));
}
function ufo(e, t, r) {
  let s = Vus(e, t, Math.max(...r.map((f) => f.size)));
  if (!s.ok) return s;
  if (r.some((f) => f.size !== s.bytes.length)) return { ok: false, reason: "size_mismatch" };
  let a = `sha256:${(0, import_chunk_ccm69jjy.Je)(s.bytes)}`;
  if (r.some((f) => f.digest !== a)) return { ok: false, reason: "digest_mismatch" };
  let o = (0, import_chunk_8mmj96hs.fpo)(e[0]?.mimeType), l = { uri: t, ...o !== void 0 && { mimeType: o } };
  if (s.from === "blob") {
    let f = Buffer.from(s.bytes).toString("base64");
    return { ok: true, item: { ...l, blob: f } };
  }
  let u = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
  return { ok: true, item: { ...l, text: u.decode(s.bytes) } };
}
function Uil(e, t) {
  let r = `${e}/`, s = /* @__PURE__ */ new Map();
  for (let { resources: a } of t) for (let o of a) {
    if (!o.uri.startsWith(r)) continue;
    let l = o.uri.indexOf("/", r.length);
    if (l === -1) s.set(o.uri, false);
    else if (!s.has(o.uri.slice(0, l))) s.set(o.uri.slice(0, l), true);
  }
  return s.size === 0 ? void 0 : Array.from(s, ([a, o]) => ({ uri: a, isDirectory: o }));
}
var FRi = { other_address: "This answer was not used, because the server gave it the address of a file of this skill, and the read was for another address. The server's owner can fix this.", not_found: "This file was not used, because the skill lists it but the server reports no file at this address. Loading the skill again may fix this. If it does not, the server's owner can fix this.", unlisted: "This file was not used, because its address does not name a file of this skill. If the skill changed, loading it again may fix this. If it does not, the server's owner can fix this.", other_spelling: "This file was not used, because its address begins with another spelling of the address of this skill. Write that part exactly as the skill writes it.", unparseable_uri: "This file was not used, because its address is not a valid URL. While a skill from this server is loaded, this app reads a file only at a valid URL. Write the address as the server or the skill gives it.", uri_too_long: `This file was not used, because its address is longer than ${FDe} bytes. While a skill from this server is loaded, this app reads a file only at an address of ${FDe} bytes or less.`, size_mismatch: "This file was not used, because its content does not match the size that the server listed for it. Loading the skill again may fix this. If it does not, the server's owner can fix this.", digest_mismatch: "This file was not used, because its content does not match the checksum that the server listed for it. Loading the skill again may fix this. If it does not, the server's owner can fix this.", unexpected_contents: "This file was not used, because the server's answer did not hold exactly this one file, in a form that this app can read. The server's owner can fix this." };
function X$t(e) {
  return ` The skill is "${e}".`;
}
function qus(e, t) {
  return `${t === "uri_too_long" ? `An address of ${Buffer.byteLength(e)} bytes` : (0, import_chunk_4vsz8a99.PU)(e)}: ${FRi[t]}`;
}
var A = (e) => Buffer.byteLength(e) <= FDe, j = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ serverName: (0, import_chunk_adx6804h.n)(), uri: (0, import_chunk_adx6804h.n)().refine((e) => {
  let t = A(e) ? g(e) : void 0;
  return t !== void 0 && !T(t);
}), resources: (0, import_chunk_adx6804h.C)(L().refine((e) => A(e.uri))).max(x) }));
function Q(e) {
  let t = j().safeParse(e);
  if (t.success) return t.data;
  let r = j().omit({ resources: true }).safeParse(e);
  return r.success ? { ...r.data, resources: [] } : void 0;
}
