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
var chunk_8v27xkv5_exports = {};
__export(chunk_8v27xkv5_exports, {
  i8o: () => i8o,
  t5: () => t5
});
module.exports = __toCommonJS(chunk_8v27xkv5_exports);
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
function t5(e, n) {
  return e.config.scope === n.scope && e.config.pluginSource === n.pluginSource && e.config.readFrom === n.readFrom ? e : { ...e, config: n };
}
function i8o(e, n) {
  let o = (0, import_chunk_3bjtjsgp.lan)(e.config), r = n?.find((i) => i.name === e.name && (0, import_chunk_3bjtjsgp.lan)(i.config) === o);
  return r === void 0 ? e : t5(e, r.config);
}
