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
var chunk_a36sa5qg_exports = {};
__export(chunk_a36sa5qg_exports, {
  Yte: () => Yte
});
module.exports = __toCommonJS(chunk_a36sa5qg_exports);
class Yte {
  turnOf = /* @__PURE__ */ new Map();
  declinedTurns = /* @__PURE__ */ new Set();
  endedTurns = /* @__PURE__ */ new WeakSet();
  endedLoops = /* @__PURE__ */ new Set();
  add(n, e) {
    this.turnOf.set(n, e);
  }
  forget(n) {
    for (let [e, d] of this.turnOf) if (d.signal === n) this.turnOf.delete(e);
  }
  end(n, e) {
    let d = n === void 0 ? void 0 : this.turnOf.get(n);
    if (d !== void 0) this.endedTurns.add(d.signal);
    return this.endedLoops.add(e), d;
  }
}
