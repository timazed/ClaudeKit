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
var chunk_7zd54r6w_exports = {};
__export(chunk_7zd54r6w_exports, {
  Y2: () => Y2,
  fii: () => fii,
  uii: () => uii
});
module.exports = __toCommonJS(chunk_7zd54r6w_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
function uii({ storedAccountUuid: t, hostAccountUuid: e }) {
  if (!e) return t ? { status: "resolved", accountUuid: t, source: "stored" } : { status: "missing" };
  if (!t) return { status: "resolved", accountUuid: e, source: "env" };
  return t.trim().toLowerCase() === e.toLowerCase() ? { status: "resolved", accountUuid: t, source: "env" } : { status: "mismatch" };
}
async function fii(t) {
  let e = (0, import_chunk_mzmcvr6c.ht)(import_chunk_c203g5kd.s.CLAUDE_CODE_ACCOUNT_UUID)?.toLowerCase();
  if (e === void 0) return;
  try {
    let n = await (0, import_chunk_865at33z.v_)(t);
    return n === "env" || n === "fd" ? e : void 0;
  } catch {
    return;
  }
}
async function Y2(t) {
  let e;
  try {
    e = (0, import_chunk_865at33z.Dc)()?.accountUuid;
  } catch {
    e = void 0;
  }
  return uii({ storedAccountUuid: e, hostAccountUuid: await fii(t) });
}
