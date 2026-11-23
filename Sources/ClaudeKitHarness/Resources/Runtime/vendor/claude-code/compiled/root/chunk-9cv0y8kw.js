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
var chunk_9cv0y8kw_exports = {};
__export(chunk_9cv0y8kw_exports, {
  J9r: () => J9r
});
module.exports = __toCommonJS(chunk_9cv0y8kw_exports);
function J9r(t) {
  let e = /^\/uploads\/hearth\/([0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12})(\/\1(?:\.[a-z0-9]{1,16})?)?$/.exec(t);
  if (e === null) return;
  return e[2] === void 0 ? "file_id" : "file_id_in_own_folder";
}
