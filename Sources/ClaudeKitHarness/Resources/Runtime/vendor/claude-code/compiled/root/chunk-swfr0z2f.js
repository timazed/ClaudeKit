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
var chunk_swfr0z2f_exports = {};
__export(chunk_swfr0z2f_exports, {
  Aqr: () => Aqr,
  Cqr: () => Cqr,
  OIa: () => OIa,
  Per: () => Per,
  Rqr: () => Rqr
});
module.exports = __toCommonJS(chunk_swfr0z2f_exports);
var Cqr = `(async () => {'use strict';
`, OIa = `
})()`;
function Aqr(n) {
  return `(async () => {'use strict';
${n}
})()`;
}
function Per(n) {
  Function(`async function _check() {'use strict';
${n}
}`);
}
function Rqr(n, r) {
  let { parse: t } = require("/$bunfs/root/chunk-dzjs7e5t.js");
  return t(n, { sourceType: "script", ...r });
}
