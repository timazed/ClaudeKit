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
var chunk_an3w1y1q_exports = {};
__export(chunk_an3w1y1q_exports, {
  _Le: () => _Le,
  kcn: () => kcn,
  xvt: () => xvt
});
module.exports = __toCommonJS(chunk_an3w1y1q_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var r = new import_chunk_2904xtvq.j(() => (0, import_chunk_865at33z.Yl)());
function xvt() {
  let e = (0, import_chunk_2zeyvjwb.dIo)({ whenUnreadable: false }), o = r.of((0, import_chunk_f9x2f6cx.N)().host), t = o.get();
  if (t === null) o.set(e ? (0, import_chunk_2zeyvjwb.H7i)().stamp : null);
  else {
    let { stamp: s, hasAnswered: a } = (0, import_chunk_2zeyvjwb.H7i)();
    o.set(a && s === t ? null : t);
  }
  return o.get() !== null || e || (0, import_chunk_2zeyvjwb.uo)("hipaa");
}
var kcn = "cc-plugin-hipaa-default";
var _Le = kcn + "@" + import_chunk_xcgcdx61.Ds;
