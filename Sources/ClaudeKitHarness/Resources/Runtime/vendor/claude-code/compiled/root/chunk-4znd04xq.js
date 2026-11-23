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
var chunk_4znd04xq_exports = {};
__export(chunk_4znd04xq_exports, {
  S5r: () => S5r,
  b5r: () => b5r,
  fDt: () => fDt,
  sXl: () => sXl
});
module.exports = __toCommonJS(chunk_4znd04xq_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_2xjdqky3 = require("/$bunfs/root/chunk-2xjdqky3.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var v = { env: "from CLAUDE_CODE_AUTO_COMPACT_WINDOW", "unknown-model": "default for an unrecognized model", "model-default": "default for this model", settings: "from settings" };
function A(o, t) {
  let { window: u, configured: e, source: r } = (0, import_chunk_bzyb60p0.ES)(o, t), p = e > u ? ` \xB7 capped to ${(0, import_chunk_f64qna2j.go)(u)} by model` : "", n = r === "auto" ? "auto" : r === "experiment" || r === "clientdata" ? `auto (${(0, import_chunk_f64qna2j.go)(e)} tokens)${p}` : `${(0, import_chunk_f64qna2j.go)(e)} tokens (${v[r]})${p}`, i = [`Auto-compact window for ${(0, import_chunk_865at33z.yi)(o.settingsKey)}: ${n}`], d = (0, import_chunk_bzyb60p0.Z_t)(import_chunk_c203g5kd.s.CLAUDE_CODE_AUTO_COMPACT_WINDOW);
  if (d !== null) i.push(d);
  if (!(0, import_chunk_2xjdqky3.om)()) i.push("Auto-compact is off (see /config)");
  if (i.push("Auto-compact summarizes the conversation as the context nears this size, or your model's maximum context window if that is smaller."), S5r(o.settingsKey)) i.push("The auto setting picks a window tuned for your model and is strongly recommended for the best cost and performance.");
  if ((0, import_chunk_bzyb60p0.eyt)(r) && b5r(o, e)) i.push("Overriding auto may result in high token usage, especially when resuming long sessions.");
  return i.join(`
`);
}
function S5r(o) {
  return !(0, import_chunk_k67pwqya.$wl)(o);
}
function b5r(o, t) {
  return Math.min((0, import_chunk_bzyb60p0.bx)(o), t) > (0, import_chunk_bzyb60p0.Gdi)(o).window;
}
async function fDt(o, t, u) {
  let e = (0, import_chunk_bzyb60p0.Il)(t.loopModel);
  if ((0, import_chunk_bzyb60p0.ES)(e, void 0).source === "env") return "CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting.";
  let r = o.trim().toLowerCase(), n = r === "reset" || r === "unset" || r === "default" ? "auto" : (0, import_chunk_bzyb60p0.Uar)(r);
  if (n === void 0) return `Couldn't parse '${o}'. Expected 'auto' or at least 100k tokens (e.g. 500k, 200000, or 200 as shorthand)`;
  let i = n === "auto" ? void 0 : n, d = (0, import_chunk_bzyb60p0.mZt)(e, t.options.autoCompactWindow), { error: w } = await (0, import_chunk_2yx6c1y2.Mr)("userSettings", (0, import_chunk_k67pwqya.nWi)(t.loopModel, { autoCompactWindow: n }, { autoCompactWindow: i }), void 0, t.storageV5);
  if (w) return `Couldn't save setting: ${w.message}`;
  (0, import_chunk_bzyb60p0.D6a)(e.settingsKey, n);
  let { window: m, configured: C, source: y } = (0, import_chunk_bzyb60p0.ES)(e, (0, import_chunk_bzyb60p0.TPn)()), c = (y === "settings" ? C : void 0) !== i;
  t.onQueryEvent?.({ type: "apply_flag_settings", settings: { autoCompactWindow: null } }), (0, import_chunk_y53wbr8a.a)("tengu_autocompact_command", { action: (0, import_chunk_78g0060s.S)(n === "auto" ? "auto" : "set"), ...i !== void 0 && { tokens: i }, window_model: (0, import_chunk_865at33z.Xt)(e.settingsKey), previous_tokens: d.window, previous_origin: (0, import_chunk_78g0060s.f)(d.origin), resulting_tokens: m, overridden: c, route: (0, import_chunk_78g0060s.f)(u) });
  let l = `Auto-compact window for ${(0, import_chunk_865at33z.yi)(e.settingsKey)}`;
  if (n === "auto") return c ? `${l} set to auto in settings, but a higher-priority override is active (${(0, import_chunk_f64qna2j.go)(m)} tokens)` : `${l} set to auto`;
  let g = "";
  if (c) g = `, but a higher-priority override is active (${(0, import_chunk_f64qna2j.go)(m)} tokens)`;
  else if (m < n) g = ` (capped to model limit of ${(0, import_chunk_f64qna2j.go)(m)})`;
  return `${l} set to ${(0, import_chunk_f64qna2j.go)(n)} tokens${g}`;
}
var sXl = async (o, t) => {
  let u = o.trim();
  if (!u) return { type: "text", value: A((0, import_chunk_bzyb60p0.Il)(t.loopModel), t.options.autoCompactWindow) };
  return { type: "text", value: await fDt(u, t, "noninteractive") };
};
