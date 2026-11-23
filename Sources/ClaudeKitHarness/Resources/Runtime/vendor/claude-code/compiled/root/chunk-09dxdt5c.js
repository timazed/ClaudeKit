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
var chunk_09dxdt5c_exports = {};
__export(chunk_09dxdt5c_exports, {
  cu: () => cu
});
module.exports = __toCommonJS(chunk_09dxdt5c_exports);
var import_chunk_9js1xpg4 = require("/$bunfs/root/chunk-9js1xpg4.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function cu(e, n, t) {
  let i = (0, import_chunk_9js1xpg4.$d)(), o = (0, import_chunk_bs4h6795.re)(() => i?.getDisplayText(e, n), [i, e, n]), r = o === void 0, s = i ? "action_not_found" : "no_context", u = (0, import_chunk_bs4h6795.I)(false);
  if ((0, import_chunk_bs4h6795.H)(() => {
    if (r && !u.current) u.current = true, (0, import_chunk_y8kqnbqt.Urn)(e, n, t, s);
  }, [r, e, n, t, s]), r) return t;
  return o === null ? "" : o;
}
