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
var chunk_wsm915mg_exports = {};
__export(chunk_wsm915mg_exports, {
  Dnr: () => Dnr,
  RCn: () => RCn,
  Y4o: () => Y4o,
  eLa: () => eLa,
  oZs: () => oZs,
  rZs: () => rZs,
  tLa: () => tLa
});
module.exports = __toCommonJS(chunk_wsm915mg_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
function RCn() {
  try {
    return false;
  } catch (e) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e)), false;
  }
}
var r = 20, f = r + 1, eLa = 10, _ = 12096e5, rZs = [{ text: "Showing fewer prompt suggestions" }, { text: " \xB7 use one to bring them back", dim: true }];
function Y4o() {
  let e = (0, import_chunk_865at33z.ge)();
  if (a(e) < r) return false;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION === true) return false;
  if (RCn()) return false;
  if (Date.now() - Date.parse(e.firstStartTime ?? "1970-01-01") < _) return false;
  return true;
}
function Dnr(e, o, n) {
  if (e) {
    if (n) n.unusedInARow = 0;
    m(o, false);
    return;
  }
  if (!n || a((0, import_chunk_865at33z.ge)()) >= r) return;
  if (n.unusedInARow++, n.unusedInARow >= r) n.unusedInARow = 0, (0, import_chunk_865at33z.Ke)(S, o);
}
function tLa(e, o) {
  if (o) o.unusedInARow = 0;
  m(e, true);
}
function oZs(e) {
  if (!p((0, import_chunk_865at33z.ge)()) || !Y4o()) return false;
  return (0, import_chunk_865at33z.Ke)((o) => p(o) ? { ...o, promptSuggestionUnusedStreak: f } : o, e), (0, import_chunk_cqa9hrgx.u)("prompt_suggestion_back_off_notice"), true;
}
function m(e, o) {
  let n = a((0, import_chunk_865at33z.ge)());
  if (n === 0) return;
  if (!Y4o()) {
    (0, import_chunk_865at33z.Ke)(d, e);
    return;
  }
  let c = { was_notice_claimed: n === f, via_config_toggle: o };
  (0, import_chunk_865at33z.ww)(d, e).then((g) => {
    if (g) (0, import_chunk_cqa9hrgx.u)("prompt_suggestion_back_off_end", c);
    else (0, import_chunk_cqa9hrgx.l)("prompt_suggestion_back_off_end", "reset_unconfirmed", c);
  }).catch((g) => (0, import_chunk_w578pjby.t)(`Prompt suggestion back-off: could not log the end event: ${g}`, { level: "error" }));
}
function d(e) {
  return a(e) === 0 ? e : { ...e, promptSuggestionUnusedStreak: 0 };
}
function S(e) {
  return a(e) >= r ? e : { ...e, promptSuggestionUnusedStreak: r };
}
function p(e) {
  let o = a(e);
  return o >= r && o !== f;
}
function a(e) {
  let o = e.promptSuggestionUnusedStreak;
  return typeof o === "number" && Number.isFinite(o) ? o : 0;
}
