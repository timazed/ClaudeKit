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
var chunk_gk0jv3qt_exports = {};
__export(chunk_gk0jv3qt_exports, {
  dBa: () => dBa,
  f8o: () => f8o,
  lBa: () => lBa,
  pq: () => pq,
  qoi: () => qoi,
  rye: () => rye,
  wUe: () => wUe
});
module.exports = __toCommonJS(chunk_gk0jv3qt_exports);
var import_chunk_wzzzxdne = require("/$bunfs/root/chunk-wzzzxdne.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var pq = new import_chunk_pzzqg6s3.ze(() => ({}));
function wUe(e, o) {
  let r = e?.servers.get(o.name);
  return r !== void 0 && o.config.type === "http" && o.config.url === r.url && e?.heldSinceBoot(o.name) === true ? r.server : void 0;
}
var rye = "claudecode/nobodyAsked", s = /* @__PURE__ */ new WeakSet();
function lBa(e) {
  s.add(e);
}
function dBa(e) {
  return s.has(e);
}
function qoi(e) {
  return { source: "mcpServerPolicy", ruleBehavior: "ask", ruleValue: { toolName: e } };
}
function f8o(e, o) {
  return { behavior: "ask", message: (0, import_chunk_wzzzxdne.huo)(e.name), decisionReason: { type: "rule", rule: qoi(o) } };
}
