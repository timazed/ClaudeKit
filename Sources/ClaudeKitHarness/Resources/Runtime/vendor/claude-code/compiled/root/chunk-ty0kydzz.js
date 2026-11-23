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
var chunk_ty0kydzz_exports = {};
__export(chunk_ty0kydzz_exports, {
  GYn: () => GYn
});
module.exports = __toCommonJS(chunk_ty0kydzz_exports);
var import_string_decoder = require("string_decoder");
var p = 1048576;
function GYn(o, r) {
  let d = new import_string_decoder.StringDecoder("utf8"), e = "", t = false, l = (i) => {
    if (t) return;
    e += typeof i === "string" ? i : d.write(i);
    let f;
    while ((f = e.indexOf(`
`)) >= 0) {
      let c = e.slice(0, f);
      if (e = e.slice(f + 1), c) r(c);
    }
    if (e.length > p) {
      if (t = true, e = "", "destroy" in o) o.destroy();
    }
  }, n = () => {
    if (t) return;
    if (e += d.end(), e) r(e), e = "";
  };
  return o.on("data", l), o.on("end", n), o.on("close", n), () => {
    o.off("data", l), o.off("end", n), o.off("close", n);
  };
}
