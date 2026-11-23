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
var chunk_kr68f0mb_exports = {};
__export(chunk_kr68f0mb_exports, {
  $Fs: () => $Fs,
  Nce: () => Nce,
  OFr: () => OFr,
  UFs: () => UFs,
  Zyn: () => Zyn
});
module.exports = __toCommonJS(chunk_kr68f0mb_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var r = "3ab19d7e-9f35-45c2-926e-75e271cc60b3";
function Nce(s) {
  return (0, import_chunk_mzmcvr6c.cx)(s.trim(), r);
}
function Zyn() {
  let s = process.env.CLAUDE_CODE_REMOTE_SESSION_ID?.trim();
  return s ? (0, import_chunk_mzmcvr6c.cx)(s, r) : null;
}
function $Fs() {
  if (!(0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_CHILD_SESSION) || Zyn() === null) return false;
  let s = process.argv ?? [], e = s.indexOf("--");
  return !s.slice(0, e === -1 ? void 0 : e).some((n, l) => n === "--sdk-url" ? Boolean(s[l + 1]) : n.startsWith("--sdk-url=") && n !== "--sdk-url=") && !(s[2] === "mcp" && s[3] === "serve");
}
function OFr() {
  return $Fs() && !(0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_DISABLE_NESTED_SESSION_ID) ? null : Zyn();
}
function UFs(s) {
  if (s.toLowerCase().endsWith(".jsonl")) return { sessionId: (0, import_chunk_mzmcvr6c.Fce)(), ingressUrl: null, isUrl: false, jsonlFile: s, isJsonlFile: true };
  if ((0, import_chunk_mzmcvr6c.ht)(s)) return { sessionId: s, ingressUrl: null, isUrl: false, jsonlFile: null, isJsonlFile: false };
  try {
    let e = new URL(s);
    return { sessionId: Zyn() ?? (0, import_chunk_mzmcvr6c.cx)(e.href, r), ingressUrl: e.href, isUrl: true, jsonlFile: null, isJsonlFile: false };
  } catch {
  }
  return null;
}
