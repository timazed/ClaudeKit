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
var chunk_phwepfsh_exports = {};
__export(chunk_phwepfsh_exports, {
  X3t: () => X3t
});
module.exports = __toCommonJS(chunk_phwepfsh_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_7625rswd = require("/$bunfs/root/chunk-7625rswd.js");
var import_chunk_44g93ygc = require("/$bunfs/root/chunk-44g93ygc.js");
var import_chunk_xhqwsnqh = require("/$bunfs/root/chunk-xhqwsnqh.js");
var g = [{ isOn: () => (0, import_chunk_0pb268nk.Lr)("mcpAutoDiscovered"), message: "This session runs in safe mode, which connects no plugin servers." }, { isOn: () => (0, import_chunk_2gtmjt3y.Xn)(), message: "This session runs with --bare, which connects no plugin servers." }, { isOn: () => (0, import_chunk_f9x2f6cx.rE)(), message: "This session runs with --strict-mcp-config, which connects no plugin servers." }, { isOn: () => (0, import_chunk_f9x2f6cx.Hn)(), message: "This session is a remote client, which connects no plugin servers." }, { isOn: () => (0, import_chunk_bzyb60p0.yh)(), message: "Your organization's managed MCP config has exclusive control over MCP servers in this session." }];
async function X3t(e) {
  let { enabled: n } = await (0, import_chunk_xhqwsnqh.ZG)(e.load ?? await (0, import_chunk_bzyb60p0.pi)(e.storageV5, e.credentials)), r = n.find((s) => s.source === e.pluginId);
  if (r === void 0) return u(e.key);
  return f(r, e);
}
async function f(e, n) {
  let r = (0, import_chunk_xcgcdx61.QRt)(e.name, e.source, n.key), s = [], i = (await m(e, n, s))?.[r];
  if (i === void 0) return M(n.key, r, s);
  if (i.configError !== void 0) return o("failed", `The MCP server "${r}" cannot be resolved: ${i.configError}`);
  let c = (0, import_chunk_xcgcdx61.PK)(e) ? (0, import_chunk_bzyb60p0.$Te)(r) : "approved";
  if (c !== "approved") return o("unapproved", P(r, c));
  if ((0, import_chunk_bzyb60p0.gi)(r)) return o("disabled", `The MCP server "${r}" is turned off; turn it on in /mcp.`);
  let t = S();
  if (t !== void 0) return o("policy", t);
  if (await (0, import_chunk_bzyb60p0.hA)(), (0, import_chunk_7625rswd.hU)(i)) try {
    await (0, import_chunk_44g93ygc.t4)((0, import_chunk_sjqze7qg.uae)(i, n.credentials), { serverName: r, context: import_chunk_7625rswd.Rbe });
  } catch (p) {
    return o("failed", (0, import_chunk_jv7av99m.d)(p));
  }
  if ((0, import_chunk_bzyb60p0.OBe)({ [r]: i }).blocked.length > 0) return o("policy", `Your organization's MCP policy does not allow "${r}".`);
  let l = await v(r, i, n);
  return l === void 0 ? y(r, i) : h(l);
}
async function m(e, n, r) {
  let s = e.isBuiltin ? (0, import_chunk_vfyns8ja.iI)(e.name)?.mcpServers : void 0;
  return e.isBuiltin && s === void 0 ? void 0 : (0, import_chunk_bzyb60p0.LQt)(e.isBuiltin ? { ...e, mcpServers: s } : e, r, n.storageV5, n.credentials);
}
async function v(e, n, r) {
  let { warnings: s } = await (0, import_chunk_bzyb60p0.Ik)((0, import_chunk_xcgcdx61.mi)(r.dynamicServers, (t, a) => a === e), { storageV5: r.storageV5, credentials: r.credentials, pluginLoadResult: r.load }), i = s.flatMap((t) => t.type === "mcp-server-suppressed-duplicate" && t.source === e ? [t.duplicateOf] : [])[0];
  return i !== void 0 && Object.hasOwn(r.dynamicServers, i) && (0, import_chunk_bzyb60p0.RP)(r.dynamicServers[i], { includeEnv: false }) !== (0, import_chunk_bzyb60p0.RP)(n, { includeEnv: false }) ? void 0 : i;
}
function S() {
  return g.find((e) => e.isOn())?.message;
}
function M(e, n, r) {
  let s = r.find((i) => "source" in i && i.source === e);
  if (s === void 0) return u(e);
  return o("failed", `The MCP server "${n}" cannot be resolved: ${(0, import_chunk_mgntjepj.mb)(s)}`);
}
function P(e, n) {
  return n === "rejected" ? `The MCP server "${e}" comes with this repository and you rejected it; \`claude mcp reset-project-choices\` asks again.` : `The MCP server "${e}" comes with this repository and waits for your approval in /mcp.`;
}
function u(e) {
  return o("unlisted", `Neither this plugin's manifest nor /mcp lists an MCP server named "${e}".`);
}
function o(e, n) {
  return { isListed: false, refused: e, message: n };
}
function y(e, n) {
  return { isListed: true, isTwin: false, name: e, config: n };
}
function h(e) {
  return { isListed: true, isTwin: true, name: e };
}
