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
var chunk_ejjd7ytj_exports = {};
__export(chunk_ejjd7ytj_exports, {
  S$s: () => S$s,
  b1r: () => b1r
});
module.exports = __toCommonJS(chunk_ejjd7ytj_exports);
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
function S$s(t, n) {
  let e = (0, import_chunk_kx2fp6pc.Yn)(t), r = n.map(import_chunk_kx2fp6pc.Yn).sort(), s = (0, import_chunk_xcgcdx61.IFe)(e, r.map((d) => ({ name: d })), { maxEditDistance: 2 });
  if (s) return `No MCP server named "${e}". Did you mean "${s}"? Run \`claude mcp list\` to see all.`;
  if (r.length === 0) return `No MCP server named "${e}". Run \`claude mcp add\` to add one.`;
  let o = 8, a = r.slice(0, o).join(", "), i = r.length > o ? ` (and ${r.length - o} more \u2014 run \`claude mcp list\` to see all)` : "";
  return `No MCP server named "${e}". Configured servers: ${a}${i}`;
}
function b1r(t, n, e) {
  if (e && n.length === 0) return `No MCP server named "${(0, import_chunk_kx2fp6pc.Yn)(t)}". ${".mcp.json servers are awaiting approval \u2014 run `claude` in this directory to review them."}`;
  return S$s(t, n) + (e ? ` (${".mcp.json servers are awaiting approval \u2014 run `claude` in this directory to review them."})` : "");
}
