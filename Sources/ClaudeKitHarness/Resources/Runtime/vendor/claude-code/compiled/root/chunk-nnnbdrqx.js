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
var chunk_nnnbdrqx_exports = {};
__export(chunk_nnnbdrqx_exports, {
  G1a: () => G1a,
  V1a: () => V1a,
  ZXt: () => ZXt,
  z1a: () => z1a
});
module.exports = __toCommonJS(chunk_nnnbdrqx_exports);
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_4vfdya4f = require("/$bunfs/root/chunk-4vfdya4f.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var ZXt = "mcp-skill-archives", I = "meta.json", M = "SKILL.md", z = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ uri: (0, import_chunk_adx6804h.n)().optional(), cacheKey: (0, import_chunk_adx6804h.n)(), fetchedAt: (0, import_chunk_adx6804h.E)() }));
function L() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), ZXt);
}
function R(e, o) {
  return import_chunk_hkvzj051.at.userConfigDir(ZXt, [e, o, M]);
}
function H(e) {
  return import_chunk_hkvzj051.at.userConfigDir(ZXt, [e, I]);
}
function P(e) {
  return (0, import_chunk_4vfdya4f.$De)((0, import_path.join)(e, I), () => z().nullable(), { defaultValue: null, ensureDir: true });
}
var g = 64, K = 16, me = g + 2 + g + 2 + K;
function T(e, o, r) {
  let i = (0, import_chunk_ccm69jjy.Je)(`${e}\0${r}`).slice(0, K), a = (0, import_chunk_3f4m74y6.xn)(e).slice(0, g), s = o.replace(/[^A-Za-z0-9._-]/g, "-").slice(0, g);
  return `${a}--${s}--${i}`;
}
function b(e) {
  return e.digest.slice(7);
}
async function G1a(e) {
  try {
    return await P(e).read();
  } catch {
    return null;
  }
}
async function N(e, o, r) {
  let i = await e.write(H(o), (0, import_chunk_w578pjby._)(r), { publishDiscipline: "atomic", mode: 438 & ~process.umask() });
  if (!i.ok) throw new import_chunk_jv7av99m.A(`meta.json write failed: ${(0, import_chunk_7n1spq36.un)(i.error)}`, "MCP skill cache meta.json write failed");
}
async function z1a({ serverName: e, skillName: o, row: r }, i) {
  let a = T(e, o, r.uri), s = b(r);
  if (i) {
    let u = await i.read([{ key: R(a, s), offset: 0, length: r.size + 1 }]);
    if (!u.ok) return;
    let m = u.value.items[0];
    if (!m.found) return;
    return m.value;
  }
  let l = await (0, import_chunk_2yx6c1y2.VC)((0, import_path.join)(L(), a, s, M));
  if (!l.ok) return;
  let S = l.value;
  try {
    let u = Buffer.alloc(r.size + 1), m = 0;
    while (m < u.length) {
      let { bytesRead: f } = await S.read(u, m, u.length - m, m);
      if (f === 0) break;
      m += f;
    }
    return u.subarray(0, m);
  } catch {
    return;
  } finally {
    await S.close().catch(() => {
    });
  }
}
async function O(e, o, r) {
  for (let i of [[o, r], [o]]) {
    let a = import_chunk_hkvzj051.at.userConfigDir(ZXt, i);
    if ((await e.statMeta(a)).ok) {
      (0, import_chunk_w578pjby.t)(`[mcp-skills] replacing a stray file at ${ZXt}/${i.join("/")} with the cache directory`);
      let s = await e.delete(a);
      if (!s.ok) (0, import_chunk_w578pjby.t)(`[mcp-skills] could not remove the stray file at ${ZXt}/${i.join("/")}: ${(0, import_chunk_7n1spq36.un)(s.error)}`);
      return s.ok;
    }
  }
  return false;
}
async function U(e, o, r, i) {
  let a = R(o, r), s = { publishDiscipline: "atomic", mode: 438 & ~process.umask() }, l = await e.write(a, i, s);
  if (!l.ok && l.error.code === "Failed" && (l.error.telemetryCode === "ENOTDIR" || l.error.telemetryCode === "ENOENT") && await O(e, o, r)) l = await e.write(a, i, s);
  if (!l.ok) throw new import_chunk_jv7av99m.A(`SKILL.md write failed: ${(0, import_chunk_7n1spq36.un)(l.error)}`, "MCP skill cache SKILL.md write failed");
}
async function V1a({ serverName: e, skillName: o, row: r }, i, a) {
  let s = T(e, o, r.uri), l = b(r), S = (0, import_path.join)(L(), s), u = (0, import_path.join)(S, l);
  try {
    if ((0, import_chunk_m15w38ag.ne)() && a) await U(a, s, l, i);
    else {
      let f = (0, import_path.join)(S, `.tmp-${process.pid}-${(0, import_crypto.randomBytes)(4).toString("hex")}`);
      await (0, import_promises.mkdir)(f, { recursive: true });
      let k = false;
      try {
        await (0, import_promises.writeFile)((0, import_path.join)(f, M), i);
        try {
          await (0, import_promises.rename)(f, u), k = true;
        } catch (C) {
          let y = (0, import_chunk_jv7av99m.w)(C);
          if (y !== "EEXIST" && y !== "ENOTEMPTY" && y !== "ENOTDIR" && y !== "EPERM" && y !== "EACCES" && y !== "EBUSY") throw C;
          await (0, import_promises.rm)(u, { recursive: true, force: true }), await (0, import_chunk_q7qjcthc.iJ)(f, u), k = true;
        }
      } finally {
        if (!k) await (0, import_promises.rm)(f, { recursive: true, force: true }).catch(() => {
        });
      }
    }
    let m = { uri: r.uri, cacheKey: l, fetchedAt: Date.now() };
    if ((0, import_chunk_m15w38ag.ne)() && a) await N(a, s, m);
    else await P(S).write(m);
  } catch (m) {
    (0, import_chunk_k449cc64.He)(e, `Failed to cache SKILL.md for '${o}': ${(0, import_chunk_jv7av99m.d)(m)}`);
  }
}
