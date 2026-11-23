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
var chunk_14m79r0k_exports = {};
__export(chunk_14m79r0k_exports, {
  Ari: () => Ari,
  Rri: () => Rri,
  a$a: () => a$a,
  i$a: () => i$a,
  s$a: () => s$a
});
module.exports = __toCommonJS(chunk_14m79r0k_exports);
var import_chunk_apmh0yjy = require("/$bunfs/root/chunk-apmh0yjy.js");
var l = /^[CDG][A-Z0-9]{6,}$/;
function Ari(e) {
  let n = e.replace(/^#/, "");
  return l.test(n) ? `https://slack.com/app_redirect?channel=${n}` : null;
}
var t = /* @__PURE__ */ new Set(["slack_send_message", "slack_post_message"]), Rri = "mcp-slack-send";
function s$a(e) {
  return t.has(e);
}
function i$a(e) {
  let n = e.channel_id ?? e.channel;
  if (typeof n !== "string") return null;
  let r = (0, import_chunk_apmh0yjy._Yr)(n);
  if (!r) return null;
  return { label: `#${r.replace(/^#/, "")}`, url: Ari(n) };
}
function a$a() {
  return { uiTableKey: Rri, userFacingName() {
    return "Slacked";
  }, renderToolUseMessage(e, n) {
    return n.verbose ? (0, import_chunk_apmh0yjy.eJt)(e, n) : "";
  } };
}
