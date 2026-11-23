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
var chunk_v2ykfcgj_exports = {};
__export(chunk_v2ykfcgj_exports, {
  fVo: () => fVo,
  hVo: () => hVo,
  m8s: () => m8s,
  mVo: () => mVo,
  pVo: () => pVo,
  tTn: () => tTn,
  uVo: () => uVo
});
module.exports = __toCommonJS(chunk_v2ykfcgj_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_pkzhb7kv = require("/$bunfs/root/chunk-pkzhb7kv.js");
var import_chunk_s72sr7gg = require("/$bunfs/root/chunk-s72sr7gg.js");
var import_chunk_q5veqmrm = require("/$bunfs/root/chunk-q5veqmrm.js");
var import_chunk_qvjn7dva = require("/$bunfs/root/chunk-qvjn7dva.js");
var import_chunk_nwk8fexj = require("/$bunfs/root/chunk-nwk8fexj.js");
function d() {
  return ((0, import_chunk_z1z1qsrb.FT)() || (0, import_chunk_z1z1qsrb.Kbe)() && (0, import_chunk_z1z1qsrb.qbe)()) && (0, import_chunk_s72sr7gg.kAn)();
}
function uVo(t) {
  return t.policyKey === void 0 || (0, import_chunk_2nv4wrez.Rn)(t.policyKey);
}
function f(t) {
  return !(0, import_chunk_q5veqmrm.ZW)() && (import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_ARTIFACT_TYPE_COMMANDS?.includes(t) ?? false) && !(0, import_chunk_z1z1qsrb.r2e)();
}
function fVo(t) {
  return f(t) || d();
}
function p(t) {
  return fVo(t.name) && uVo(t);
}
var tTn = { name: "design", intent: "design", typeTitle: "Design", policyKey: "allow_cobalt_plinth_bramble", nounPhrase: "a design", askWhenNoBrief: "what they want designed", description: "Make a new Design artifact from a brief", argumentHint: "[what to design]" }, y = { name: import_chunk_nwk8fexj.B_o, intent: "slides", typeTitle: "Slides", policyKey: "allow_cobalt_plinth_juniper", nounPhrase: "a slide deck", askWhenNoBrief: "what the deck should be about", description: "Make a new Slides deck artifact from a brief", argumentHint: "[what the deck is about]" }, u = { name: "motion", typeTitle: "Motion", nounPhrase: "an animation", askWhenNoBrief: "what the animation should show", description: "Make a new Motion artifact from a brief", argumentHint: "[what the animation shows]", rowFromHost: true };
function pVo({ name: t, intent: o, typeTitle: e, nounPhrase: i, askWhenNoBrief: h, whyNotListed: a }, c) {
  let n = c.trim(), l = a === void 0 ? "say so plainly" : `say plainly that ${a},`;
  return [((0, import_chunk_pkzhb7kv.rd)() || f(t) || (0, import_chunk_z1z1qsrb.Kbe)() && !(0, import_chunk_z1z1qsrb.FT)() ? o !== void 0 ? `\`/${t}\` was invoked: a request for ${i} made as a NEW Artifact from the published Artifact type titled "${e}". Find that type among the Artifact types your artifact tools offer this user, the way their own guidance says to (if that leaves more than one with that title, ask the user which before creating). Create the new Artifact from it with a \`title\` drawn from the brief and nothing else yet, because the result of that call carries the type's instructions, then fill it by following them. If no type titled "${e}" is offered to this user, say so plainly; if the tool result that told you so suggests another route, take it, and otherwise offer to make ${i} another way.` : `\`/${t}\` was invoked: a request for ${i} made as a NEW Artifact from the published Artifact type titled "${e}". Skip any quickstart step your artifact tools have, which has no option for this type: list all the Artifact types they offer this user and take the first-party type titled "${e}" (a first-party row starts with a tier in brackets, such as \`[core]\`; if no row has one, go by title alone; if more than one row fits, ask the user which before creating). Create the new Artifact from it with a \`title\` drawn from the brief and nothing else yet, because the result of that call carries the type's instructions, then fill it by following them. If no type that fits is offered to this user, ${l} and offer to make ${i} another way.` : void 0) ?? (o === void 0 ? `\`/${t}\` was invoked: a request for ${i} made as a NEW Artifact from the published Artifact type titled "${e}". ${(0, import_chunk_s72sr7gg.Dtt)() ? "No quickstart call is needed: use" : "Use"} the \`${import_chunk_r8478wtb.Vt}\` tool to list the Artifact types available to this user (\`type_query: "${e}"\`), take the first-party type titled "${e}" (a first-party row opens with its tier in brackets, such as \`[core]\`; if more than one has that title, ask the user which before creating), create the new Artifact from its \`type_url\` \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 then fill it by following those instructions. If no first-party type titled "${e}" is listed for this user, ${l} and offer to make ${i} another way.` : (0, import_chunk_s72sr7gg.Dtt)() ? `\`/${t}\` was invoked: a request for ${i} made as a NEW Artifact from the published Artifact type titled "${e}". Call the \`${import_chunk_r8478wtb.Vt}\` tool with \`action: "quickstart"\` and \`intent: "${o}"\` (adding \`design_systems: false\` if you already have a design system's link or the user declined one), then do what its result says: create the new Artifact from the type it names \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 and fill it by following those instructions. If it says no such type is listed for this user, say so plainly, then do what it says instead.` : `\`/${t}\` was invoked: a request for ${i} made as a NEW Artifact from the published Artifact type titled "${e}". Use the \`${import_chunk_r8478wtb.Vt}\` tool the way its Artifact-types guidance describes: list the Artifact types available to this user (\`type_query: "${e}"\`), take the listed type whose title is "${e}" (if more than one has that title, ask the user which before creating), create the new Artifact from its \`type_url\` \u2014 a \`title\` drawn from the brief, and no files at first so the type's instructions arrive \u2014 then fill it by following those instructions. If no type titled "${e}" is listed for this user, say so plainly and offer to make ${i} another way.`), n ? `The brief:

${n}` : `No brief was given \u2014 ask the user ${h} before creating anything.`].join(`

`);
}
function mVo() {
  r(y);
}
function hVo() {
  r(u);
}
function m8s() {
  r({ name: import_chunk_nwk8fexj.Ghl, typeTitle: "Whiteboard", policyKey: import_chunk_r8478wtb.MOr, nounPhrase: "a whiteboard", askWhenNoBrief: "what the whiteboard is for", whyNotListed: "Whiteboard is in beta and may not be available on their account yet", description: "Make a new Whiteboard artifact from a brief", argumentHint: "[what the whiteboard is for]" }, { policy: "allow_cobalt_plinth" });
}
function r(t, o) {
  (0, import_chunk_qvjn7dva.dc)({ name: t.name, description: t.description, argumentHint: t.argumentHint, policyGate: o, isEnabled: () => p(t), userInvocable: true, rowFromHost: t.rowFromHost, disableModelInvocation: true, async getPromptForCommand(e) {
    return [{ type: "text", text: pVo(t, e) }];
  } });
}
