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
var chunk_84d4qt5z_exports = {};
__export(chunk_84d4qt5z_exports, {
  Fv: () => Fv
});
module.exports = __toCommonJS(chunk_84d4qt5z_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var s = /* @__PURE__ */ new Set(["EIO", "ENOTTY", "EBADF"]);
function Fv(e, n) {
  if (!("setRawMode" in e) || typeof e.setRawMode !== "function") return;
  try {
    e.setRawMode(n);
  } catch (o) {
    let a = (0, import_chunk_jv7av99m.d)(o), r = (0, import_chunk_jv7av99m.w)(o);
    if (a.includes("setRawMode failed") || s.has(r ?? "")) {
      (0, import_chunk_w578pjby.t)(`setRawMode(${n}) failed on revoked tty: ${a}`);
      return;
    }
    throw o;
  }
}
