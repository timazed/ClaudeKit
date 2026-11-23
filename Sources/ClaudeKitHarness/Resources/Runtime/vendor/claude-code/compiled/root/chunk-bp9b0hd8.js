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
var chunk_bp9b0hd8_exports = {};
__export(chunk_bp9b0hd8_exports, {
  Aca: () => Aca,
  Cca: () => Cca,
  Ept: () => Ept,
  K3n: () => K3n,
  OD: () => OD,
  Wp: () => Wp,
  XLo: () => XLo,
  _Fr: () => _Fr,
  ajl: () => ajl,
  cjl: () => cjl,
  djl: () => djl,
  gFr: () => gFr,
  hFr: () => hFr,
  ijl: () => ijl,
  ljl: () => ljl,
  m3t: () => m3t,
  mFr: () => mFr,
  ojl: () => ojl,
  sjl: () => sjl,
  xs: () => xs
});
module.exports = __toCommonJS(chunk_bp9b0hd8_exports);
var Wp = "(no content)", m3t = "[Empty text removed]", XLo = "[This message had one more image. It was in this chat until the deletion that a later note reports. You saw it in each answer that you gave below before that note.]";
function ojl(e) {
  return e === 1 ? "An image that was attached earlier in this chat was deleted just before this message. A mark stands at its old place. An image that you can still see in this chat was not deleted. What you said about it up to now, you said while you could see it. You cannot see it now, so give no new detail of it. Do not open or recover any saved copy of it, even by its path. If the person asks about it or asks you to open it, tell them that it was deleted." : `${e} images that were attached earlier in this chat were deleted just before this message. A mark stands at the old place of each. An image that you can still see in this chat was not deleted. What you said about them up to now, you said while you could see them. You cannot see them now, so give no new detail of them. Do not open or recover any saved copy of them, even by its path. If the person asks about them or asks you to open them, tell them that they were deleted.`;
}
var K3n = "[This message had one more image. It was in this chat until it was hidden from you, which a later note reports. You saw it in each answer that you gave below before that note.]";
function sjl(e) {
  return e === 1 ? "An image that was attached earlier in this chat was hidden from you just before this message. A mark stands at its old place. An image that you can still see in this chat was not hidden. What you said about it up to now, you said while you could see it. You cannot see it now, so give no new detail of it. Do not open or recover any saved copy of it, even by its path. If the person asks about it, tell them that it is hidden from you, that a file of this chat was deleted, that you cannot tell whether it was this image, and that they can send the image again." : `${e} images that were attached earlier in this chat were hidden from you just before this message. A mark stands at the old place of each. An image that you can still see in this chat was not hidden. What you said about them up to now, you said while you could see them. You cannot see them now, so give no new detail of them. Do not open or recover any saved copy of them, even by its path. If the person asks about them, tell them that they are hidden from you, that a file of this chat was deleted, that you cannot tell whether it was one of these images, and that they can send the images again.`;
}
var Ept = "[This call's result was here when the call ended. It was removed later, because the call named the file whose deletion a note in this chat reports.]", ijl = "[The doc's text was here when this call ended. It was taken out of this result after a later result in this chat reported the doc's removal. Until then, each answer that you gave after this call had the text in view, and those answers stay in this chat.]", mFr = "[This call's result was here when the call ended. It was removed later, because an image that it held was deleted.]";
function ajl(e) {
  return e === 1 ? "The result of a tool call earlier in this chat held an image that was deleted just before this message. A statement stands in that result's place. An image that you can still see in this chat was not deleted. What you said about the result up to now, you said while you could see it. You cannot see it now, so give no new detail of it. Do not open or recover any copy of the image, even by its path. If the person asks about it or asks you to open it, tell them that it was deleted." : `The results of ${e} tool calls earlier in this chat held images that were deleted just before this message. A statement stands in the place of each result. An image that you can still see in this chat was not deleted. What you said about them up to now, you said while you could see them. You cannot see them now, so give no new detail of them. Do not open or recover any copy of the images, even by its path. If the person asks about them or asks you to open them, tell them that they were deleted.`;
}
var hFr = "[This message had one more file. It was in this chat until the deletion that a later note reports. You could read it in each answer that you gave below before that note.]", Cca = "[The file that this message names was in this chat until the deletion that a later note reports. You could read it in each answer that you gave below before that note.]";
function ljl(e) {
  return e === 1 ? "A file that was attached earlier in this chat was deleted earlier in this chat. A mark stands wherever the file or a read of it stood. A file that you can still read in this chat was not deleted. What you said about it up to now, you said while it was in this chat. It is not in this chat now, so give no new detail of it. Do not open or recover any saved copy of it, even by its path. If the person asks about it or asks you to open it, tell them that it was deleted. The place of this note says nothing about the person's message above it: that message can be about another file. Before you call a file deleted, find which file the person means." : `${e} files that were attached earlier in this chat were deleted earlier in this chat. A mark stands wherever one of them or a read of it stood. A file that you can still read in this chat was not deleted. What you said about them up to now, you said while they were in this chat. They are not in this chat now, so give no new detail of them. Do not open or recover any saved copy of them, even by its path. If the person asks about them or asks you to open them, tell them that they were deleted. The place of this note says nothing about the person's message above it: that message can be about another file. Before you call a file deleted, find which file the person means.`;
}
var OD = "No response requested.", xs = "<synthetic>", djl = "Auto Mode Active", gFr = "the tracked path is (or became) a link or other non-regular file, its directory changed since the checkpoint, it is behind a link in a folder that sandboxed commands can write, or its backup could not be safely read", Aca = "Restored files go back whole, losing later changes by anyone. Bash changes to other files are not undone.", _Fr = "Claude can't use thinking from another organization", cjl = "resume signed in to that organization to use it again";
