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
var chunk_adxkgb36_exports = {};
__export(chunk_adxkgb36_exports, {
  Kni: () => Kni,
  Q8r: () => Q8r,
  Vni: () => Vni,
  qni: () => qni
});
module.exports = __toCommonJS(chunk_adxkgb36_exports);
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var t = new import_chunk_pzzqg6s3.ze(() => ({ byToolUse: /* @__PURE__ */ new Map() }));
function Vni(n, e, i) {
  t.of(n).byToolUse.set(e, i), (0, import_chunk_4vsz8a99.xat)(n, e, () => {
    Q8r(n, e);
  });
}
function Q8r(n, e) {
  t.peek(n)?.byToolUse.delete(e);
}
function Kni(n, e) {
  return e !== void 0 && t.peek(n)?.byToolUse.has(e) === true;
}
function qni(n, e) {
  if (e === void 0) return;
  let i = t.peek(n)?.byToolUse.get(e);
  return Q8r(n, e), i;
}
