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
var chunk_htwg523t_exports = {};
__export(chunk_htwg523t_exports, {
  F_e: () => F_e,
  HOa: () => HOa,
  Nht: () => Nht
});
module.exports = __toCommonJS(chunk_htwg523t_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
class s {
  current;
  turnEnded = (0, import_chunk_69qhefwa.Be)();
}
var Nht = new import_chunk_pzzqg6s3.ze(() => new s());
function F_e(e, n) {
  let o = Nht.of(e);
  if (o.current?.sessionId !== e.id) o.current = { sessionId: e.id, isNew: !n.some((t) => t.type === "assistant" || (0, import_chunk_865at33z.On)(t)), isSettled: false, number: void 0, turnsStarted: 0, hasSecondPrompt: false, edited: false, taskNote: void 0 };
  return o.current;
}
function HOa(e, n) {
  return Nht.of(e).turnEnded.subscribe(n);
}
