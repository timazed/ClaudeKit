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
var chunk_07asyfb3_exports = {};
__export(chunk_07asyfb3_exports, {
  _Yo: () => _Yo,
  hai: () => hai,
  ynt: () => ynt
});
module.exports = __toCommonJS(chunk_07asyfb3_exports);
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_util = require("util");
function ynt(t, e = 3) {
  let r = t.map((s) => (0, import_chunk_kx2fp6pc.Yn)((0, import_util.stripVTControlCharacters)(s)).trim()), o = r.slice(0, e).join(", "), n = r.length - e;
  return n > 0 ? `${o} (${n} more)` : o;
}
function _Yo(t = Number.POSITIVE_INFINITY) {
  try {
    if (!import_chunk_ha393e1n.Ue.isSandboxingEnabled()) return;
    let e = import_chunk_ha393e1n.Ue.getDeniesDroppedForAnotherHost();
    if (e.length === 0) return;
    let r = `The sandbox would contact that computer before each command, so it leaves these entries out. An entry that the list calls a ${import_chunk_k883m4fq.De} rule or an ${import_chunk_rb36kwbn.lt} rule still applies to the file tools. To have the sandbox block the paths, start Claude Code in a folder on that computer.`;
    return { issue: `Sandbox deny paths on another computer are not enforced, so sandboxed commands are not blocked from them: ${ynt(e, t)}`, fix: e.some((o) => o.endsWith(" from policySettings")) ? `${r} If an administrator manages the entries from policySettings, tell them that the sandbox does not enforce these.` : r };
  } catch (e) {
    (0, import_chunk_ha393e1n.TR)(e, "deniesOnAnotherHostNotDescribed");
    return;
  }
}
function hai() {
  let t = _Yo(3);
  if (t) process.stderr.write(`
\u26A0 ${t.issue}
  ${t.fix} \`claude doctor\` lists every entry.

`);
}
