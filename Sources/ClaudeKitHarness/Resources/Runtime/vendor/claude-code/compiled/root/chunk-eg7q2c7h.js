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
var chunk_eg7q2c7h_exports = {};
__export(chunk_eg7q2c7h_exports, {
  DZs: () => DZs,
  HZs: () => HZs,
  LZs: () => LZs,
  MZs: () => MZs,
  TLa: () => TLa,
  e9r: () => e9r
});
module.exports = __toCommonJS(chunk_eg7q2c7h_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var g = /^claude-\S+$/;
function MZs(e) {
  let o = e.trim();
  if (!o) return { recognized: false, shape: "empty" };
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty" || !(0, import_chunk_zhr7rpv7.ya)()) return { recognized: true };
  let n = o.toLowerCase(), r = (0, import_chunk_zmb62hr5.Yt)(n).trim();
  if ((0, import_chunk_zmb62hr5.Hw)(n) || (0, import_chunk_zmb62hr5.Hw)(r)) return { recognized: true };
  if ((0, import_chunk_zhr7rpv7.kd)(r) || (0, import_chunk_zhr7rpv7.nte)(r)) return { recognized: true };
  if ((0, import_chunk_865at33z._Ao)(o)) return { recognized: true };
  if ((0, import_chunk_gq1dr8pm.dit)().some((d) => d.value === o)) return { recognized: true };
  if ((0, import_chunk_865at33z.HVi)(r) !== void 0) return { recognized: true };
  if (g.test(n)) return { recognized: true };
  return { recognized: false, ...w(o) };
}
function w(e) {
  let o = e.replace(/^\[(.+)\]$/s, "$1").trim(), n = (0, import_chunk_zhr7rpv7.tte)().models.find((r) => r.display_name.toLowerCase() === o.toLowerCase());
  if (n) return (0, import_chunk_865at33z.GU)(n.id) ? { shape: "display_name" } : { shape: "display_name", suggestion: n.id };
  if (/^\d+$/.test(e)) return { shape: "numeric" };
  if (e.startsWith("[")) return { shape: "bracketed", ...c(o) };
  if (/\s/.test(e)) return { shape: "whitespace", ...c(e) };
  return { shape: "other", ...c(e) };
}
function c(e) {
  let o = e.toLowerCase(), n = [...import_chunk_zmb62hr5.Ece, ...(0, import_chunk_zhr7rpv7.tte)().models.map((a) => a.id)], r = `claude-${o}`, [d] = n.includes(r) ? [r] : (0, import_chunk_xcgcdx61.age)(o, n, 1);
  return d !== void 0 && ((0, import_chunk_zmb62hr5.Hw)(d) || !(0, import_chunk_865at33z.GU)(d)) ? { suggestion: d } : {};
}
function h(e) {
  let o = e.trim(), n = o.toLowerCase();
  if (!(0, import_chunk_zhr7rpv7.Ss)() || g.test(n)) return;
  if ((0, import_chunk_865at33z._Ao)(o) || (0, import_chunk_865at33z.HVi)((0, import_chunk_zmb62hr5.Yt)(n).trim()) !== void 0) return;
  let { suggestion: r } = w(o);
  if (r === void 0 || r === n) return;
  if ((0, import_chunk_zmb62hr5.Hw)(r) && (/\d/.test(n) || n[0] !== r[0] || (0, import_chunk_xcgcdx61.CK)(n, r, 1) > 1)) return;
  return r;
}
function HZs(e, o) {
  let n = (0, import_chunk_865at33z.zZ)("model"), r = o !== void 0 ? ` Did you mean '${o}'?` : n ? ` Run ${n} to see available models.` : " Switch to a different model.";
  return `Model "${e}" is not a recognized model id.${r}`;
}
var DZs = "https://code.claude.com/docs/en/model-config", LZs = `${DZs}#correct-the-window-for-a-gateway-or-custom-model-id`;
function TLa(e, o) {
  if ((0, import_chunk_w578pjby.t)(`[autocompact] ${e.detail}`, { level: "warn" }), o.interactive) return e;
  return o.headless(e.text), null;
}
function e9r(e, o, n) {
  try {
    return M(e, o, n);
  } catch (r) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(r), "unknown-model notice failed")), null;
  }
}
function M(e, o, n) {
  let { source: r, window: d } = (0, import_chunk_bzyb60p0.ES)((0, import_chunk_bzyb60p0.Il)(e, n), o);
  if (r !== "unknown-model") return null;
  let a = (0, import_chunk_865at33z.kPl)(e), m = import_chunk_c203g5kd.s.CLAUDE_CODE_MAX_CONTEXT_TOKENS;
  if (a && m !== void 0 && m > 0) return null;
  let p = d < 1e6, u = [];
  if (a) u.push("set CLAUDE_CODE_MAX_CONTEXT_TOKENS to its real window");
  if (!p) u.push("set a smaller auto-compact window with /autocompact");
  let C = u.length > 0 ? `; if the model accepts ${p ? "more" : "less"}, ${u.join(", or ")}` : "", f = (0, import_chunk_865at33z.Mm)(e), l = h(e);
  return { model: e, window: d, suggestion: l, text: l === void 0 ? `Claude Code doesn't recognize the model "${f}", so it assumes a context window of ${(0, import_chunk_f64qna2j.go)(d)} tokens. Update Claude Code, or see ${LZs} to set the window.` : `Claude Code doesn't recognize the model "${f}". Did you mean "${l}"?`, detail: `"${e}" isn't described by this version's model catalog; update Claude Code, or map it with behavesAs on a modelPicker row (or modelOverrides, if it is a provider id of a model this version knows). Until then auto-compact keeps this session within ${(0, import_chunk_f64qna2j.go)(d)} tokens (the context window it assumes)${C}; CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT=1 restores the previous wait-for-the-API behavior.` };
}
