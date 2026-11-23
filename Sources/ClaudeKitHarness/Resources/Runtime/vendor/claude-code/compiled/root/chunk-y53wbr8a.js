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
var chunk_y53wbr8a_exports = {};
__export(chunk_y53wbr8a_exports, {
  Kra: () => Kra,
  L4n: () => L4n,
  Ma: () => Ma,
  a: () => a,
  qra: () => qra
});
module.exports = __toCommonJS(chunk_y53wbr8a_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
function L4n(e) {
  let t;
  for (let n in e) if (n.startsWith("_PROTO_")) {
    if (t === void 0) t = { ...e };
    delete t[n];
  }
  return t ?? e;
}
var u = 1e3;
function l() {
  return { eventQueue: [], sink: null, droppedEventCount: 0 };
}
function i(e, t) {
  if (e.eventQueue.length >= u) e.eventQueue.shift(), e.droppedEventCount++;
  e.eventQueue.push(t);
}
class r {
  state = l();
}
var c = new import_chunk_2904xtvq.j(() => new r());
function s() {
  return (0, import_chunk_f9x2f6cx.kr)(c);
}
function Kra(e) {
  let t = s().state;
  if (t.sink !== null) return false;
  if (t.sink = e, t.eventQueue.length > 0) {
    let n = t.eventQueue;
    t.eventQueue = [], queueMicrotask(() => {
      for (let o of n) if (o.async) e.logEventAsync(o.eventName, o.metadata);
      else e.logEvent(o.eventName, o.metadata);
    });
  }
  return true;
}
function qra() {
  try {
    return s().state.sink?.keepsWholeEvents?.() ?? true;
  } catch {
    return true;
  }
}
function a(e, t) {
  let n = s().state;
  if (n.sink === null) {
    i(n, { eventName: e, metadata: t, async: false });
    return;
  }
  n.sink.logEvent(e, t);
}
async function Ma(e, t) {
  let n = s().state;
  if (n.sink === null) {
    i(n, { eventName: e, metadata: t, async: true });
    return;
  }
  await n.sink.logEventAsync(e, t);
}
