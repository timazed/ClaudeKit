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
var chunk_02b35jvk_exports = {};
__export(chunk_02b35jvk_exports, {
  BTa: () => BTa,
  UTa: () => UTa,
  Y8t: () => Y8t,
  q8t: () => q8t
});
module.exports = __toCommonJS(chunk_02b35jvk_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_9nypk94f = require("/$bunfs/root/chunk-9nypk94f.js");
var import_chunk_v6cdm8tp = require("/$bunfs/root/chunk-v6cdm8tp.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var g = ".consolidate-lock", y = 36e5;
function c(e) {
  return (0, import_path.join)(e, g);
}
function l(e) {
  let n = (0, import_chunk_p1ewvgeh.ome)(e);
  return n === void 0 ? void 0 : import_chunk_hkvzj051.at.memory(n, [g]);
}
function b(e, n) {
  let [a = "", r = ""] = e.split(`
`), o = parseInt(a.trim(), 10), i = r.trim() === "" ? NaN : Number(r.trim());
  return { holderPid: Number.isFinite(o) ? o : void 0, lastConsolidatedAt: Number.isFinite(i) ? i : n };
}
function h(e, n) {
  return `${e ?? ""}
${n}`;
}
async function q8t(e = (0, import_chunk_865at33z.wc)(), n) {
  let a = (0, import_chunk_m15w38ag.ne)() && n !== void 0 ? l(e) : void 0;
  if (n && a) {
    let r = await n.readText([a]);
    if (!r.ok || !r.value.items[0].found) return 0;
    let { value: o, mtimeMs: i } = r.value.items[0];
    return b(o, i).lastConsolidatedAt;
  }
  try {
    return (await (0, import_promises.stat)(c(e))).mtimeMs;
  } catch {
    return 0;
  }
}
async function UTa(e) {
  return L((0, import_chunk_865at33z.wc)(), e);
}
async function L(e, n) {
  let a = (0, import_chunk_m15w38ag.ne)() && n !== void 0 ? l(e) : void 0;
  if (n && a) return S(n, a);
  let r = c(e), o, i;
  try {
    let [s, w] = await Promise.all([(0, import_promises.stat)(r), (0, import_promises.readFile)(r, "utf8")]);
    o = s.mtimeMs;
    let m = parseInt(w.trim(), 10);
    i = Number.isFinite(m) ? m : void 0;
  } catch {
  }
  if (o !== void 0 && Date.now() - o < y) {
    if (i !== void 0 && (0, import_chunk_v6cdm8tp.Rd)(i)) return (0, import_chunk_w578pjby.t)(`[autoDream] lock held by live PID ${i} (mtime ${Math.round((Date.now() - o) / 1e3)}s ago)`), null;
  }
  await (0, import_promises.mkdir)(e, { recursive: true }), await (0, import_promises.writeFile)(r, String(process.pid));
  let u;
  try {
    u = await (0, import_promises.readFile)(r, "utf8");
  } catch {
    return null;
  }
  if (parseInt(u.trim(), 10) !== process.pid) return null;
  return o ?? 0;
}
async function Y8t(e, n) {
  return C((0, import_chunk_865at33z.wc)(), e, n);
}
async function C(e, n, a) {
  let r = (0, import_chunk_m15w38ag.ne)() && a !== void 0 ? l(e) : void 0;
  if (a && r) return x(a, r, n);
  let o = c(e);
  try {
    if (n === 0) {
      await (0, import_promises.unlink)(o);
      return;
    }
    await (0, import_promises.writeFile)(o, "");
    let i = n / 1e3;
    await (0, import_promises.utimes)(o, i, i);
  } catch (i) {
    (0, import_chunk_w578pjby.t)(`[autoDream] rollback failed: ${(0, import_chunk_jv7av99m.d)(i)} \u2014 next trigger delayed to minHours`);
  }
}
async function S(e, n) {
  let a = await e.readText([n]), r = a.ok ? a.value.items[0] : void 0, o = r?.found ? r.version : void 0, i = r?.found ? b(r.value, r.mtimeMs) : void 0;
  if (i !== void 0 && Date.now() - i.lastConsolidatedAt < y) {
    if (i.holderPid !== void 0 && (0, import_chunk_v6cdm8tp.Rd)(i.holderPid)) return (0, import_chunk_w578pjby.t)(`[autoDream] lock held by live PID ${i.holderPid} (acquired ${Math.round((Date.now() - i.lastConsolidatedAt) / 1e3)}s ago)`), null;
  }
  let u = await e.updateText(n, (s) => (s?.version ?? void 0) === o ? { write: h(process.pid, Date.now()), result: true } : { skip: true, result: false }, r?.found ? { publishDiscipline: "inPlace" } : void 0);
  if (!u.ok || u.value.result !== true) return null;
  return i?.lastConsolidatedAt ?? 0;
}
async function x(e, n, a) {
  let r = a === 0 ? await e.delete(n) : await e.updateText(n, () => ({ write: h(void 0, a) }), { publishDiscipline: "inPlace" });
  if (!r.ok) (0, import_chunk_w578pjby.t)(`[autoDream] rollback failed: ${r.error.code} \u2014 next trigger delayed to minHours`);
}
async function BTa(e, n, a = (0, import_chunk_hsqa3g9e.Dy)((0, import_chunk_f9x2f6cx.Te)())) {
  return (await (0, import_chunk_9nypk94f.cTn)(a, true, void 0, n)).filter((o) => o.mtime > e).map((o) => o.sessionId);
}
