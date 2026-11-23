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
var chunk_44g93ygc_exports = {};
__export(chunk_44g93ygc_exports, {
  KSr: () => KSr,
  t4: () => t4
});
module.exports = __toCommonJS(chunk_44g93ygc_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_8x650tx8 = require("/$bunfs/root/chunk-8x650tx8.js");
var import_chunk_98tkmkvx = require("/$bunfs/root/chunk-98tkmkvx.js");
var import_chunk_cd75h1kz = require("/$bunfs/root/chunk-cd75h1kz.js");
function u(i, r, n, o = "connection", a) {
  let e = () => a?.aborted ? new import_chunk_jv7av99m.Ie(`${o} for '${n}' aborted`) : Object.assign(new import_chunk_jv7av99m.A((0, import_chunk_8x650tx8.WH)(n) ? (0, import_chunk_8x650tx8.YAe)("failed_retrying") : `${o} for '${n}' timed out connecting`, "MCP lazy dial timed out connecting"), { mcpErrorSource: "downstream_unreachable" });
  if (r.aborted) return i.catch(() => {
  }), Promise.reject(a?.aborted ? new import_chunk_jv7av99m.Ie(`${o} for '${n}' aborted before connect`) : new import_chunk_jv7av99m.A(`${o} for '${n}' aborted before connect`, "MCP lazy dial aborted before connect"));
  return new Promise((t, s) => {
    let c = () => s(e());
    r.addEventListener("abort", c, { once: true }), i.then((l) => {
      r.removeEventListener("abort", c), t(l);
    }, (l) => {
      r.removeEventListener("abort", c), s(l);
    });
  });
}
async function t4(i, r) {
  let n = r.timeoutMs ?? (0, import_chunk_98tkmkvx.bf)(), { signal: o, cleanup: a } = (0, import_chunk_cd75h1kz.Bo)(r.signal, { timeoutMs: n, refTimer: true });
  try {
    return await u(i, o, r.serverName, r.context, r.signal);
  } finally {
    a();
  }
}
var d = 5e3, m = 3e5;
function KSr(i) {
  let r = i?.baseHoldMs ?? d, n = i?.maxHoldMs ?? m, o = /* @__PURE__ */ new Map(), a = (e, t) => {
    let s = o.get(e);
    return s !== void 0 && t < s.holdUntil;
  };
  return { shouldSkip(e, t = Date.now()) {
    return a(e, t);
  }, recordFailure(e, t = Date.now()) {
    if (a(e, t)) return;
    let c = (o.get(e)?.count ?? 0) + 1, l = Math.min(n, r * 2 ** (c - 1));
    o.set(e, { count: c, holdUntil: t + l });
  }, recordSuccess(e) {
    o.delete(e);
  }, holdUntil(e) {
    return o.get(e)?.holdUntil;
  } };
}
