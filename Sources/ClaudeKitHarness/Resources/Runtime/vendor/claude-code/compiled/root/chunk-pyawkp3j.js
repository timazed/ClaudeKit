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
var chunk_pyawkp3j_exports = {};
__export(chunk_pyawkp3j_exports, {
  AHi: () => AHi,
  Bfl: () => Bfl,
  CHi: () => CHi,
  Cit: () => Cit,
  DBt: () => DBt,
  DSr: () => DSr,
  Dho: () => Dho,
  EHi: () => EHi,
  Gfl: () => Gfl,
  HBt: () => HBt,
  Hho: () => Hho,
  LBt: () => LBt,
  Mho: () => Mho,
  Mpe: () => Mpe,
  Qin: () => Qin,
  SHi: () => SHi,
  THi: () => THi,
  Ufl: () => Ufl,
  Wfl: () => Wfl,
  b8e: () => b8e,
  bHi: () => bHi,
  ghs: () => ghs,
  hhs: () => hhs,
  jfl: () => jfl,
  kHi: () => kHi,
  uZl: () => uZl,
  vHi: () => vHi,
  wHi: () => wHi,
  x7: () => x7,
  xkt: () => xkt,
  yHi: () => yHi
});
module.exports = __toCommonJS(chunk_pyawkp3j_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_m0xr8k74 = require("/$bunfs/root/chunk-m0xr8k74.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_g9ztbtfd = require("/$bunfs/root/chunk-g9ztbtfd.js");
var import_chunk_dvkg7v5x = require("/$bunfs/root/chunk-dvkg7v5x.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_path = require("path");
var Cit = import_chunk_m0xr8k74.nle, b8e = "x-download-token", R = "downloads", yHi = `/${R}`, Ufl = /^[A-Za-z0-9_-]{43}$/, U = 128, Bfl = "claude-ai-oauth", xkt = 5368709120, HBt = 524288e3, Mho = 1e3, SHi = 10;
function bHi(n) {
  if (!(0, import_chunk_xcgcdx61.Ign)(n) || n.length > U) return;
  return `/${(0, import_chunk_ephf358x.cn)().MCP_PROXY_PATH.replace("{server_id}", n).replace(/^\/+/, "")}/${R}`;
}
function Wfl(n) {
  let e = bHi(n);
  return e === void 0 ? void 0 : `${(0, import_chunk_ephf358x.cn)().MCP_PROXY_URL}${e}`;
}
function jfl(n) {
  if ((0, import_chunk_xcgcdx61.g3)(n) && n.id !== void 0) return { via: "claude-ai", connectorId: n.id };
  let e = (0, import_chunk_3t7ve0wy.ite)() ? Hho(n) : void 0;
  return e === void 0 || wHi(e) === void 0 ? void 0 : { via: "cloud-session", mcpUrl: e };
}
function Hho(n) {
  return n.type === "http" && n.url !== void 0 && n.scope === "dynamic" && !(0, import_chunk_xcgcdx61.jl)(n) && !(0, import_chunk_3t7ve0wy.kk)() && import_chunk_f2dee02n.Ql.bridgeCarrier === void 0 && (0, import_chunk_2mwshd9r.zhe)(n.url) && (0, import_chunk_2mwshd9r.pB)(n.url) !== null ? n.url : void 0;
}
function Gfl(n) {
  return n.url !== void 0 && (0, import_chunk_2mwshd9r.Yu)(n.url);
}
function wHi(n) {
  let e = URL.parse(n);
  if (e === null || !(e.protocol === "https:" || e.protocol === "http:" && (0, import_chunk_dvkg7v5x.P_)(e.hostname))) return;
  return e.pathname = `${e.pathname.replace(/\/+$/, "")}${yHi}`, e.href;
}
var T = "tengu_piped_planet";
function x7() {
  if ((0, import_chunk_865at33z.b)(T, false)) return x.for = (0, import_chunk_865at33z.Uj)(), true;
  return Z();
}
var x = (0, import_chunk_t57w17k7.de)({ for: void 0 }, (n) => {
  n.for = void 0;
});
function Z() {
  let { for: n } = x;
  if (n?.accountUuid === void 0) return false;
  let { source: e } = (0, import_chunk_865at33z.gn)(T, false);
  if ((0, import_chunk_865at33z.km)(e)) return x.for = void 0, false;
  let o = (0, import_chunk_865at33z.Uj)();
  return o.accountUuid === n.accountUuid && o.organizationUuid === n.organizationUuid && (0, import_chunk_865at33z.wde)();
}
var B = "tengu_jaunty_snowglobe";
function J() {
  return (0, import_chunk_865at33z.b)(B, false);
}
function DBt() {
  return x7() || J();
}
function DSr() {
  return !DBt() && [T, B].every((n) => {
    let { source: e } = (0, import_chunk_865at33z.gn)(n, false);
    return e !== "disabled" && (0, import_chunk_865at33z.km)(e);
  });
}
var S = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (n) => n.clear()), W = (0, import_chunk_t57w17k7.de)({ begunOrFound: false }, (n) => {
  n.begunOrFound = false;
});
function uZl() {
  W.begunOrFound = true;
}
function kHi() {
  return W.begunOrFound;
}
function EHi() {
  return S.size > 0;
}
var N = 4096;
async function F(n) {
  return (0, import_promises.realpath)(n).catch(() => (0, import_path.resolve)(n));
}
var y = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Set(), (n) => n.clear());
function LBt(n) {
  if (typeof n !== "string") return false;
  return (0, import_chunk_6mfepmbb.o2)(n) || y.has(n) || y.has((0, import_chunk_n2dbhmj2.Fa)(n) ?? n);
}
var Q = 32767;
function Dho(n) {
  if (typeof n !== "string") return;
  if (n.length > Q) return LBt(n) ? "" : void 0;
  let e = n.split(/[\\/]/), o = -1, t = e.map((a) => o += a.length + 1), r = (a) => n.slice(0, t[a]), s = (0, import_chunk_6mfepmbb.HFl)() - 1, i = e.slice(0, -1).findIndex((a, c) => (0, import_chunk_6mfepmbb.ygn)(a) || c === s && (0, import_chunk_6mfepmbb.FMs)(r(c)));
  if (i === -1) return LBt(n) ? "" : void 0;
  let d = r(i);
  if (d === (0, import_chunk_6mfepmbb.nge)() && import_chunk_6mfepmbb.yut.test(n.slice(d.length + 1))) return r(i + 1);
  return i === e.length - 2 && import_chunk_6mfepmbb.gHr.test(e.at(-1)) ? void 0 : d;
}
async function vHi(n) {
  if (y.has(n)) return true;
  let e = (0, import_chunk_6mfepmbb.o2)(n), o = false;
  try {
    let t = await (0, import_promises.realpath)(n);
    e ||= await (0, import_chunk_6mfepmbb.SKt)(t), o = await Qin([t]);
  } catch (t) {
    let r = (0, import_chunk_jv7av99m.w)(t);
    if (r === "EPERM" || r === "EACCES") {
      let s = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), n);
      e ||= !s.isCanonical || (0, import_chunk_6mfepmbb.o2)(s.resolvedPath), o = s.isCanonical && await Qin([s.resolvedPath]);
    } else e ||= r !== "ENOENT" && r !== "ENOTDIR";
  }
  if (e || o) y.add(n);
  return e || o;
}
async function Qin(n) {
  return (await Promise.all((0, import_chunk_4smdap7r.M)(n).map((o) => (0, import_promises.lstat)(k(o)).then(() => true, () => false)))).includes(true);
}
var nn = 250, L = 10;
async function E(n) {
  for (let e = 0; e < L; e++) {
    let o = await (0, import_chunk_5appeerh.me)(n, nn / L);
    if (o !== void 0) return o;
  }
  return;
}
var h = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (n) => n.clear());
async function hhs(n) {
  let e = (0, import_chunk_w5s307zm.dr)(n);
  return e === null || await (0, import_chunk_w5s307zm.Cxt)(e) ? n : e;
}
var C = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (n) => n.clear());
async function THi(n) {
  let e = n.join("\0"), o = C.get(e);
  if (o === void 0) o = en(n).finally(() => C.delete(e)), C.set(e, o);
  let t = await E(o);
  return t === void 0 ? "unknown" : on([...n, ...t]);
}
async function en(n) {
  let e = (0, import_chunk_4smdap7r.M)([...await Promise.all(n.map((u) => hhs(u))), ...n.map(import_chunk_p1ewvgeh.hjt)]), o = await Promise.all((0, import_chunk_4smdap7r.M)([...n, ...e]).map((u) => F(u))), t = (0, import_chunk_4smdap7r.M)([...n, ...e, ...o].flatMap((u) => (0, import_chunk_p1ewvgeh.rSl)(u))), [r] = t;
  if (r === void 0) return e;
  let s = (0, import_path.dirname)(r), i = await F(s);
  if (![...n, ...e, ...o].some((u) => (0, import_chunk_g9ztbtfd.ti)(u, s, true) || (0, import_chunk_g9ztbtfd.ti)(u, i, true))) return [...e, ...t];
  let a = await (0, import_promises.readdir)(s).catch((u) => {
    let l = (0, import_chunk_jv7av99m.w)(u);
    if (l === "ENOENT" || l === "ENOTDIR") return [];
    throw u;
  }), c = await Promise.all(a.map((u) => (0, import_promises.lstat)((0, import_path.join)(s, u, import_chunk_6mfepmbb.dO)).then((l) => l.isDirectory() || l.isSymbolicLink() ? "found" : "none", (l) => {
    let m = (0, import_chunk_jv7av99m.w)(l);
    return m === "ENOENT" || m === "ENOTDIR" ? "none" : "unknown";
  }))), f = a.find((u, l) => c[l] === "found"), g = f === void 0 ? a.filter((u, l) => c[l] === "unknown") : [f];
  return [...e, ...t, ...g.map((u) => (0, import_path.join)(s, u))];
}
async function on(n) {
  if (n.some((i) => (0, import_chunk_6mfepmbb.o2)(`${i}/.`))) return "found";
  if (n.some((i) => h.get(i)?.waitedInVain)) return "unknown";
  let e = [];
  for (let i of (0, import_chunk_4smdap7r.M)(n)) {
    let d = h.get(i);
    if (d !== void 0) {
      e.push(d);
      continue;
    }
    let a = sn(i).finally(() => h.delete(i)), c = { check: a, waitedInVain: false };
    E(a).then((f) => {
      c.waitedInVain = f === void 0;
    }), h.set(i, c), e.push(c);
  }
  if (e.length === 0) return "none";
  let { promise: o, resolve: t } = Promise.withResolvers(), r = 0, s = false;
  for (let { check: i } of e) i.then((d) => {
    if (d === "found") {
      t("found");
      return;
    }
    if (s ||= d === "unknown", ++r === e.length) t(s ? "unknown" : "none");
  });
  return await E(o) ?? "unknown";
}
function k(n) {
  return (0, import_path.join)((0, import_path.dirname)(n), `.${(0, import_path.basename)(n)}.from.json`);
}
async function CHi(n, e, o) {
  let t = (0, import_path.dirname)(n), r = k(n), s = (0, import_chunk_w578pjby._)({ connector: e.connectorName, size: e.size, sha256: e.sha256Hex, ...e.offeredName !== void 0 && { offered_name: e.offeredName } });
  if (!(await Mpe(t, o) && await (0, import_promises.unlink)(r).then(() => true, (d) => (0, import_chunk_jv7av99m.w)(d) === "ENOENT") && await Mpe(t, o) && await (0, import_chunk_q7qjcthc.vI)(r).then(() => (0, import_promises.writeFile)(r, s, { flag: "wx", mode: 420 })).then(() => true, () => false))) {
    let d = await Mpe(t, o);
    return d && await (0, import_promises.unlink)(n).then(() => true, (c) => (0, import_chunk_jv7av99m.w)(c) === "ENOENT") ? { recorded: false } : { recorded: false, leftBehind: { path: d ? n : void 0 } };
  }
  return S.set(await F(n), e), y.add(n), { recorded: true };
}
async function Mpe(n, e) {
  let o = await (0, import_promises.lstat)(n, { bigint: true }).catch(() => {
    return;
  });
  return o !== void 0 && o.isDirectory() && !o.isSymbolicLink() && ((0, import_chunk_kpby9tcv.ia)(e.ino) || o.dev === e.dev && o.ino === e.ino);
}
async function j(n) {
  let e = await (0, import_promises.lstat)(n, { bigint: true }).catch(() => {
    return;
  });
  if (e === void 0 || !e.isFile()) return;
  let o = await (0, import_promises.open)(n, (0, import_chunk_6mfepmbb.Xu)()).catch(() => {
    return;
  }), t = await o?.stat({ bigint: true }).catch(() => {
    return;
  });
  if (o === void 0 || t === void 0 || !t.isFile() || (0, import_chunk_kpby9tcv.RF)(e, t)) {
    await o?.close().catch(() => {
    });
    return;
  }
  return { handle: o, stats: t };
}
async function z(n) {
  let e = await j(k(n));
  if (e === void 0) return;
  let o;
  try {
    if (e.stats.size > BigInt(N)) return;
    let a = Buffer.alloc(N + 1), { bytesRead: c } = await e.handle.read(a, 0, a.length, 0);
    if (c > N) return;
    o = a.subarray(0, c).toString("utf8");
  } catch {
    return;
  } finally {
    await e.handle.close().catch(() => {
    });
  }
  let t;
  try {
    t = (0, import_chunk_w578pjby.te)(o);
  } catch {
    return;
  }
  if (typeof t !== "object" || t === null) return;
  let { connector: r, size: s, sha256: i, offered_name: d } = t;
  return typeof r === "string" && r !== "" && typeof s === "number" && Number.isSafeInteger(s) && s >= 0 && s <= xkt && typeof i === "string" && /^[0-9a-f]{64}$/.test(i) ? { connectorName: r, size: s, sha256Hex: i, ...typeof d === "string" && { offeredName: d } } : void 0;
}
async function AHi(n) {
  return (0, import_chunk_6mfepmbb.o2)(n) ? S.get(n) ?? await z(n) : void 0;
}
var O = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (n) => n.clear()), tn = 64;
async function rn(n, e) {
  let o = await j(n);
  if (o === void 0) return;
  try {
    let { dev: t, ino: r, size: s, mtimeNs: i, ctimeNs: d } = o.stats;
    if (s !== BigInt(e)) return { size: Number(s), sha256Hex: void 0 };
    let a = (0, import_chunk_kpby9tcv.ia)(r) || Date.now() * 1e6 - Number(i > d ? i : d) < 2e9 ? void 0 : `${t}:${r}:${s}:${i}:${d}`, c = a === void 0 ? void 0 : O.get(a);
    if (c !== void 0) return { size: e, sha256Hex: c };
    let f = (0, import_crypto.createHash)("sha256"), g = Buffer.alloc(1048576);
    for (let l = 0; ; ) {
      let { bytesRead: m } = await o.handle.read(g, 0, g.length, l);
      if (m === 0) break;
      f.update(g.subarray(0, m)), l += m;
    }
    let u = f.digest("hex");
    if (a !== void 0) {
      if (O.size >= tn) O.clear();
      O.set(a, u);
    }
    return { size: e, sha256Hex: u };
  } catch {
    return;
  } finally {
    await o.handle.close().catch(() => {
    });
  }
}
async function ghs(n) {
  if (!(0, import_chunk_6mfepmbb.o2)(n)) return;
  let e = S.get(await F(n)) ?? await z(n);
  if (e === void 0) return;
  let o = await rn(n, e.size);
  if (o === void 0) return;
  return { connectorName: e.connectorName, sha256Hex: e.sha256Hex, changed: o.size !== e.size || o.sha256Hex !== e.sha256Hex };
}
async function sn(n) {
  let e = await (0, import_promises.realpath)(n).catch(() => {
    return;
  });
  if (e !== void 0 && (0, import_chunk_6mfepmbb.o2)(`${e}/.`)) return "found";
  let o = await (0, import_promises.lstat)((0, import_path.join)(n, import_chunk_6mfepmbb.dO)).then((t) => t.isDirectory() || t.isSymbolicLink() ? "found" : "none", (t) => {
    let r = (0, import_chunk_jv7av99m.w)(t);
    return r === "ENOENT" || r === "ENOTDIR" ? "none" : "unknown";
  });
  if (o === "found" || o === "unknown") return o;
  try {
    let { mtimeMs: t } = await (0, import_promises.stat)(n), r = v.get(n);
    if (r !== void 0 && r.mtimeMs === t && Date.now() - r.listedAt < dn) return r.answer;
    let s = await (0, import_promises.readdir)(n, { withFileTypes: true }), i = "none";
    for (let d of s) {
      if (!(0, import_chunk_6mfepmbb.ygn)(d.name)) continue;
      if (d.isDirectory() || d.isSymbolicLink()) {
        i = "found";
        break;
      }
      if (!d.isFile()) {
        let a = await (0, import_promises.lstat)((0, import_path.join)(n, d.name)).catch(() => {
          return;
        });
        if (a === void 0) i = "unknown";
        else if (a.isDirectory() || a.isSymbolicLink()) {
          i = "found";
          break;
        }
      }
    }
    if (i !== "unknown") v.set(n, { mtimeMs: t, answer: i, listedAt: Date.now() });
    return i;
  } catch (t) {
    let r = (0, import_chunk_jv7av99m.w)(t);
    return r === "ENOENT" || r === "ENOTDIR" ? "none" : "unknown";
  }
}
var dn = 6e4, v = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (n) => n.clear());
