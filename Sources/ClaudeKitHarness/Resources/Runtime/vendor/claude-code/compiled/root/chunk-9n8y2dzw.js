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
var chunk_9n8y2dzw_exports = {};
__export(chunk_9n8y2dzw_exports, {
  aYs: () => aYs
});
module.exports = __toCommonJS(chunk_9n8y2dzw_exports);
class r {
  peer;
  closed = false;
  onclose;
  onerror;
  onmessage;
  _setPeer(e) {
    this.peer = e;
  }
  async start() {
  }
  async send(e) {
    if (this.closed) throw Error("Transport is closed");
    queueMicrotask(() => {
      this.peer?.onmessage?.(e);
    });
  }
  async close() {
    if (this.closed) return;
    if (this.closed = true, this.onclose?.(), this.peer && !this.peer.closed) this.peer.closed = true, this.peer.onclose?.();
  }
}
function aYs() {
  let e = new r(), s = new r();
  return e._setPeer(s), s._setPeer(e), [e, s];
}
