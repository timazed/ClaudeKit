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
var chunk_21cxvf80_exports = {};
__export(chunk_21cxvf80_exports, {
  Jol: () => Jol,
  Xol: () => Xol,
  Yol: () => Yol
});
module.exports = __toCommonJS(chunk_21cxvf80_exports);
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_339n78pp = require("/$bunfs/root/chunk-339n78pp.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var s = "The files you sent are still on disk. For a small, specific change to a file whose text is in this conversation, send the Edit call(s) and an Artifact publish of the same file_path together in one response, with no Read and no shell command that edits the file: these calls run one after another in the order given, so the publish sends the edited file. If an Edit reports that it did not apply, correct it and publish again. If the file's text is no longer in this conversation, or you cannot place the change exactly from the text you have, Read it first.";
function Yol(e, t) {
  if (e) return t ? import_chunk_339n78pp.isl : import_chunk_339n78pp.ssl;
  return s;
}
var n = ` For a small change to an artifact this conversation has already published, Claude makes it with ${import_chunk_rb36kwbn.lt}, not a shell command, and publishes the artifact again with the same file path in the same response: the ${import_chunk_rb36kwbn.lt} call(s) first, then the publish, with no ${import_chunk_k883m4fq.De} and without waiting for the ${import_chunk_rb36kwbn.lt} result. Only when the file's text is not in this conversation, or the change cannot be placed exactly from that text, does Claude read the file before editing it. The calls run in the order sent, so the publish carries the edited file. If one of those ${import_chunk_rb36kwbn.lt} calls does not apply, the publish sent in the same response is refused and the artifact stays as it was, so Claude corrects the ${import_chunk_rb36kwbn.lt} and publishes again.`, o = ` For a change to several files at once, or a rewrite of most of a page, Claude makes the change with ${import_chunk_rb36kwbn.lt}, not a shell command, and publishes the artifact again with the same file path in the same response: the ${import_chunk_rb36kwbn.lt} call(s) first, then the publish, with no ${import_chunk_k883m4fq.De} and without waiting for the ${import_chunk_rb36kwbn.lt} result. The calls run in the order sent, so the publish carries the edited file. If one of those ${import_chunk_rb36kwbn.lt} calls does not apply, the publish sent in the same response is refused and the artifact stays as it was, so Claude corrects the ${import_chunk_rb36kwbn.lt} and publishes again. Either way, Claude reads the file first only when its text is not in this conversation or the change cannot be placed exactly from that text.`;
function Xol(e) {
  return e ? o : n;
}
var h = `To make a small change to an artifact you already published with the ${import_chunk_r8478wtb.Vt} tool in this conversation, use ${import_chunk_rb36kwbn.lt}, not a shell command, and publish the artifact again with the same file path in the same response: the ${import_chunk_rb36kwbn.lt} call(s) first, then the ${import_chunk_r8478wtb.Vt} publish, with no ${import_chunk_k883m4fq.De} and without waiting for the ${import_chunk_rb36kwbn.lt} result. Only if the file's text is not in this conversation, or you can't place the change exactly from it, read the file before editing it. The calls run in the order sent, so the publish sends the edited file; a publish sent in the same response as a failed ${import_chunk_rb36kwbn.lt} of that file is refused and leaves the artifact as it was, so correct the ${import_chunk_rb36kwbn.lt} and publish again.`, r = `To make a small change to a page you already published with the ${import_chunk_r8478wtb.Vt} tool in this conversation, send it as \`edits\` (old_str/new_str pairs copied exactly from the file as it now stands) on an ${import_chunk_r8478wtb.Vt} publish of the same \`file_path\`: that one call changes the file and the page together, with no ${import_chunk_k883m4fq.De} and no ${import_chunk_rb36kwbn.lt}. For a change to several files at once, or a rewrite of most of a page, use ${import_chunk_rb36kwbn.lt} on the file(s), not a shell command, and publish the artifact again with the same \`file_path\` in the same response: the ${import_chunk_rb36kwbn.lt} call(s) first, then the ${import_chunk_r8478wtb.Vt} publish, with no ${import_chunk_k883m4fq.De} and without waiting for the ${import_chunk_rb36kwbn.lt} result. The calls run in the order sent, so the publish carries the edited file; a publish sent in the same response as a failed ${import_chunk_rb36kwbn.lt} of that file is refused and leaves the artifact as it was, so correct the ${import_chunk_rb36kwbn.lt} and publish again. Either way, read the file first only if its text is not in this conversation or you can't place the change exactly from it.`;
function a(e, t) {
  return e.some((i) => (0, import_chunk_4vsz8a99.gt)(i, t));
}
function l() {
  return require("/$bunfs/root/chunk-h6w860be.js").artifactPublishEditsOn();
}
function Jol(e) {
  if (!a(e, import_chunk_r8478wtb.Vt) || !a(e, import_chunk_rb36kwbn.lt)) return null;
  return l() ? r : h;
}
