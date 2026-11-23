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
var chunk_3gj3z3jt_exports = {};
__export(chunk_3gj3z3jt_exports, {
  $Vr: () => $Vr,
  HYt: () => HYt,
  fZn: () => fZn,
  hZn: () => hZn,
  mZn: () => mZn,
  pZn: () => pZn,
  uZn: () => uZn
});
module.exports = __toCommonJS(chunk_3gj3z3jt_exports);
var $Vr = (t, e) => ({ kind: "findings", findings: t, leftOut: e });
var uZn = "claude-plugin-validate-types ";
var pZn = (t, e) => ({ at: t, message: e });
var HYt = "--module";
var mZn = 2147483648;
var hZn = 6e4;
var fZn = (t) => ({ kind: "past-limit", limit: t });
