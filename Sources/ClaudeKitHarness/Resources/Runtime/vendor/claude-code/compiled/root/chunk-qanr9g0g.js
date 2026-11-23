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
var chunk_qanr9g0g_exports = {};
__export(chunk_qanr9g0g_exports, {
  Dol: () => Dol,
  EAi: () => EAi,
  Gcs: () => Gcs,
  Hol: () => Hol,
  Iol: () => Iol,
  Kco: () => Kco,
  Lol: () => Lol,
  Mol: () => Mol,
  O$t: () => O$t,
  Ool: () => Ool,
  Pol: () => Pol,
  QQl: () => QQl,
  TAi: () => TAi,
  Vco: () => Vco,
  WLn: () => WLn,
  Xco: () => Xco,
  Yco: () => Yco,
  _gr: () => _gr,
  bAi: () => bAi,
  bon: () => bon,
  cwt: () => cwt,
  dwt: () => dwt,
  ggr: () => ggr,
  jcs: () => jcs,
  kAi: () => kAi,
  l0: () => l0,
  qco: () => qco,
  rAe: () => rAe,
  s9e: () => s9e,
  vAi: () => vAi,
  wAi: () => wAi,
  zcs: () => zcs
});
module.exports = __toCommonJS(chunk_qanr9g0g_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_w2hrk3t1 = require("/$bunfs/root/chunk-w2hrk3t1.js");
var import_chunk_fwgyarbe = require("/$bunfs/root/chunk-fwgyarbe.js");
var import_chunk_f7aa6t06 = require("/$bunfs/root/chunk-f7aa6t06.js");
var import_chunk_g6rfsx76 = require("/$bunfs/root/chunk-g6rfsx76.js");
var import_chunk_t3j4pzwb = require("/$bunfs/root/chunk-t3j4pzwb.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_path = require("path");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_path2 = require("path");
function l0(e) {
  let r = e.type === "user" || e.type === "attachment" ? e[import_chunk_865at33z.loe] : void 0;
  return r !== void 0 && r.uuid === e.uuid ? r : e;
}
(0, import_chunk_adx6804h.B)();
function O$t(e, r, o = "replace") {
  e((i) => {
    let s = i.alwaysDenyRules.command, d = o === "union" ? (0, import_chunk_4smdap7r.M)([...s ?? [], ...r.filter((T) => !import_chunk_8hfdvrr1.hT.test(T))]) : [...r, ...i.turnDisallowedTools ?? []];
    if ((s?.length ?? 0) === d.length && (s ?? []).every((T, g) => T === d[g])) return i;
    return { ...i, alwaysDenyRules: { ...i.alwaysDenyRules, command: d.length > 0 ? d : void 0 } };
  });
}
var Z = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ disallowed_tools: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()) })), J = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().max(128, { abort: true }).regex(/^mcp__[A-Za-z0-9_-]+$/)), Q = 64, I = `mcp__${import_chunk_qdcbcsg7.$n}`;
function s9e(e, r = "frame") {
  let o = Z().safeParse(e).data?.disallowed_tools;
  if (o === void 0) return;
  let i = (0, import_chunk_4smdap7r.M)(o.flatMap((g) => {
    let h = J().safeParse(g).data;
    if (h !== void 0 || typeof g !== "string") return h ?? [];
    let y = g.indexOf("*");
    return g.startsWith(import_chunk_px0hhsq7.ch) || y !== -1 && import_chunk_px0hhsq7.ch.startsWith(g.slice(0, y)) ? I : [];
  })), s = r === "stored" ? 1 / 0 : Q, d = i.filter((g) => Xco(g)), _ = i.filter((g) => !Xco(g)), T = [...Math.max(d.length, _.length) > s ? [I] : d, ..._.slice(0, s)];
  return T.length === 0 && o.length !== 0 ? void 0 : T;
}
function Pol(e) {
  let r = "disallowed_tools" in e ? e.disallowed_tools ?? [] : [];
  return !Array.isArray(r) || r.length > 0;
}
function cwt(e) {
  return e !== void 0 && e !== "" && e !== import_chunk_865at33z.Apn && e !== "api_direct";
}
function Ool(e, r, o, i, s, d = []) {
  let _, T;
  return e.filter((g) => {
    if (r.includes(g) || i(g) || Xco(g, d) || EAi(g)) return true;
    let h = _ ??= o(), y = (T ??= h.map(L)).filter(k(g)).map((D) => D.tool);
    if (y.length === 0) return vAi({ turnDisallowedTools: r }, { name: g }) || Yco(g) || s(g, h) === "free";
    if (y.some(z)) return true;
    let P = new Set(y.filter((D) => g === (0, import_chunk_px0hhsq7.ca)(D) || (0, import_chunk_px0hhsq7.JFe)(D).includes(g)).map((D) => D.mcpInfo?.serverName)).size === 1;
    return y.every((D) => {
      if (i(D.name)) return true;
      let S = s(D, h);
      return S === "free" || S === "costly" && !P;
    });
  });
}
function Yco(e) {
  return !e.includes("__", 5);
}
var Iol = "tengu_jaunty_nebula";
function z(e) {
  return e.mcpInfo?.serverName === import_chunk_qdcbcsg7.$n || e.mcpInfo?.source === "plugin" && (0, import_chunk_3t7ve0wy.kl)();
}
function kAi(e) {
  let r = (0, import_chunk_3t7ve0wy.kl)();
  return e.filter(({ name: o, config: i }) => o === import_chunk_qdcbcsg7.$n || r && (0, import_chunk_ts09sys6.XH)(o, i) === "plugin").flatMap(({ name: o }) => (0, import_chunk_qyhf6bts._2t)(o, e));
}
function EAi(e) {
  return (0, import_chunk_3t7ve0wy.kl)() && (0, import_chunk_px0hhsq7._qt)(e);
}
function Xco(e, r = []) {
  return [e, (0, import_chunk_px0hhsq7.Nqn)(e) ?? e].some((o) => [import_chunk_qdcbcsg7.$n, ...r].some((i) => `${o}__`.startsWith((0, import_chunk_px0hhsq7.Rr)(i))));
}
function Mol(e, r) {
  return r.some((o) => z(o) && N(e, o));
}
function N(e, r) {
  let o = (0, import_chunk_px0hhsq7.ca)(r), i = r.mcpInfo && (0, import_chunk_px0hhsq7.mqt)(e, o);
  return e === o || i !== void 0 && i.rule === i.row || (0, import_chunk_px0hhsq7.JFe)(r).includes(e) || (0, import_chunk_px0hhsq7.VJe)(e, r);
}
function L(e) {
  let r = [e, ...(0, import_chunk_px0hhsq7.JFe)(e).map((i) => ({ name: i }))], o = r.map((i) => (0, import_chunk_px0hhsq7.ca)(i));
  return { tool: e, exactNames: [...o, ...r.flatMap((i) => (0, import_chunk_px0hhsq7.hce)(i))], mcpInfos: o.map((i) => (0, import_chunk_px0hhsq7.mr)(i)) };
}
function k(e) {
  if ((0, import_chunk_px0hhsq7.Nqn)(e) !== void 0) return ({ tool: o }) => N(e, o);
  let r = (0, import_chunk_px0hhsq7.Uqn)(e);
  return ({ exactNames: o, mcpInfos: i }) => o.includes(e) || i.some(r);
}
function vAi(e, r) {
  return e.turnDisallowedTools?.some((o) => N(o, r)) ?? false;
}
function _gr(e) {
  let r = e.map(k);
  return (o) => {
    let i = L(o);
    return r.some((s) => s(i));
  };
}
function WLn(e, r) {
  e((o) => {
    let i = o.turnDisallowedTools ?? [];
    if (i.length === r.length && i.every((d, _) => d === r[_])) return o;
    let s = [...(o.alwaysDenyRules.command ?? []).filter((d) => !i.includes(d)), ...r];
    return { ...o, turnDisallowedTools: r.length > 0 ? r : void 0, alwaysDenyRules: { ...o.alwaysDenyRules, command: s.length > 0 ? s : void 0 } };
  });
}
(0, import_chunk_adx6804h.B)();
var se = import_chunk_f7aa6t06.ruo * 24 * 60 * 60 * 1e3, V = "file-transfers";
function v(e) {
  (0, import_chunk_w578pjby.t)(`[peer-file-transfer] ${e}`);
}
function dwt(e) {
  let r = (0, import_path2.basename)(e).replace(import_chunk_f7aa6t06.euo, "_") || "attachment", o = r.lastIndexOf("."), i = o > 0 && r.length - o <= 16 ? r.slice(o) : "", s = i ? r.slice(0, o) : r, d = import_chunk_f7aa6t06.tuo - i.length;
  return (s.length > d ? s.slice(0, d) : s) + i;
}
function Vco(e, r) {
  return `[SendFile: "${dwt(e)}" was not delivered \u2014 ${r}]`;
}
function Kco(e) {
  return `[SendFile: ${e} additional attachment(s) were dropped \u2014 max ${import_chunk_f7aa6t06.sAe} per message]`;
}
function qco(e, r) {
  if (typeof r.file_size === "number" && e.length !== r.file_size) return false;
  return (0, import_chunk_ccm69jjy.Je)(e) === r.sha256;
}
function jcs(e, r, o) {
  if ((0, import_chunk_y53wbr8a.a)("tengu_send_file_received", { transport: (0, import_chunk_78g0060s.f)(e), file_count: r, verified_count: o }), o === r) (0, import_chunk_cqa9hrgx.u)("peer_file_receive");
  else if (o > 0) (0, import_chunk_cqa9hrgx.l)("peer_file_receive", "partial_failed");
  else (0, import_chunk_cqa9hrgx.m)("peer_file_receive", "all_failed");
}
async function rAe(e, r, o) {
  try {
    let s = await (0, import_promises.stat)(e);
    if (!s.isFile() || s.size > r) return null;
  } catch {
    return null;
  }
  let i;
  try {
    i = await (0, import_chunk_xfj2cwfv.Qdt)(e);
  } catch {
    return null;
  }
  try {
    let s = await i.stat();
    if (!s.isFile() || s.size > r) return null;
    let d = await (0, import_chunk_xfj2cwfv.Emn)(e, i, (0, import_chunk_cg8dqz0a.x)());
    if (d.cause !== void 0 || o !== void 0 && d.foundAt !== void 0 && d.foundAt !== o) return null;
    let _ = await (0, import_chunk_xfj2cwfv.IE)(i, r, s.size);
    return _.overLimit ? null : _.bytes;
  } catch {
    return null;
  } finally {
    await i.close().catch(() => {
    });
  }
}
function Gcs(e, r) {
  if (!r) return e;
  let o = /^<cross-session-message\b[^>]*>\n?/.exec(e);
  return o ? o[0] + r + e.slice(o[0].length) : r + e;
}
function ggr() {
  return (0, import_path2.join)((0, import_chunk_2gtmjt3y.Ze)(), V);
}
function ae() {
  return (0, import_chunk_fwgyarbe.ov)();
}
var le = /^[0-9a-f]{64}$/, ue = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ path: (0, import_chunk_adx6804h.n)(), file_name: (0, import_chunk_adx6804h.n)(), file_size: (0, import_chunk_adx6804h.E)().int().nonnegative(), sha256: (0, import_chunk_adx6804h.n)().regex(le), media_type: (0, import_chunk_adx6804h.n)().optional() })), ce = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)(ue()));
async function bAi(e, r) {
  if ((0, import_chunk_f9x2f6cx.Y)()) throw new import_chunk_jv7av99m.A(import_chunk_f7aa6t06.Wol, "peer file transfer: no disk in this session");
  let o = await rAe(e, import_chunk_f7aa6t06.epe, r);
  if (o === null) throw new import_chunk_jv7av99m.A(import_chunk_f7aa6t06.nuo, "peer file transfer: source unreadable or over the size limit");
  let i = (0, import_chunk_ccm69jjy.Je)(o), s = ggr();
  await (0, import_promises.mkdir)(s, { recursive: true, mode: 448 });
  let d = (0, import_path2.basename)(e), _ = (0, import_path2.join)(s, `${i.slice(0, 8)}-${(0, import_crypto.randomUUID)().slice(0, 8)}-${dwt(d)}`);
  return await (0, import_promises.writeFile)(_, o, { mode: 384 }), { path: _, file_name: d, file_size: o.length, sha256: i, media_type: (0, import_chunk_t3j4pzwb.IDe)(d) };
}
async function wAi() {
  if ((0, import_chunk_f9x2f6cx.Y)()) return;
  let e = ggr();
  try {
    let r = await (0, import_promises.readdir)(e), o = Date.now() - se;
    for (let i of r.slice(0, 200)) {
      let s = (0, import_path2.join)(e, i);
      try {
        let d = await (0, import_promises.stat)(s);
        if (d.isFile() && d.mtimeMs < o) await (0, import_promises.unlink)(s);
      } catch {
      }
    }
  } catch {
  }
}
var H = { prefix: "", received: 0, verified: 0 };
async function QQl(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return H;
  let r = ce().safeParse(e);
  if (!r.success || r.data.length === 0) {
    if (!r.success) v(`ignoring malformed file_attachments: ${r.error.message}`);
    return H;
  }
  let o = [], i = r.data;
  if (i.length > import_chunk_f7aa6t06.sAe) o.push(Kco(i.length - import_chunk_f7aa6t06.sAe)), i = i.slice(0, import_chunk_f7aa6t06.sAe);
  let s = ae(), d = ggr(), _ = [], T = 0;
  for (let h of i) {
    let y = (w) => {
      v(`${h.file_name}: ${w}`), o.push(Vco(h.file_name, w));
    };
    if ((0, import_chunk_z6pfqf6e.$r)(h.path) || (0, import_chunk_xfj2cwfv.hAt)(h.path) || !(0, import_path2.isAbsolute)(h.path)) {
      y("invalid transfer path");
      continue;
    }
    let P = (0, import_path2.resolve)(h.path), D = (0, import_path2.dirname)(P);
    if ((0, import_chunk_z6pfqf6e.$r)(P) || (0, import_chunk_xfj2cwfv.hAt)(P) || (0, import_path2.basename)(D) !== V) {
      y("transfer path is outside the file-transfer spool");
      continue;
    }
    try {
      if (!(await (0, import_promises.lstat)(D)).isDirectory() || !(await (0, import_promises.lstat)(P)).isFile()) {
        y("the transfer copy is not a regular file");
        continue;
      }
    } catch {
      y("the transfer copy could not be read (it may have expired)");
      continue;
    }
    let S = await rAe(P, import_chunk_f7aa6t06.epe);
    if (S === null) {
      y("the transfer copy could not be read (it may have expired)");
      continue;
    }
    if (!qco(S, h)) {
      y("it failed integrity verification");
      continue;
    }
    let O = (0, import_path2.join)(s, `${h.sha256.slice(0, 8)}-${(0, import_crypto.randomUUID)().slice(0, 8)}-${dwt(h.file_name)}`);
    try {
      let w = await (0, import_chunk_w2hrk3t1.oAe)(s);
      try {
        await (0, import_promises.writeFile)((0, import_path2.join)(w.at, (0, import_path2.basename)(O)), S, { mode: 384, flag: "wx" });
      } finally {
        await w.release();
      }
    } catch (w) {
      y("it could not be written to the uploads directory"), v(`write ${O} failed: ${w}`);
      continue;
    }
    if (T++, _.push(`@"${O}"`), D === d) (0, import_promises.unlink)(P).catch(() => {
    });
  }
  let g = [..._, ...o];
  return { prefix: g.length > 0 ? g.join(" ") + " " : "", received: i.length, verified: T };
}
function zcs(e) {
  return (0, import_path.extname)(e) === "";
}
function Hol(e, r) {
  return (!zcs(e) || !r) && !(0, import_chunk_k883m4fq.uct)(e) && !(0, import_chunk_g6rfsx76.ODe)(e) && (!(0, import_chunk_n2dbhmj2.nF)(e) || !r) && !(r && (0, import_chunk_865at33z.b)("tengu_pure_squid", (0, import_chunk_f9x2f6cx.st)()) === true);
}
function Dol() {
  let e = (0, import_chunk_865at33z.b)("tengu_brimming_kettle", 0);
  return typeof e === "number" && Number.isFinite(e) ? e : 0;
}
function Lol() {
  return (0, import_chunk_tjdnrbvx.qP)() && (0, import_chunk_865at33z.b)("tengu_russet_envelope", false) === true;
}
function TAi(e) {
  return (0, import_chunk_fwgyarbe.Mwt)("", dwt(e.file_name));
}
function bon(e) {
  let r = 0, o = 0, i = 0, s = 0, d = 0, _ = 0;
  for (let g of e) {
    if (g.is_image === true) continue;
    let h = TAi(g), y = g.sha256 === void 0;
    if (import_chunk_k883m4fq.RXe.has((0, import_path.extname)(h).toLowerCase().slice(1))) r++;
    else if ((0, import_chunk_k883m4fq.uct)(h)) {
      if (o++, y) _++;
    } else if ((0, import_chunk_g6rfsx76.ODe)(h)) {
      if (i++, y) d++, _++;
    } else s++;
  }
  let T = e.length > 0;
  return { binary_ext_file_count: i, pdf_file_count: o, text_like_file_count: s, image_ext_file_count: r, all_files_binary_ext_no_sha256: T && d === e.length ? 1 : 0, all_files_binary_ext_or_pdf_no_sha256: T && _ === e.length ? 1 : 0 };
}
