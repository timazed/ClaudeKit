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
var chunk_6tyx83ga_exports = {};
__export(chunk_6tyx83ga_exports, {
  ALr: () => ALr,
  Fft: () => Fft
});
module.exports = __toCommonJS(chunk_6tyx83ga_exports);
var import_fs = require("fs");
var import_path = require("path");
var ALr = "git is not installed on this Mac. To install it, run xcode-select --install, then try again.";
function Fft(n, e) {
  if (Boolean(e.DEVELOPER_DIR)) return false;
  try {
    return (n.includes("/") ? n : (e.PATH ?? "").split(":").filter((t) => (0, import_path.isAbsolute)(t)).map((t) => (0, import_path.join)(t, n)).find((t) => (0, import_fs.existsSync)(t))) === "/usr/bin/git" && (0, import_fs.statSync)("/Library/Developer/CommandLineTools", { throwIfNoEntry: false }) === void 0 && (0, import_fs.lstatSync)("/var/db/xcode_select_link", { throwIfNoEntry: false }) === void 0 && !(0, import_fs.readdirSync)("/Applications").some((t) => /^Xcode.*\.app$/i.test(t));
  } catch {
    return false;
  }
}
