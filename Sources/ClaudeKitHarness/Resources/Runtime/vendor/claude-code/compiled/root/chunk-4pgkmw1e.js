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
var chunk_4pgkmw1e_exports = {};
__export(chunk_4pgkmw1e_exports, {
  Id: () => Id,
  Ojl: () => Ojl
});
module.exports = __toCommonJS(chunk_4pgkmw1e_exports);
var Ojl = 0.25;
function Id({ attempt: o, baseMs: a, capMs: i = 1 / 0, factor: m = 2, jitter: n = { kind: "symmetric", ratio: 0.25 }, random: t = Math.random }) {
  let r = Math.min(i, a * m ** (o - 1));
  switch (n.kind) {
    case "none":
      return r;
    case "proportional":
      return r + t() * n.ratio * r;
    case "symmetric":
      return Math.max(0, r + r * n.ratio * (2 * t() - 1));
    case "full": {
      let e = Math.min(n.floorMs, r);
      return e + t() * (r - e);
    }
  }
}
