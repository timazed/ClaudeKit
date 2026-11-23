const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_aka192fb_exports = {};
__export(chunk_aka192fb_exports, {
  Qoe: () => Qoe,
  w3: () => w3
});
module.exports = __toCommonJS(chunk_aka192fb_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var f = __toESM(require("fs"));
var import_path = require("path");
var o = (0, import_chunk_t57w17k7.de)({ notMapRoots: /* @__PURE__ */ new Set(), passingFailures: /* @__PURE__ */ new Map(), reported: /* @__PURE__ */ new Set() }, (e) => {
  e.notMapRoots.clear(), e.passingFailures.clear(), e.reported.clear();
});
function w3(e) {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_AUTOMOUNT_ROOTS?.split(import_path.delimiter).some((r) => (0, import_path.isAbsolute)(r) && (0, import_path.resolve)(r) === e) === true || Qoe(e);
}
function Qoe(e) {
  let r = (0, import_chunk_cg8dqz0a.x)();
  if (r !== "linux" && r !== "wsl" || e === "/" || (0, import_path.dirname)(e) !== "/") return false;
  if (o.notMapRoots.has(e)) return false;
  try {
    if (f.statfsSync(e).type === M) {
      if (o.passingFailures.delete(e), !o.reported.has(e)) o.reported.add(e), (0, import_chunk_cqa9hrgx.u)("autofs_map_root");
      return true;
    }
  } catch (n) {
    let a = (0, import_chunk_jv7av99m.w)(n), p = a === void 0 ? n instanceof TypeError : T.has(a), i = (o.passingFailures.get(e) ?? 0) + 1;
    if (!p && i < E) return o.passingFailures.set(e, i), (0, import_chunk_w578pjby.t)(`autofs map root check: statfs of ${e} failed (${a ?? "no code"}); asked again once`), false;
    if (!p) (0, import_chunk_cqa9hrgx.l)("autofs_map_root", "statfs_failed");
  }
  return o.notMapRoots.add(e), false;
}
var T = /* @__PURE__ */ new Set(["ENOENT", "ENOTDIR", "EACCES", "EPERM", "ENOSYS", "ENOTSUP", "EOPNOTSUPP"]), E = 2, M = 391;
