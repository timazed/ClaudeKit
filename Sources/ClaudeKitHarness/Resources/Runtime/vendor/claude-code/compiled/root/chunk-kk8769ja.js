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
var chunk_kk8769ja_exports = {};
__export(chunk_kk8769ja_exports, {
  McpbManifestSchema: () => k,
  getMcpConfigForManifest: () => R
});
module.exports = __toCommonJS(chunk_kk8769ja_exports);
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var m = (0, import_chunk_rnm2beqc.Xp)({ command: (0, import_chunk_rnm2beqc.we)(), args: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)()).optional(), env: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)(), (0, import_chunk_rnm2beqc.we)()).optional() }), b = (0, import_chunk_rnm2beqc.Xp)({ name: (0, import_chunk_rnm2beqc.we)(), email: (0, import_chunk_rnm2beqc.we)().email().optional(), url: (0, import_chunk_rnm2beqc.we)().url().optional() }), y = (0, import_chunk_rnm2beqc.Xp)({ type: (0, import_chunk_rnm2beqc.we)(), url: (0, import_chunk_rnm2beqc.we)().url() }), h = m.partial(), _ = m.extend({ platform_overrides: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)(), h).optional() }), x = (0, import_chunk_rnm2beqc.Xp)({ type: (0, import_chunk_rnm2beqc.df)(["python", "node", "binary"]), entry_point: (0, import_chunk_rnm2beqc.we)(), mcp_config: _ }), M = (0, import_chunk_rnm2beqc.Xp)({ claude_desktop: (0, import_chunk_rnm2beqc.we)().optional(), platforms: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.df)(["darwin", "win32", "linux"])).optional(), runtimes: (0, import_chunk_rnm2beqc.Xp)({ python: (0, import_chunk_rnm2beqc.we)().optional(), node: (0, import_chunk_rnm2beqc.we)().optional() }).optional() }).passthrough(), O = (0, import_chunk_rnm2beqc.Xp)({ name: (0, import_chunk_rnm2beqc.we)(), description: (0, import_chunk_rnm2beqc.we)().optional() }), S = (0, import_chunk_rnm2beqc.Xp)({ name: (0, import_chunk_rnm2beqc.we)(), description: (0, import_chunk_rnm2beqc.we)().optional(), arguments: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)()).optional(), text: (0, import_chunk_rnm2beqc.we)() }), v = (0, import_chunk_rnm2beqc.Xp)({ type: (0, import_chunk_rnm2beqc.df)(["string", "number", "boolean", "directory", "file"]), title: (0, import_chunk_rnm2beqc.we)(), description: (0, import_chunk_rnm2beqc.we)(), required: (0, import_chunk_rnm2beqc.Ci)().optional(), default: (0, import_chunk_rnm2beqc.fB)([(0, import_chunk_rnm2beqc.we)(), (0, import_chunk_rnm2beqc.nr)(), (0, import_chunk_rnm2beqc.Ci)(), (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)())]).optional(), multiple: (0, import_chunk_rnm2beqc.Ci)().optional(), sensitive: (0, import_chunk_rnm2beqc.Ci)().optional(), min: (0, import_chunk_rnm2beqc.nr)().optional(), max: (0, import_chunk_rnm2beqc.nr)().optional() }), A = (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)(), (0, import_chunk_rnm2beqc.fB)([(0, import_chunk_rnm2beqc.we)(), (0, import_chunk_rnm2beqc.nr)(), (0, import_chunk_rnm2beqc.Ci)(), (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)())])), k = (0, import_chunk_rnm2beqc.Xp)({ $schema: (0, import_chunk_rnm2beqc.we)().optional(), dxt_version: (0, import_chunk_rnm2beqc.we)().optional().describe("@deprecated Use manifest_version instead"), manifest_version: (0, import_chunk_rnm2beqc.we)().optional(), name: (0, import_chunk_rnm2beqc.we)(), display_name: (0, import_chunk_rnm2beqc.we)().optional(), version: (0, import_chunk_rnm2beqc.we)(), description: (0, import_chunk_rnm2beqc.we)(), long_description: (0, import_chunk_rnm2beqc.we)().optional(), author: b, repository: y.optional(), homepage: (0, import_chunk_rnm2beqc.we)().url().optional(), documentation: (0, import_chunk_rnm2beqc.we)().url().optional(), support: (0, import_chunk_rnm2beqc.we)().url().optional(), icon: (0, import_chunk_rnm2beqc.we)().optional(), screenshots: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)()).optional(), server: x, tools: (0, import_chunk_rnm2beqc._o)(O).optional(), tools_generated: (0, import_chunk_rnm2beqc.Ci)().optional(), prompts: (0, import_chunk_rnm2beqc._o)(S).optional(), prompts_generated: (0, import_chunk_rnm2beqc.Ci)().optional(), keywords: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)()).optional(), license: (0, import_chunk_rnm2beqc.we)().optional(), privacy_policies: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.we)()).optional(), compatibility: M.optional(), user_config: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)(), v).optional() }).refine((t) => !!(t.dxt_version || t.manifest_version), { message: "Either 'dxt_version' (deprecated) or 'manifest_version' must be provided" }), w = (0, import_chunk_rnm2beqc.Xp)({ status: (0, import_chunk_rnm2beqc.df)(["signed", "unsigned", "self-signed"]), publisher: (0, import_chunk_rnm2beqc.we)().optional(), issuer: (0, import_chunk_rnm2beqc.we)().optional(), valid_from: (0, import_chunk_rnm2beqc.we)().optional(), valid_to: (0, import_chunk_rnm2beqc.we)().optional(), fingerprint: (0, import_chunk_rnm2beqc.we)().optional() });
function z(t, i) {
  if (typeof t === "string") {
    let n = t;
    for (let [e, r] of Object.entries(i)) {
      let o = new RegExp(`\\$\\{${e}\\}`, "g");
      if (n.match(o)) if (Array.isArray(r)) console.warn(`Cannot replace ${e} with array value in string context: "${t}"`, { key: e, replacement: r });
      else n = n.replace(o, r);
    }
    return n;
  } else if (Array.isArray(t)) {
    let n = [];
    for (let e of t) if (typeof e === "string" && e.match(/^\$\{user_config\.[^}]+\}$/)) {
      let r = e.match(/^\$\{([^}]+)\}$/)?.[1];
      if (r && i[r]) {
        let o = i[r];
        if (Array.isArray(o)) n.push(...o);
        else n.push(o);
      } else n.push(e);
    } else n.push(z(e, i));
    return n;
  } else if (t && typeof t === "object") {
    let n = {};
    for (let [e, r] of Object.entries(t)) n[e] = z(r, i);
    return n;
  }
  return t;
}
async function R(t) {
  let { manifest: i, extensionPath: n, systemDirs: e, userConfig: r, pathSeparator: o, logger: d } = t, c = i.server?.mcp_config;
  if (!c) return;
  let s = { ...c };
  if (c.platform_overrides) {
    if ("darwin" in c.platform_overrides) {
      let p = c.platform_overrides.darwin;
      s.command = p.command || s.command, s.args = p.args || s.args, s.env = p.env || s.env;
    }
  }
  if (j({ manifest: i, userConfig: r })) {
    d?.warn(`Extension ${i.name} has missing required configuration, skipping MCP config`);
    return;
  }
  let l = { __dirname: n, pathSeparator: o, "/": o, ...e }, f = {};
  if (i.user_config) {
    for (let [p, a] of Object.entries(i.user_config)) if (a.default !== void 0) f[p] = a.default;
  }
  if (r) Object.assign(f, r);
  for (let [p, a] of Object.entries(f)) {
    let g = `user_config.${p}`;
    if (Array.isArray(a)) l[g] = a.map(String);
    else if (typeof a === "boolean") l[g] = a ? "true" : "false";
    else l[g] = String(a);
  }
  return s = z(s, l), s;
}
function u(t) {
  return t === void 0 || t === null || t === "";
}
function j({ manifest: t, userConfig: i }) {
  if (!t.user_config) return false;
  let n = i || {};
  for (let [e, r] of Object.entries(t.user_config)) if (r.required) {
    let o = n[e];
    if (u(o) || Array.isArray(o) && (o.length === 0 || o.some(u))) return true;
  }
  return false;
}
