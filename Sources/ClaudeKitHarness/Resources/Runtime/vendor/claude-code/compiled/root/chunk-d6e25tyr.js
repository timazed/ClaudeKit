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
var chunk_d6e25tyr_exports = {};
__export(chunk_d6e25tyr_exports, {
  Ght: () => Ght,
  ker: () => ker,
  m7t: () => m7t
});
module.exports = __toCommonJS(chunk_d6e25tyr_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_6d4w1614 = require("/$bunfs/root/chunk-6d4w1614.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function m7t(e) {
  let o = e[0];
  if (!o) return null;
  let t = e.length;
  if (e.every((r) => r.type === o.type)) switch (o.type) {
    case "local_bash": {
      let r = (0, import_chunk_4smdap7r.U)(e, import_chunk_z6hn62tj.lre), n = t - r, a = [];
      if (n > 0) a.push(n === 1 ? "1 shell" : `${n} shells`);
      if (r > 0) a.push(r === 1 ? "1 monitor" : `${r} monitors`);
      return a.join(", ");
    }
    case "in_process_teammate": {
      let r = new Set(e.map((n) => n.type === "in_process_teammate" ? n.identity.teamName : "")).size;
      return r === 1 ? "1 team" : `${r} teams`;
    }
    case "local_agent":
      return t === 1 ? "1 background agent" : `${t} background agents`;
    case "remote_agent": {
      if (t === 1 && o.isUltraplan) switch (o.ultraplanPhase) {
        case "plan_ready":
          return `${import_chunk_xcgcdx61.o$} ultraplan ready`;
        case "needs_input":
          return `${import_chunk_xcgcdx61.tP} ultraplan needs your input`;
        default:
          return `${import_chunk_xcgcdx61.tP} ultraplan`;
      }
      if (e.every((r) => r.type === "remote_agent" && r.remoteTaskType === "remote-workflow")) return t === 1 ? `${import_chunk_xcgcdx61.tP} 1 cloud dynamic workflow` : `${import_chunk_xcgcdx61.tP} ${t} cloud dynamic workflows`;
      return t === 1 ? `${import_chunk_xcgcdx61.tP} 1 cloud session` : `${import_chunk_xcgcdx61.tP} ${t} cloud sessions`;
    }
    case "local_workflow":
      return s(t);
    case "monitor_mcp":
    case "monitor_ws": {
      if (e.every(import_chunk_6d4w1614.G_e)) return t === 1 ? "1 Artifact comment monitor" : `${t} Artifact comment monitors`;
      return t === 1 ? "1 monitor" : `${t} monitors`;
    }
    case "mcp_task":
      return t === 1 ? "1 MCP task" : `${t} MCP tasks`;
    case "dream":
      return "dreaming";
    case "auto_mode_scan":
      return "auto-mode scan";
    case "post_turn_memory":
      return "saving memories";
    default:
  }
  return i(t);
}
function Ght(e, o, t = 0) {
  if (o.length + t === 0) return m7t(e);
  let r = e.length + o.length + t;
  if (r === t) return `${r} scheduled ${(0, import_chunk_7cfjrnwy.O)(r, "task")}`;
  return t === 0 && o.every((n) => n.taskType === "local_workflow") && e.every((n) => n.type === "local_workflow") ? s(r) : i(r);
}
function s(e) {
  return e === 1 ? "1 background dynamic workflow" : `${e} background dynamic workflows`;
}
function i(e) {
  return `${e} background ${e === 1 ? "task" : "tasks"}`;
}
function ker(e) {
  if (e.length !== 1) return false;
  let o = e[0];
  return o.type === "remote_agent" && o.isUltraplan === true && o.ultraplanPhase !== void 0;
}
