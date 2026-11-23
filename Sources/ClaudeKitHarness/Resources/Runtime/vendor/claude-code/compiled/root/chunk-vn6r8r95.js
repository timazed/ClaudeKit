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
var chunk_vn6r8r95_exports = {};
__export(chunk_vn6r8r95_exports, {
  oho: () => oho
});
module.exports = __toCommonJS(chunk_vn6r8r95_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class u {
  deps;
  loggedDowngrade = false;
  constructor(e) {
    this.deps = e;
  }
  resolve() {
    return this.decide().state;
  }
  verdict() {
    return this.decide().verdict;
  }
  decide() {
    return { state: { member: false }, verdict: "external_build" };
  }
}
var m = null;
var S = new import_chunk_2904xtvq.j(() => new u(() => m));
function p(e, r) {
  if (!Array.isArray(e)) return false;
  return P(e, r.mainModelOverrideKeys());
}
function P(e, r) {
  let o = /* @__PURE__ */ new Set(), i = [];
  for (let t of e) {
    if (typeof t !== "string") continue;
    if (t.length > 1 && t.endsWith("*")) i.push(t.slice(0, -1));
    else o.add(t);
  }
  if (o.size === 0 && i.length === 0) return false;
  return r.some((t) => o.has(t) || i.some((n) => t.startsWith(n)));
}
function v(e) {
  if (!e || typeof e !== "object") return {};
  let r = e, o = (t) => typeof t === "string" && t.trim() !== "" ? t : void 0, i = r.severity;
  return { model: o(r.model), s1Suffix: o(r.s1Suffix), s2Suffix: o(r.s2Suffix), s1Prefill: o(r.s1Prefill)?.trimEnd(), severity: i !== null && typeof i === "object" ? i : void 0 };
}
function oho(e) {
  if (typeof e === "string") return e;
  if (!Array.isArray(e)) return "";
  return e.filter((r) => r != null && r.type === "text" && typeof r.text === "string").map((r) => r.text).join(`
`);
}
