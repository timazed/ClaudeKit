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
var chunk_th32p3mg_exports = {};
__export(chunk_th32p3mg_exports, {
  Njr: () => Njr,
  QSa: () => QSa,
  SWo: () => SWo,
  uH: () => uH,
  wXn: () => wXn
});
module.exports = __toCommonJS(chunk_th32p3mg_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var g = /^[A-Za-z0-9][A-Za-z0-9-]*$/, a = /* @__PURE__ */ new Set(["restricted"]), QSa = ["system-prompt-file", "append-system-prompt-file", "append-subagent-system-prompt-file"];
function uH(t, e) {
  return `${t}=${e}`;
}
function SWo(t, e) {
  let n = String(e);
  if (n.length > 1 && n.startsWith("-")) return [uH(t, n)];
  return [t, n];
}
function wXn(t, e, n) {
  t.push(...SWo(`--${e}`, n));
}
function Njr(t, e, n, o) {
  let i = 0;
  for (let [r, s] of Object.entries(e)) {
    if (!g.test(r)) {
      o("malformed", JSON.stringify(r));
      continue;
    }
    if (n.has(r)) {
      o("blocked", r);
      continue;
    }
    if (a.has(r)) {
      if (!(0, import_chunk_69qhefwa.Oi)(String(s))) t.push(`--${r}`), i++;
      continue;
    }
    if (s !== "") wXn(t, r, s), i++;
  }
  return i;
}
