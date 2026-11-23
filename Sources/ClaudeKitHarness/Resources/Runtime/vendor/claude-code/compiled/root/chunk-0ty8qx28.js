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
var chunk_0ty8qx28_exports = {};
__export(chunk_0ty8qx28_exports, {
  ast: () => ast,
  cnl: () => cnl,
  dnl: () => dnl,
  lnl: () => lnl
});
module.exports = __toCommonJS(chunk_0ty8qx28_exports);
var import_chunk_x1z3yh1m = require("/$bunfs/root/chunk-x1z3yh1m.js");
var ast = "GetGoal", lnl = `Read the session goal, the stop check set by /goal or ${import_chunk_x1z3yh1m.q6}, and the evaluator's last reason it isn't met`, dnl = "Read the /goal stop check's condition and the evaluator's last reason it isn't met", cnl = "Read the session goal \u2014 the stop check that keeps you working until a separate evaluator confirms its condition is met \u2014 and the evaluator's last reason it isn't met. Says so when no goal is active. Use this when you have lost track of the goal, for example after the conversation was summarized.";
