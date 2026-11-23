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
var chunk_cmr1hpkw_exports = {};
__export(chunk_cmr1hpkw_exports, {
  isScriptRowUUID: () => i,
  rememberScriptRowUUID: () => r
});
module.exports = __toCommonJS(chunk_cmr1hpkw_exports);
var n = /* @__PURE__ */ new WeakMap();
function r(e, o) {
  let t = n.get(e);
  if (t === void 0) t = /* @__PURE__ */ new Set(), n.set(e, t);
  t.add(o);
}
function i(e, o) {
  return n.get(e)?.has(o) === true;
}
