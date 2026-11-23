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
var chunk_gw1wjjyb_exports = {};
__export(chunk_gw1wjjyb_exports, {
  GOa: () => GOa,
  UVo: () => UVo,
  VOa: () => VOa,
  rYs: () => rYs,
  zOa: () => zOa
});
module.exports = __toCommonJS(chunk_gw1wjjyb_exports);
function t(r, e, a, i = false, s = false) {
  return { path: `artifact-type/reference/${r}`, inlinedByCreate: e, printed: a, readByKit: i, needsDesignSystem: s };
}
var rYs = /* @__PURE__ */ new Map([["design", [t("format.md", true, true, true), t("design-system-components.md", true, false, true, true), t("fonts.md", false, true), t("craft.md", false, true)]], ["migrated-design", [t("format.md", true, true), t("fonts.md", false, true), t("craft.md", false, true)]], ["slides", [t("format.md", true, true, true), t("fonts.md", true, true, true), t("craft.md", false, true), t("deck-files.md", false, false, true)]]]), d = [t("format.md", false, true), t("fonts.md", false, true), t("craft.md", false, true)];
function n(r) {
  return (r === void 0 ? void 0 : rYs.get(r)) ?? d;
}
function GOa(r) {
  return n(r).filter((e) => e.inlinedByCreate).map((e) => e.path);
}
function zOa(r) {
  return n(r).filter((e) => e.inlinedByCreate && e.needsDesignSystem).map((e) => e.path);
}
function UVo(r) {
  return n(r).filter((e) => e.printed).map((e) => e.path);
}
function VOa(r) {
  return n(r).filter((e) => e.readByKit).map((e) => e.path);
}
