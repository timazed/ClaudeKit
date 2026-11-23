const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_xb56zerw_exports = {};
__export(chunk_xb56zerw_exports, {
  L_e: () => L_e
});
module.exports = __toCommonJS(chunk_xb56zerw_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
function L_e({ isEmployeeOrganization: u = true, tenantEntrypoint: r } = {}) {
  let t = (0, import_chunk_865at33z.to)();
  if (t.builtinPluginsInitialized) return;
  t.builtinPluginsInitialized = true;
  let e = r ?? import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT, o = r !== void 0 || (0, import_chunk_3t7ve0wy.H4n)(e), n = r ?? (0, import_chunk_3t7ve0wy.Li)();
  if ((0, import_chunk_vfyns8ja.vxe)("cc-plugin-sec-default", () => require("/$bunfs/root/chunk-1ry577bp.js")), (0, import_chunk_vfyns8ja.vxe)("cc-plugin-agents-md", () => require("/$bunfs/root/chunk-rbdpcbwj.js")), (0, import_chunk_vfyns8ja.vxe)("cc-plugin-telemetry", () => require("/$bunfs/root/chunk-27h8thr7.js")), (0, import_chunk_vfyns8ja.vxe)("cc-plugin-privacy", () => require("/$bunfs/root/chunk-bbrpa310.js")), (0, import_chunk_vfyns8ja.vxe)("cc-plugin-hipaa-default", () => require("/$bunfs/root/chunk-xddhqcfj.js")), e !== "local-agent") {
    if ((0, import_chunk_vfyns8ja.vxe)("cc-plugin-plugin-authoring", () => require("/$bunfs/root/chunk-agjyt8t0.js")), (0, import_chunk_vfyns8ja.vxe)("cc-plugin-mods-guide", () => require("/$bunfs/root/chunk-8hwc60kg.js")), !o) (0, import_chunk_vfyns8ja.vxe)("cc-plugin-tips", () => require("/$bunfs/root/chunk-hsa1vcdc.js")), (0, import_chunk_vfyns8ja.vxe)("cc-plugin-mermaid", () => require("/$bunfs/root/chunk-8hmhqvz1.js"));
  }
  let i = e !== "local-agent" && !o;
  if (i || n === "remote") (0, import_chunk_vfyns8ja.vxe)("cc-plugin-responsive-mode", () => require("/$bunfs/root/chunk-m95s46bf.js"));
  if (i) (0, import_chunk_vfyns8ja.vxe)("cc-plugin-diff", () => require("/$bunfs/root/chunk-pkha3h9k.js"));
  if (e !== "local-agent") (0, import_chunk_vfyns8ja.vxe)("cc-plugin-you-should-know", () => require("/$bunfs/root/chunk-d22spj7k.js"));
  if (i || n === "remote_cowork" || (0, import_chunk_bzyb60p0.Q0t)() || import_chunk_f2dee02n.Ql.isSelfHostedRunnerChild && import_chunk_3t7ve0wy.ayn.has(n ?? "")) (0, import_chunk_vfyns8ja.vxe)("cc-plugin-easel", () => require("/$bunfs/root/chunk-ndn128za.js"));
  if (i) (0, import_chunk_vfyns8ja.vxe)("claude-platform", () => require("/$bunfs/root/chunk-txxzbf6t.js"));
}
