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
var chunk_xvhbk5et_exports = {};
__export(chunk_xvhbk5et_exports, {
  UVe: () => UVe,
  aga: () => aga,
  d$o: () => d$o,
  dga: () => dga,
  eBr: () => eBr,
  iga: () => iga,
  l$o: () => l$o,
  lga: () => lga
});
module.exports = __toCommonJS(chunk_xvhbk5et_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_paa8n07f = require("/$bunfs/root/chunk-paa8n07f.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
function iga(e) {
  let n = e.manifest.mcpServers, r = (typeof n === "string" ? [n] : Array.isArray(n) ? n : []).filter((a) => typeof a === "string" && (0, import_chunk_yg9g0473.B6)(a)), s = r.filter((a) => (0, import_chunk_yg9g0473.Imr)(a));
  return { local: s, remoteCount: r.length - s.length };
}
async function aga(e, n, r) {
  let s = await Promise.all(n.map(async (o) => {
    if (await (0, import_chunk_bzyb60p0.MQt)(e, o, "mcp-servers")) return { spec: o, result: void 0 };
    try {
      let i = await (0, import_chunk_yg9g0473.Qot)(o, e.path, e.repository, void 0, void 0, true, r);
      return { spec: o, result: i };
    } catch (i) {
      return (0, import_chunk_w578pjby.t)(`post-install bundle read failed for ${o}: ${(0, import_chunk_jv7av99m.d)(i)}`, { level: "warn" }), { spec: o, result: void 0 };
    }
  })), a = /* @__PURE__ */ new Map(), l = [];
  for (let { spec: o, result: i } of s) if (!i) l.push(o);
  else if ("status" in i) a.set(i.manifest.name, { serverName: i.manifest.name, schema: i.configSchema, existingConfig: i.existingConfig });
  return { bundles: [...a.values()], unreadable: l };
}
async function eBr(e, n) {
  let r = (0, import_chunk_yg9g0473.Imr)(n) ? await (0, import_chunk_bzyb60p0.MQt)(e, n, "mcp-servers") : void 0;
  return r && `${(0, import_chunk_mgntjepj.mb)(r)}. This bundle can't be configured.${r.reason === import_chunk_paa8n07f.SX ? "" : " If its path leads outside the plugin, the plugin's author needs to change it."}`;
}
function l$o(e) {
  let n = e.indexOf("=");
  if (n <= 0) throw new import_chunk_jv7av99m.A(`--config expects KEY=VALUE, got "${e}". Use --config key=value (repeatable).`, "--config pair has no key");
  return { key: e.slice(0, n), raw: e.slice(n + 1) };
}
function lga(e, n, r, s) {
  let a = [], l = /* @__PURE__ */ new Map();
  for (let o of e) {
    let { key: i, raw: g } = l$o(o);
    if (n && Object.hasOwn(n, i)) {
      a.push(o);
      continue;
    }
    let m = r.flatMap(({ serverName: u, schema: p }) => {
      let c = [], h = `${u}.`;
      if (i.startsWith(h) && Object.hasOwn(p, i.slice(h.length))) c.push({ serverName: u, field: i.slice(h.length), bare: false });
      if (Object.hasOwn(p, i)) c.push({ serverName: u, field: i, bare: true });
      return c;
    }), [f, ...b] = m;
    if (f && b.length === 0) {
      if (f.bare && s.unreadable.length + s.remoteCount > 0) throw new import_chunk_jv7av99m.A(`--config key "${i}" must name its server, because a bundled MCP server whose keys are unknown may declare it too; use ${(0, import_chunk_tp3c5q2s.Ft)(`${f.serverName}.${f.field}`)}.` + d$o(s), "--config bare key with an unread bundled server");
      let u = l.get(f.serverName) ?? [];
      u.push(`${f.field}=${g}`), l.set(f.serverName, u);
      continue;
    }
    if (f) throw new import_chunk_jv7av99m.A(`--config key "${i}" is declared by more than one bundled MCP server; use ${m.map((u) => (0, import_chunk_tp3c5q2s.Ft)(`${u.serverName}.${u.field}`)).join(" or ")}.`, "--config key is ambiguous between bundled servers");
    let y = [...Object.keys(n ?? {}), ...r.flatMap(({ serverName: u, schema: p }) => Object.keys(p).map((c) => (0, import_chunk_tp3c5q2s.Ft)(`${u}.${c}`)))];
    throw new import_chunk_jv7av99m.A(`--config key "${i}" isn't declared in this plugin's userConfig` + (r.length > 0 ? " or by its bundled MCP servers." : ".") + (y.length > 0 ? ` Known keys: ${y.join(", ")}.` : "") + d$o(s), "--config key is not declared");
  }
  return { pluginPairs: a, bundlePairs: l };
}
function d$o({ unreadable: e, remoteCount: n }) {
  let r = [];
  if (e.length > 0) r.push(`the bundled ${e.map((a) => (0, import_chunk_tp3c5q2s.Qe)(a)).join(", ")} could not be read, so its keys are unknown \u2014 re-run with --debug-file <path> to log why`);
  if (n > 0) r.push(`${n} bundled ${(0, import_chunk_7cfjrnwy.O)(n, "server is", "servers are")} fetched from a URL at session start and can only be configured in Claude Code (/plugin \u2192 Installed \u2192 Configure)`);
  let s = r.join("; ");
  return s ? ` (${s[0].toUpperCase()}${s.slice(1)}.)` : "";
}
function dga(e, n) {
  let r = (0, import_chunk_yg9g0473.Wfe)(e.existingConfig, e.schema);
  if (r.valid) return;
  let s = (0, import_chunk_tp3c5q2s.Ft)(e.serverName), a = Object.entries(e.schema).filter(([o, i]) => {
    let g = (0, import_chunk_xcgcdx61.ko)(e.existingConfig, o);
    return i.required === true && (g === void 0 || g === "");
  }).map(([o]) => (0, import_chunk_tp3c5q2s.Ft)(`${s}.${o}`)), l = a.length > 0 ? `set ${a.join(", ")} with --config KEY=VALUE` : `${r.errors.map((o) => (0, import_chunk_tp3c5q2s.Ft)(o)).join("; ")} \u2014 fix it with --config ${s}.KEY=VALUE`;
  return `MCP server "${(0, import_chunk_tp3c5q2s.Qe)(e.serverName)}" needs configuration before it can start: ${l}, or in Claude Code run /plugin, select "${(0, import_chunk_tp3c5q2s.Qe)(n)}" in the Installed tab, and choose Configure.`;
}
async function UVe(e, n, r) {
  let s = (0, import_chunk_xcgcdx61.lF)(e), { name: a, marketplace: l } = (0, import_chunk_xcgcdx61.uf)(s);
  if (l === import_chunk_xcgcdx61.qn && (0, import_chunk_54j6k3fn.jO)().nameRegistration === void 0) await (0, import_chunk_bzyb60p0.Bd)(r);
  let o = (0, import_chunk_54j6k3fn.Vae)(a, l, n), i = (0, import_chunk_xcgcdx61.t_n)(l);
  if (!i && l !== import_chunk_xcgcdx61.Ds && !(0, import_chunk_xcgcdx61.KKt)(a, l)) return o;
  let g = false;
  try {
    g = await C(s, a, l, r);
  } catch (m) {
    (0, import_chunk_w578pjby.t)(`Plugin telemetry: could not read the marketplace catalog to confirm "${e}" exists (${(0, import_chunk_jv7av99m.d)(m)}); logging its name as third-party`);
  }
  return { ...o, ...i && l !== void 0 && { marketplace_name_redacted: (0, import_chunk_54j6k3fn.HOi)(l) }, ...!g && { plugin_name_redacted: (0, import_chunk_78g0060s.S)(import_chunk_865at33z.bM) } };
}
async function C(e, n, r, s) {
  if ((0, import_chunk_xcgcdx61.KKt)(n, r)) return true;
  if (r === import_chunk_xcgcdx61.Ds) return (0, import_chunk_vfyns8ja.iI)(n) !== void 0;
  return await (0, import_chunk_bzyb60p0.vx)(e, s) !== null;
}
