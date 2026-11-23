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
var chunk_4ztwtja5_exports = {};
__export(chunk_4ztwtja5_exports, {
  l5r: () => l5r
});
module.exports = __toCommonJS(chunk_4ztwtja5_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_k46cdxhb = require("/$bunfs/root/chunk-k46cdxhb.js");
var import_chunk_3fzdhydm = require("/$bunfs/root/chunk-3fzdhydm.js");
var import_chunk_7sbhbwjm = require("/$bunfs/root/chunk-7sbhbwjm.js");
var l5r = async (n, r) => {
  let o = r.toolState.get(import_chunk_k46cdxhb.Nue);
  if (n === "consent") try {
    return await (0, import_chunk_3fzdhydm.cgt)(o, "agent_design_projects", r.credentials), { type: "text", value: `Design agent access granted for your Claude Design projects. Use /design revoke to undo.
${import_chunk_7sbhbwjm.fWe}` };
  } catch (e) {
    if ((0, import_chunk_6e68m1dj.fT)()) return (0, import_chunk_w578pjby.t)(`/design consent failed in a cloud session: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" }), { type: "text", value: "Couldn't record Design agent access for your Claude Design projects from this cloud session. Try again, or grant it at claude.ai/design/settings and then retry your Design request." };
    return { type: "text", value: `Couldn't record Design agent access for ${"your Claude Design projects"} \u2014 ${(0, import_chunk_jv7av99m.d)(e)}. Try again, or run /design-login to authorize Claude Design for this account.` };
  }
  try {
    return await (0, import_chunk_3fzdhydm.N0a)(o, "agent_design_projects", r.credentials), { type: "text", value: "Design agent access revoked for your Claude Design projects." };
  } catch (e) {
    if ((0, import_chunk_6e68m1dj.fT)()) return (0, import_chunk_w578pjby.t)(`/design revoke failed in a cloud session: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" }), { type: "text", value: "Couldn't revoke Design agent access for your Claude Design projects from this cloud session. Try again, or revoke it at claude.ai/design/settings." };
    return { type: "text", value: `Couldn't revoke Design agent access for ${"your Claude Design projects"} \u2014 ${(0, import_chunk_jv7av99m.d)(e)}. Try again, or run /design-login to authorize Claude Design for this account.` };
  }
};
