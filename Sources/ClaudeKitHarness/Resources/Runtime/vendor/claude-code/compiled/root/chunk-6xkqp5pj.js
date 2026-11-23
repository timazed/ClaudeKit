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
var chunk_6xkqp5pj_exports = {};
__export(chunk_6xkqp5pj_exports, {
  Crr: () => Crr,
  Jei: () => Jei,
  xNa: () => xNa
});
module.exports = __toCommonJS(chunk_6xkqp5pj_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_58apc8rx = require("/$bunfs/root/chunk-58apc8rx.js");
var import_chunk_a9nnd83v = require("/$bunfs/root/chunk-a9nnd83v.js");
var import_chunk_k4bqn7hc = require("/$bunfs/root/chunk-k4bqn7hc.js");
var import_promises = require("fs/promises");
function c(t) {
  return t ? `/api/oauth/organizations/:orgUUID/skills/list-skills?include_wiggle_skills=true&entrypoint=${encodeURIComponent(t)}` : "/api/oauth/organizations/:orgUUID/skills/list-skills?include_wiggle_skills=true";
}
var p = 3e4, Jei = 3e5, y = import_chunk_6mfepmbb.rge, k = 16777216, m = "&wrapped_skills_as_plugins=true";
async function Crr(t = {}) {
  let r = await u(t);
  if (!r.success && (0, import_chunk_r9ecxfn9.$Se)(r)) return u(t);
  return r;
}
async function u(t) {
  try {
    let r = `${c((0, import_chunk_3t7ve0wy.fh)())}${t.convertedSkillsAsPlugins === true ? m : ""}`, s = t.relay ? { ok: true, status: 200, data: t.relay.listing } : await import_chunk_865at33z.zt.get(r, { auth: "teleport-org", proxyOptionsFor: import_chunk_k4bqn7hc.xA, isBackground: t.isBackground, timeout: p, maxContentLength: k, credentials: t.credentials, earlyAnswer: t.earlyAnswer });
    if (!s.ok || !Array.isArray(s.data?.skills)) return (0, import_chunk_r9ecxfn9.ccs)("skills", s);
    let o = s.data.skills.filter(import_chunk_58apc8rx.tol), e = t.withoutAnthropicsOwn, n = o.filter((l) => e === void 0 || (0, import_chunk_58apc8rx.xco)(l) !== "anthropic" || e !== true && !e.has(l.name)), a = n.map(import_chunk_58apc8rx.eol);
    try {
      (0, import_chunk_58apc8rx.nol)([...n, ...o], s.data.skills);
    } catch (l) {
      (0, import_chunk_42tcgre6.q)("warn", "skills_sync_ownerships_not_recorded"), (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(l));
    }
    try {
      (0, import_chunk_a9nnd83v.qil)(o);
    } catch (l) {
      (0, import_chunk_42tcgre6.q)("warn", "skills_sync_host_mount_kinds_not_recorded"), (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(l));
    }
    return { success: true, skills: a };
  } catch (r) {
    return (0, import_chunk_r9ecxfn9.ucs)(r);
  }
}
function _(t, r) {
  let s = (0, import_chunk_3t7ve0wy.fh)(), o = [];
  if (s) o.push(`entrypoint=${encodeURIComponent(s)}`);
  if (r) o.push(`version=${encodeURIComponent(r)}`);
  let e = o.length > 0 ? `?${o.join("&")}` : "";
  return `/api/oauth/organizations/:orgUUID/skills/${encodeURIComponent(t)}/download${e}`;
}
async function xNa(t, r, s, o = {}) {
  if (o.relay) {
    let n = await o.relay.download({ id: t, version: s }, r);
    if (!n.ok) (0, import_chunk_42tcgre6.q)("warn", "skills_sync_download_not_ok", { reason: n.reason });
    return n.ok;
  }
  let e;
  try {
    let n = await import_chunk_865at33z.zt.get(_(t, s), { auth: "teleport-org", proxyOptionsFor: import_chunk_k4bqn7hc.xA, isBackground: o.isBackground, timeout: Jei, responseType: "arraybuffer", maxContentLength: y, credentials: o.credentials });
    if (!n.ok || !n.data) return (0, import_chunk_42tcgre6.q)("warn", "skills_sync_download_not_ok", { reason: n.ok ? "empty_body" : n.reason }), false;
    if (e = Buffer.from(n.data), !(0, import_chunk_a9nnd83v.SNn)(e)) return (0, import_chunk_42tcgre6.q)("warn", "skills_sync_download_not_zip", { serverError: (0, import_chunk_r9ecxfn9.wco)(e), bodyLen: e.length }), false;
  } catch (n) {
    let { kind: a } = (0, import_chunk_jv7av99m.$i)(n);
    return (0, import_chunk_42tcgre6.q)("warn", "skills_sync_download_exception", { kind: a }), false;
  }
  return await (0, import_promises.writeFile)(r, e), true;
}
