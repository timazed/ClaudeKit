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
var chunk_qzgavhcz_exports = {};
__export(chunk_qzgavhcz_exports, {
  GI: () => GI,
  SPa: () => SPa
});
module.exports = __toCommonJS(chunk_qzgavhcz_exports);
var import_chunk_m3wvjg0t = require("/$bunfs/root/chunk-m3wvjg0t.js");
var import_chunk_72w4k1fr = require("/$bunfs/root/chunk-72w4k1fr.js");
var GI = { init: { usage: "plugin init <name>", aliases: ["new"], description: "Scaffold a new plugin at ~/.claude/skills/<name>/ (auto-loads next session as <name>@skills-dir)" }, validate: { usage: "plugin validate <path>", description: "Validate a plugin or marketplace manifest, or the skills, agents, and commands in a directory" }, tag: { usage: "plugin tag [path]", description: "Create a {name}--v{version} git tag for a plugin release, validating that plugin.json and any enclosing marketplace entry agree" }, list: { usage: "plugin list", description: "List installed plugins" }, eval: { usage: "plugin eval [target]", description: "Run eval cases (<eval dir>/**/case.yaml or prompt.md + graders/*.md; the eval dir is evals/ unless --eval-dir or the manifest says otherwise) against a plugin and report scored results. Target is a path, a plugin name, or a `plugin@marketplace` id \u2014 installed and skills-dir plugins both resolve (and add a no-plugin baseline arm). It loads the plugin and runs its eval suite (prompts, graders; scaffold scripts and real MCP servers only when you opt in) on your machine, as you: only evaluate plugins you trust \u2014 the run's sandboxing limits what a malicious plugin can reach but is not a guarantee, and a bundled suite passing is not a security vetting. The first run in an untrusted plugin directory asks you to confirm (--trust-plugin answers for CI)", earlyAccess: "pluginEval" }, evalInit: { usage: "plugin eval init [name]", description: "Author an eval suite under the eval dir (evals/ unless --eval-dir or the manifest says otherwise) via an interview that sources inputs and designs graders. Use --bare <name> for a blank single-case template.", earlyAccess: "pluginEval" }, test: { usage: "plugin test [dir]", description: "Run a mod's tests", earlyAccess: "hooksModules" }, details: { usage: "plugin details <name>", description: "Show a plugin's component inventory and projected token cost" }, marketplaceAdd: { usage: "plugin marketplace add <source>", description: "Add a marketplace from a URL, path, or GitHub repo" }, marketplaceList: { usage: "plugin marketplace list", description: "List all configured marketplaces" }, marketplaceRemove: { usage: "plugin marketplace remove <name>", aliases: ["rm"], description: "Remove a configured marketplace" }, marketplaceUpdate: { usage: "plugin marketplace update [name]", description: "Update marketplace(s) from their source - updates all if no name specified" }, install: { usage: "plugin install <plugin>", aliases: ["i"], description: "Install a plugin from available marketplaces (use plugin@marketplace for specific marketplace)" }, uninstall: { usage: "plugin uninstall <plugin>", aliases: ["remove", "rm"], description: "Uninstall an installed plugin" }, prune: { usage: "plugin prune", aliases: ["autoremove"], description: "Remove auto-installed dependencies that are no longer needed" }, restoreSetAside: { usage: "plugin restore-set-aside <plugin>", description: "Give a plugin id back the options and secrets set aside when a marketplace your organization declares replaced another source" }, enable: { usage: "plugin enable <plugin>", description: "Enable a disabled plugin" }, disable: { usage: "plugin disable [plugin]", description: "Disable an enabled plugin" }, update: { usage: "plugin update <plugin>", description: "Update a plugin to the latest version (restart required to apply)" }, configure: { usage: "plugin configure <plugin>", description: "Show a plugin's options and which are unset, or save values from stdin with --values-stdin" } };
function SPa() {
  let a = { pluginEval: (0, import_chunk_72w4k1fr.Wmr)(), hooksModules: (0, import_chunk_m3wvjg0t.i0n)() };
  return Object.values(GI).filter((e) => e.earlyAccess === void 0 || a[e.earlyAccess]);
}
