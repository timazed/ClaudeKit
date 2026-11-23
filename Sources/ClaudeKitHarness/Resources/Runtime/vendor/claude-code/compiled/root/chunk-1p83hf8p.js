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
var chunk_1p83hf8p_exports = {};
__export(chunk_1p83hf8p_exports, {
  px: () => px
});
module.exports = __toCommonJS(chunk_1p83hf8p_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var a = "a boundary caught a throw (message not reported)";
class px extends import_chunk_bs4h6795.Uvi {
  constructor(r) {
    super(r);
    this.state = { hasError: false, resetKey: r.resetKey };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  static getDerivedStateFromProps(r, e) {
    return Object.is(r.resetKey, e.resetKey) ? null : { hasError: false, resetKey: r.resetKey };
  }
  componentDidCatch(r, e) {
    let o = this.reported(r);
    if (o !== null) (0, import_chunk_k449cc64.i)(o);
    try {
      this.props.onError?.(r, e);
    } catch (s) {
      (0, import_chunk_w578pjby.t)(`SentryErrorBoundary: onError threw: ${s instanceof Error ? s.message : "a value that is no error"}`, { level: "error" });
    }
  }
  reported(r) {
    if (this.props.telemetryMessage === void 0) return r;
    let e = this.messageAsked(this.props.telemetryMessage);
    if (e === null) return null;
    let o = (0, import_chunk_jv7av99m.Ye)(r, e);
    return (0, import_chunk_jv7av99m.QB)(o) === void 0 ? (0, import_chunk_jv7av99m.Ye)(Error("a value that takes no telemetry message was thrown"), e) : o;
  }
  messageAsked(r) {
    try {
      return r();
    } catch {
      return a;
    }
  }
  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}
