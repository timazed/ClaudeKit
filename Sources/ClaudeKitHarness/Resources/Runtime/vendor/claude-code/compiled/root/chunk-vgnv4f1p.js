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
var chunk_vgnv4f1p_exports = {};
__export(chunk_vgnv4f1p_exports, {
  ITn: () => ITn,
  OTn: () => OTn,
  PTn: () => PTn
});
module.exports = __toCommonJS(chunk_vgnv4f1p_exports);
var PTn = ` Once the mod has loaded and the person has seen it do what they asked, offer once, in one line, to publish the mod to the organization's library; until then, sharing goes unmentioned unless the person raises it. Wait for their answer; a GitHub repository is for when the person asks for one. Say "the mod", not "it". Where the person says no, that answer stands for the rest of this session.`;
var OTn = `

SHARING IT. The offer is the main session's, to the person in the chat: a subagent or teammate hands the mod back to it. Here a mod is kept and passed on as a plugin file handed over in the chat (Packaging a mod in a chat in reference.md); a GitHub repository is for when the person asks for one. Files are scanned for keys first, and where the scan cannot run nothing is handed over. Once the mod has loaded and the person has seen it do what they asked, offer once, in one line, to package the mod so they can keep it and pass it on. Until then, keeping and sharing go unmentioned unless the person raises them. Offer, and wait for their answer before starting. Say "the mod", not "it". Where the person says no, that answer stands for the rest of this session.`;
var ITn = `

SHARING IT. The offer is the main session's, to the person at its prompt: a subagent or teammate hands the mod back to it. Once the mod has loaded and the person has seen it do what they asked, offer once, in one line, to share the mod: a GitHub repository others install from with one line. Until then, sharing goes unmentioned unless the person raises it. Offer, and wait for their answer before starting. Say "the mod", not "it". A yes to sharing is not a yes to public: ask whether the repository is public (anyone can read the code and install the mod) or private (only people the person invites on GitHub, who also need GitHub set up on their own computer to install the mod), in those words, and create nothing until they answer. Files are scanned for keys first and a flagged one stays unopened; the rest are read for a key, an internal URL or someone else's data; the steps are under Sharing a mod in reference.md. Where the person says no, that answer stands for the rest of this session.`;
