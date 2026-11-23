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
var chunk_g3a1gwww_exports = {};
__export(chunk_g3a1gwww_exports, {
  BHi: () => BHi,
  VSr: () => VSr,
  WHi: () => WHi,
  ipl: () => ipl,
  opl: () => opl,
  spl: () => spl,
  zSr: () => zSr
});
module.exports = __toCommonJS(chunk_g3a1gwww_exports);
var import_chunk_t8x29mwc = require("/$bunfs/root/chunk-t8x29mwc.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_crypto = require("crypto");
var import_crypto2 = require("crypto");
var g = { N: 16384, r: 8, p: 1 }, f = 16, u = /* @__PURE__ */ new Map([["env-key", ["ANTHROPIC_API_KEY"]], ["env-token", ["ANTHROPIC_AUTH_TOKEN"]], ["env-setup", ["CLAUDE_CODE_OAUTH_TOKEN"]], ["env-federation", ["ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID"]]]);
function zSr(e) {
  return u.get((0, import_chunk_t8x29mwc.Cje)(e));
}
function BHi(e) {
  return e.length === 1 ? e[0] ?? "" : (0, import_chunk_w578pjby._)(e);
}
function WHi(e, n) {
  return (0, import_crypto.scryptSync)(n, e, f, g).toString("hex");
}
function opl(e, n) {
  let t = (0, import_crypto.randomBytes)(8).toString("hex");
  return `${e}:${t}:${WHi(t, n)}`;
}
var N = /* @__PURE__ */ new Map([["env-key", ["ANTHROPIC_AUTH_TOKEN"]], ["env-federation", ["ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_API_KEY", "CLAUDE_CODE_OAUTH_TOKEN"]], [import_chunk_t8x29mwc.E8e, ["ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_API_KEY", "ANTHROPIC_FEDERATION_RULE_ID", "CLAUDE_CODE_OAUTH_TOKEN"]]]);
function spl(e) {
  return (0, import_chunk_t8x29mwc.rle)(e) || e === import_chunk_t8x29mwc.E8e ? N.get((0, import_chunk_t8x29mwc.Cje)(e)) ?? [] : [];
}
function ipl(e) {
  let n;
  return async (t, a = []) => {
    let i = zSr(t);
    if (i === void 0 || !(0, import_chunk_t8x29mwc.S0e)(t) || !(0, import_chunk_t8x29mwc.rle)(t) || n !== void 0 && n.pin !== t) return;
    let s = i.filter((r) => !a.includes(r)), o = s.map((r) => e[r]?.trim());
    if (!o.every(Boolean)) return false;
    if (s.length < i.length) return;
    if (n === void 0) {
      let r = I(t, BHi(o)).finally(() => {
        n = void 0;
      });
      n = { pin: t, answer: r };
    }
    return n.answer;
  };
}
async function I(e, n) {
  let [, t = "", a = ""] = e.split(":"), i = await new Promise((o, r) => {
    (0, import_crypto.scrypt)(n, t, f, g, (d, l) => d ? r(d) : o(l));
  }), s = Buffer.from(a, "hex");
  return i.length === s.length && (0, import_crypto.timingSafeEqual)(i, s);
}
function VSr(e, n) {
  return (0, import_crypto2.createHash)("sha256").update((0, import_chunk_w578pjby._)([e, n])).digest("hex").slice(0, 16);
}
