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
var chunk_8ewjdpbn_exports = {};
__export(chunk_8ewjdpbn_exports, {
  ATl: () => ATl,
  Kp: () => Kp,
  TEs: () => TEs
});
module.exports = __toCommonJS(chunk_8ewjdpbn_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_async_hooks = require("async_hooks");
class TEs {
  #e = false;
  #s = false;
  #r = false;
  #a = false;
  #i = false;
  #d = false;
  #u = false;
  #l = false;
  #g = false;
  #n;
  #c = false;
  #b = false;
  #h;
  #f = () => true;
  #p = 0;
  #m = false;
  #t;
  #o;
  get backgroundTasksDisabled() {
    return this.#e;
  }
  get backgroundAgentLaunchDisabled() {
    return this.#s;
  }
  get remoteAgentIsolationDisabled() {
    return this.#r;
  }
  get unsandboxedCommandsDisabled() {
    return this.#a;
  }
  get backgroundDeadlineDisabled() {
    return this.#i;
  }
  get backgroundCompletionNoticeDisabled() {
    return this.#d;
  }
  get messagingBeyondOwnAgentsDisabled() {
    return this.#u;
  }
  get forkSubagentDisabled() {
    return this.#l;
  }
  get viewImagesDisabled() {
    return this.#g;
  }
  get backgroundLaunchRule() {
    return this.#n;
  }
  get backgroundLaunchByDefault() {
    return this.#c;
  }
  get foregroundAgentMovesAdmitted() {
    return this.#m;
  }
  get subagentSends() {
    return this.#o;
  }
  get stoppedByPerson() {
    return this.#t;
  }
  get backgroundShellsKeptElsewhere() {
    return this.#b;
  }
  get mcpServerMovedForMessages() {
    return this.#h;
  }
  isMovedCallResultAwaited(...e) {
    return this.#f(...e);
  }
  get backgroundWaitAfterReplyMinutes() {
    return this.#p;
  }
  setBackgroundWaitAfterReplyMinutes(e) {
    this.#p = e;
  }
  disableBackgroundTasks() {
    this.#e = true;
  }
  setBackgroundShellsKeptElsewhere(e) {
    this.#b = e;
  }
  setMcpServerMovedForMessages(e, n) {
    this.#h = e, this.#f = n;
  }
  disableBackgroundAgentLaunch() {
    this.#s = true;
  }
  disableRemoteAgentIsolation() {
    this.#r = true;
  }
  installBackgroundLaunchRule(e) {
    if (!this.#e) throw Error("A background launch rule needs background tasks disabled first");
    if (typeof e.parameterDescription !== "string") throw Error("A background launch rule needs parameterDescription to be a string");
    if (this.#n !== void 0) throw Error("A background launch rule is already installed");
    let n = e.admitsMoves === true;
    if (n && typeof e.admitMove !== "function") throw Error("A background launch rule that admits moves needs admitMove to be a function");
    let o = e.launchesByDefault === true;
    this.#n = e, this.#c = o, this.#m = n;
  }
  disableBackgroundDeadline() {
    this.#i = true;
  }
  disableBackgroundCompletionNotice() {
    this.#d = true;
  }
  disableUnsandboxedCommands() {
    this.#a = true;
  }
  disableMessagingBeyondOwnAgents() {
    this.#u = true;
  }
  disableForkSubagent() {
    this.#l = true;
  }
  disableViewImages() {
    this.#g = true;
  }
  installStoppedByPerson(e) {
    if (this.#t !== void 0) throw Error("A stoppedByPerson question is already installed");
    this.#t = e;
  }
  installSubagentSends(e) {
    if (this.#o !== void 0) throw Error("SubagentSends is already installed");
    this.#o = e;
  }
}
var r = new import_chunk_2904xtvq.j(() => new TEs());
function Kp() {
  return t.getStore() ?? r.of((0, import_chunk_f9x2f6cx.N)().host);
}
var t = new import_async_hooks.AsyncLocalStorage();
function ATl(e, n) {
  return t.run(e, n);
}
