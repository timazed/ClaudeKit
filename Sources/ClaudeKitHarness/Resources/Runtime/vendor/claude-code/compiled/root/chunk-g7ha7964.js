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
var chunk_g7ha7964_exports = {};
__export(chunk_g7ha7964_exports, {
  oMe: () => oMe,
  wY: () => wY
});
module.exports = __toCommonJS(chunk_g7ha7964_exports);
function wY(n, t) {
  return Object.keys(n).filter((e) => !t.includes(e) && Reflect.get(n, e) !== void 0);
}
function oMe(n, t, e) {
  let s = wY(t, e);
  if (s.length === 0) return;
  let i = e.filter((r) => r !== "action").map((r) => `\`${r}\``).join(", ");
  return { result: false, message: `action "${n}" takes only ${i} \u2014 remove ${s.join(", ")}.`, errorCode: 8 };
}
