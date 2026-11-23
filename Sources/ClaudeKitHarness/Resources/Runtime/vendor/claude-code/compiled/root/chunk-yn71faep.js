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
var chunk_yn71faep_exports = {};
__export(chunk_yn71faep_exports, {
  JUt: () => JUt,
  UOi: () => UOi,
  XUt: () => XUt,
  dmo: () => dmo,
  gje: () => gje,
  hje: () => hje
});
module.exports = __toCommonJS(chunk_yn71faep_exports);
function hje(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "tool_reference";
}
function dmo(e, o) {
  return `${e}
${o}`;
}
function XUt(e) {
  return hje(e) && "tool_name" in e && typeof e.tool_name === "string";
}
function JUt(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "tool_result" && "content" in e && Array.isArray(e.content);
}
var u = Object.freeze([]), c = /* @__PURE__ */ new WeakMap();
function UOi(e) {
  let o = c.get(e);
  if (o === void 0) {
    let t = [];
    for (let n of e) {
      if (!JUt(n)) continue;
      for (let r of n.content) if (XUt(r)) t.push({ toolUseId: n.tool_use_id, toolName: r.tool_name });
    }
    o = t.length === 0 ? u : t, c.set(e, o);
  }
  return o;
}
function gje(e, o) {
  let t = [];
  for (let n of e) {
    if (o?.surfacedOnWire !== void 0 && n.type === "attachment" && n.attachment.type === "deferred_tools_delta") {
      let s = n.attachment.surfacedNames;
      for (let l of Array.isArray(s) ? s : []) if (typeof l === "string" && o.surfacedOnWire.has(l)) t.push({ toolUseId: n.uuid, toolName: l });
      continue;
    }
    if (n.type !== "user") continue;
    let r = n.message?.content;
    if (!Array.isArray(r)) continue;
    for (let { toolUseId: s, toolName: l } of UOi(r)) if (typeof s === "string") t.push({ toolUseId: s, toolName: l });
  }
  return t;
}
