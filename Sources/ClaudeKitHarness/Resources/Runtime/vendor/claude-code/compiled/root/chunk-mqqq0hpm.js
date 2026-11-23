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
var chunk_mqqq0hpm_exports = {};
__export(chunk_mqqq0hpm_exports, {
  JRe: () => JRe
});
module.exports = __toCommonJS(chunk_mqqq0hpm_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
function JRe(i) {
  let t = i.trim();
  if (/https?:\/\/(localhost|127\.0\.0\.1|\[::1\])[:/]/i.test(t)) return e((0, import_chunk_78g0060s.S)("local_address"), "That address only works in a browser on this machine. Open the sign-in address shown above instead, and paste the code its last page shows.");
  if (/https?:\/\/|\/magic-link#/i.test(t)) return e((0, import_chunk_78g0060s.S)("web_address"), "That's a web address, not the code. If it's a sign-in link, open it in your browser. If the last page shows a code, paste it here.");
  if (/^\d{4,10}$/.test(t.replace(/[\s-]/g, ""))) return e((0, import_chunk_78g0060s.S)("verification_code"), "That looks like a verification code. Enter it in your browser, on the page that asks for it. If a page then shows a longer code, paste it here.");
  let [o, n] = t.split("#");
  if (!o || !n) return e(t ? (0, import_chunk_78g0060s.S)("incomplete") : (0, import_chunk_78g0060s.S)("blank"), "That doesn't look like the full code. Copy all of it, including the # in the middle.");
  return { authorizationCode: o, state: n };
}
function e(i, t) {
  return (0, import_chunk_y53wbr8a.a)("tengu_oauth_manual_entry_refused", { reason: i }), { problem: t };
}
