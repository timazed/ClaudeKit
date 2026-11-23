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
var chunk_1wqrkb4a_exports = {};
__export(chunk_1wqrkb4a_exports, {
  LFa: () => LFa,
  Qti: () => Qti
});
module.exports = __toCommonJS(chunk_1wqrkb4a_exports);
var import_chunk_dvkg7v5x = require("/$bunfs/root/chunk-dvkg7v5x.js");
var a = [".local", ".internal", ".intranet", ".lan", ".corp", ".home", ".home.arpa", ".localdomain", ".private", ".ts.net"];
function Qti(s) {
  if (s.type === void 0 || s.type === "stdio") return "stdio";
  switch (s.type) {
    case "sdk":
    case "sse-ide":
    case "ws-ide":
    case "claudeai-proxy":
      return "managed";
    case "sse":
    case "http":
    case "ws":
      return r(s.url);
  }
}
function r(s) {
  if (/\$\{[^}]*\}/.test(s) || /^[a-z][a-z0-9+.-]*:\/\/\//i.test(s)) return "other";
  let e;
  try {
    e = new URL(s).hostname.toLowerCase().replace(/^\[|\]$/g, "").replace(/\.$/, "");
  } catch {
    return "other";
  }
  if (!e) return "other";
  e = (0, import_chunk_dvkg7v5x.i0r)(e) ?? e;
  let t = (0, import_chunk_dvkg7v5x.REe)(e);
  if (e === "localhost" || e === "localhost.localdomain" || e === "0.0.0.0" || e.endsWith(".localhost") || t === "loopback" || t === "unspecified") return "localhost";
  if (!e.includes(".") && !e.includes(":") || t !== void 0 && t !== "this_network" || a.some((o) => e.endsWith(o))) return "private_network";
  return "public";
}
function LFa(s) {
  let e = /* @__PURE__ */ new Set();
  for (let t of s) e.add(Qti(t));
  return { has_mcp_stdio: e.has("stdio"), has_mcp_managed: e.has("managed"), has_mcp_localhost: e.has("localhost"), has_mcp_private_network: e.has("private_network"), has_mcp_public: e.has("public"), has_mcp_other: e.has("other") };
}
