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
var chunk_tcdd2he7_exports = {};
__export(chunk_tcdd2he7_exports, {
  $8e: () => $8e,
  LLi: () => LLi,
  pln: () => pln
});
module.exports = __toCommonJS(chunk_tcdd2he7_exports);
var pln = 10;
function LLi(e) {
  if (typeof e === "string") return s(e, 9);
  if (!Array.isArray(e)) return false;
  let t = 0;
  for (let r of e) {
    if (t += 1, t > 10) return true;
    if (!$8e(r)) continue;
    let n = r.text, o = 0;
    while (t <= 10) {
      if (o = n.indexOf(`
`, o), o === -1) break;
      o++, t++;
    }
    if (t > 10) return true;
  }
  return false;
}
function $8e(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "text" && "text" in e && typeof e.text === "string";
}
function s(e, t) {
  let r = 0;
  for (let n = 0; n <= t; n++) {
    if (r = e.indexOf(`
`, r), r === -1) return false;
    r++;
  }
  return true;
}
