const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_9jr493jm_exports = {};
__export(chunk_9jr493jm_exports, {
  ACa: () => ACa,
  CCa: () => CCa,
  Yqs: () => Yqs,
  o6r: () => o6r,
  s6r: () => s6r
});
module.exports = __toCommonJS(chunk_9jr493jm_exports);
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_pkzhb7kv = require("/$bunfs/root/chunk-pkzhb7kv.js");
var import_chunk_208y07t1 = require("/$bunfs/root/chunk-208y07t1.js");
var import_chunk_vfxmw1me = require("/$bunfs/root/chunk-vfxmw1me.js");
function a() {
  if (import_chunk_f2dee02n.Ql.isSelfHostedRunnerChild) return import_chunk_865at33z.yhe;
  if ((0, import_chunk_vfxmw1me.nYe)() === void 0 && !(0, import_chunk_pkzhb7kv.rd)()) return null;
  return require("/$bunfs/root/chunk-d3fwxng5.js").isArtifactsMcpLaptopEntry;
}
function s(e) {
  let t = (0, import_chunk_vfxmw1me.nYe)();
  return t !== void 0 && e(t.config) ? t : void 0;
}
function d(e) {
  let t = s(e);
  if (t === void 0 || (0, import_chunk_vfxmw1me.K0e)(t)) return false;
  return t.type === "connected" || t.type === "cached";
}
function A() {
  return require("/$bunfs/root/chunk-t24x4axy.js").artifactToolWithholdingGate() !== null;
}
var g = ["pin_artifact", "unpin_artifact", "publish_version", "list_artifacts", "list_types"];
function m(e) {
  let t = e.flatMap((n) => n.mcpInfo?.serverName === import_chunk_qdcbcsg7.ri ? [n.mcpInfo.toolName] : []);
  return !(0, import_chunk_pkzhb7kv.yZ)() || (0, import_chunk_pkzhb7kv.rd)() || t.includes(import_chunk_pkzhb7kv.ble) && t.includes(import_chunk_pkzhb7kv.Ybe);
}
function T(e) {
  return e.some((t) => t.mcpInfo?.serverName === import_chunk_qdcbcsg7.ri && !g.includes(t.mcpInfo.toolName)) && m(e);
}
function o6r(e, t = e, n = false) {
  let r = a();
  if (r === null) return [...e];
  let o = () => e.filter((i) => i.mcpInfo?.serverName !== import_chunk_qdcbcsg7.ri), c = s(r);
  if (c !== void 0 && ((0, import_chunk_vfxmw1me.K0e)(c) || A())) return o();
  let f = t.filter((i) => i.mcpInfo?.serverName === import_chunk_qdcbcsg7.ri);
  if (f.length === 0 || T(f) && m(e) || !d(r)) return [...e];
  return o();
}
function CCa(e, t) {
  if (!(0, import_chunk_pkzhb7kv.rd)()) {
    let n = a();
    if (n === null || !T(t) || !d(n)) return [...e];
    let r = (0, import_chunk_0rkwgmhx.se)();
    r.builtInArtifactHiddenForMcp = true, r.autoReact.enabledMemo = false, (0, import_chunk_cqa9hrgx.u)("artifact_mcp_swap"), (0, import_chunk_208y07t1.Y7t)(r.live), _(), require("/$bunfs/root/chunk-sbyrvcnq.js");
  }
  return y(e);
}
function ACa() {
  if (!(0, import_chunk_pkzhb7kv.rd)()) return;
  let e = a();
  if (e === null) return;
  let t = s(e);
  if (t !== void 0 && (0, import_chunk_vfxmw1me.K0e)(t)) (0, import_chunk_cqa9hrgx.l)("artifact_mcp_swap", "entry_not_served");
  else switch (t?.type) {
    case void 0:
      (0, import_chunk_cqa9hrgx.l)("artifact_mcp_swap", "entry_gone");
      break;
    case "failed":
      (0, import_chunk_cqa9hrgx.l)("artifact_mcp_swap", "entry_failed");
      break;
    case "needs-auth":
      (0, import_chunk_cqa9hrgx.l)("artifact_mcp_swap", "entry_needs_auth");
      break;
    case "connected":
    case "cached":
    case "pending":
    case "disabled":
      return;
    default:
      return;
  }
  let n = (0, import_chunk_0rkwgmhx.se)();
  n.builtInArtifactHiddenForMcp = false, n.autoReact.optIn = false, n.autoReact.wakeEnabledMemo = false, (0, import_chunk_208y07t1.Y7t)(n.live);
  for (let r of [...n.wakes.takenFrom.keys()]) Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-5qs4j5za.js"))).then((o) => o.handBackTakenOverSlug(r));
  _();
}
function _() {
  require("/$bunfs/root/chunk-qmrygjz0.js").clearCommandMemoizationCaches();
}
function s6r(e) {
  return (0, import_chunk_pkzhb7kv.rd)() ? y(e) : [...e];
}
function Yqs(e) {
  if ((0, import_chunk_sjqze7qg.oDe)(e)) return true;
  let t = require("/$bunfs/root/chunk-q36cvre2.js").APPIFACT_REPL_TOOL_NAME;
  return t !== void 0 && e.mcpInfo === void 0 && e.name === t;
}
function y(e) {
  return e.filter((t) => !Yqs(t));
}
