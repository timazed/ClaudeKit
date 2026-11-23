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
var chunk_f2dee02n_exports = {};
__export(chunk_f2dee02n_exports, {
  Ql: () => Ql
});
module.exports = __toCommonJS(chunk_f2dee02n_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
class d {
  captured = r();
  capturedOwn = n();
  carrier = s();
  ownSessionIds = o();
  selfHostedRunnerChild = t();
  toolsGrantedRunnerChild = i();
  get atStartup() {
    return this.captured;
  }
  get isSessionIngressUrlSet() {
    return this.capturedOwn;
  }
  get ownCcrSessionIds() {
    return this.ownSessionIds;
  }
  get isSelfHostedRunnerChild() {
    return this.selfHostedRunnerChild;
  }
  get isToolsGrantedRunnerChild() {
    return this.toolsGrantedRunnerChild;
  }
  get bridgeCarrier() {
    return this.carrier;
  }
  get isBridgeCarrierChild() {
    return this.carrier === "child";
  }
  reset() {
    this.captured = r(), this.capturedOwn = n(), this.carrier = s(), this.ownSessionIds = o(), this.selfHostedRunnerChild = t(), this.toolsGrantedRunnerChild = i();
  }
}
var Ql = new d();
function r() {
  return process.env.SESSION_INGRESS_URL ?? process.env.ANTHROPIC_BASE_URL;
}
function n() {
  return process.env.SESSION_INGRESS_URL !== void 0;
}
function s() {
  let e = process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
  if (e === "1" || !e) return e ? "child" : void 0;
  if (process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && (0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_REMOTE)) {
    delete process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
    return;
  }
  return "descendant";
}
function o() {
  return [process.env.CLAUDE_CODE_REMOTE_SESSION_ID, process.env.CLAUDE_CODE_SESSION_ID].filter((e) => e !== void 0 && (0, import_chunk_t39bs2jr.k3)(e));
}
function t() {
  return (0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_REMOTE) && process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && process.env.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted";
}
function i() {
  return false;
}
