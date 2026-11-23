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
var chunk_dt43y25m_exports = {};
__export(chunk_dt43y25m_exports, {
  Czi: () => Czi,
  Ezi: () => Ezi,
  NCr: () => NCr,
  Tzi: () => Tzi,
  ked: () => ked,
  kzi: () => kzi,
  vzi: () => vzi
});
module.exports = __toCommonJS(chunk_dt43y25m_exports);
var kzi = "runner-declares";
var NCr = "diff-finds-nested-repository", Ezi = "no-repository-checked-out";
var vzi = "built-in-gh", Tzi = "built-in-gh-by-default";
function Czi(e) {
  return "--runner-declares=" + e.join(",");
}
async function ked(e) {
  if (!e.startsWith("--runner-declares=")) return;
  let E = e.slice(18).split(","), t = E.includes("diff-finds-nested-repository"), R = false, n = E.includes("built-in-gh") || E.includes("built-in-gh-by-default") && "default";
  if (!t && !R && !n) return;
  let { setRunnerDeclaredBuiltInGh: _, setRunnerDeclaredFreshMachinePerSession: r, setRunnerDeclaredNestedRepositoryDiff: s, setRunnerDeclaredNoRepositoryCheckedOut: i } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-r1tgzm8q.js")));
  if (t) {
    if (s(true), E.includes("no-repository-checked-out")) i(true);
  }
  if (R) r(true);
  if (n) _(n);
}
