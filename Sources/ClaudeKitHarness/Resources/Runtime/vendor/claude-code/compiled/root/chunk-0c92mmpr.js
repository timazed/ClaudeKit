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
var chunk_0c92mmpr_exports = {};
__export(chunk_0c92mmpr_exports, {
  HSe: () => HSe,
  fnl: () => fnl,
  unl: () => unl
});
module.exports = __toCommonJS(chunk_0c92mmpr_exports);
var HSe = "PublishPlugin", unl = "Publish a plugin folder on this machine to the person's organization's library on claude.ai, after the person has seen what is sent and said yes.", fnl = ['Use this when the person asks to share or publish a plugin or a mod with their team or organization ("share this mod with my team", "publish this plugin to the org"). Pass the plugin\'s folder: the one that holds `.claude-plugin/plugin.json`, or, for a mod that has no manifest yet, the folder that holds its `hooks/`. A mod written in this session is in a folder of its own under the session\'s mods folder.', "The tool lists the plugin's own files (what `.gitignore` names, secrets, links, `.git` and installed packages stay on the machine), shows the person the folder, the organization, the count and size and the files by name (past twenty, the rest counted), and asks them. Nothing is sent before their yes, in any permission mode; where nobody can be asked, the tool refuses. For a folder with no manifest it writes one first (a name from the folder, version 0.1.0, your `description`), shown in full in the same question.", "On their yes the plugin is uploaded to the person's own shelf on claude.ai and submitted to the organization: an administrator reviews it, or it is published at once where the organization publishes without review. Whether claude.ai scans the plugin depends on the organization, so say of a scan only what the result says. When the result says a plugin of this name is already in their uploads, ask the person whether to replace it, and only on their yes call again with `replace: true`. When the result says the upload is not the plugin's current version, pass that on and do not call again: publishing again from here would be refused the same way. The person makes the new version current on claude.ai and publishes it from there. When the result says the plugin can only be published from claude.ai, pass that on and do not call again: publishing again from here would be refused the same way. When it says an earlier submission is still waiting for review, pass that on, and call again only if the person asks, once they have withdrawn it on claude.ai.", "Publish only through this tool: never zip, upload or send a plugin's files by other means. It publishes to the organization the session is signed in to on claude.ai. Pass the result's lines on to the person as they are: they say where the plugin stands, and how colleagues install it once it is in the library."].join(`

`);
