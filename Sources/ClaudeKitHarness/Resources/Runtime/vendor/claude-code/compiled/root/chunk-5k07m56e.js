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
var chunk_5k07m56e_exports = {};
__export(chunk_5k07m56e_exports, {
  Qqs: () => Qqs,
  Zqs: () => Zqs,
  _Y: () => _Y,
  e4s: () => e4s
});
module.exports = __toCommonJS(chunk_5k07m56e_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var import_chunk_qct54h38 = require("/$bunfs/root/chunk-qct54h38.js");
var import_fs = require("fs");
var import_os = require("os");
class m {
  line;
  renewedToken;
  madeNonDumpable = false;
  asksEarlyDial = false;
  earlyDial;
}
var _Y = new import_chunk_2904xtvq.j(() => new m());
function Qqs(n = 0) {
  {
    if (!process.argv.includes("--session-tunnel") || !(0, import_chunk_j4z7srhg.ec)()) return;
    (0, import_chunk_f9x2f6cx.kr)(_Y).madeNonDumpable = (0, import_chunk_qct54h38.Jca)((l) => {
      (0, import_chunk_w578pjby.t)(`[session tunnel] ${l}`, { level: "warn" });
    });
    let o = (0, import_chunk_fzp6hh55.wRt)(n, "the session tunnel's line of JSON") ?? void 0;
    (0, import_chunk_f9x2f6cx.kr)(_Y).line = o;
    let u = (0, import_fs.openSync)(import_os.devNull, "r");
    if (u !== n) (0, import_fs.closeSync)(u);
    let e;
    try {
      e = (0, import_chunk_w578pjby.Cs)(o ?? "null");
    } catch {
      e = null;
    }
    (0, import_chunk_f9x2f6cx.kr)(_Y).asksEarlyDial = e?.early_dial === true;
    let r = typeof e?.oauth_token === "string" ? e.oauth_token.trim() : "", s = typeof e?.agent_proxy_token === "string" ? e.agent_proxy_token.trim() : "";
    if (r !== "") (0, import_chunk_fzp6hh55.Zx)(), (0, import_chunk_f9x2f6cx.w2)(r), (0, import_chunk_f9x2f6cx.aVe)("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR");
    let a = typeof e?.env === "object" && e.env !== null && !Array.isArray(e.env) ? Object.entries(e.env) : [], i = {};
    for (let [l, f] of a) if (typeof f === "string") i[l] = f;
    return (0, import_chunk_5e3gtsn9.jji)(i), (0, import_chunk_w578pjby.t)(`[session tunnel] the line has ${r === "" ? "no" : "an"} OAuth token, ${s === "" ? "no" : "an"} agent proxy token; variables: ${Object.keys(i).length} of ${a.length}`), s === "" ? void 0 : s;
  }
  return;
}
function Zqs() {
  return (0, import_chunk_f9x2f6cx.kr)(_Y).line;
}
function e4s() {
  let n = (0, import_chunk_f9x2f6cx.kr)(_Y), o = n.line;
  return n.line = void 0, o;
}
