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
var chunk_ek71s4w5_exports = {};
__export(chunk_ek71s4w5_exports, {
  P$i: () => P$i,
  myl: () => myl
});
module.exports = __toCommonJS(chunk_ek71s4w5_exports);
var import_chunk_sps8tde9 = require("/$bunfs/root/chunk-sps8tde9.js");
function a(e) {
  return e?.type === "MemberExpression" ? !e.computed && a(e.property) : e?.type === "Identifier" ? e.name === "Shader" : e?.type === "Literal" && e.value === "Shader";
}
function P$i(e) {
  let s = [];
  return (0, import_chunk_sps8tde9.FS)(e, ({ node: t }) => {
    if (t.type !== "CallExpression") return;
    let { callee: r } = t, [i, o] = t.arguments, n = r.type === "Identifier" && r.name === import_chunk_sps8tde9.UTo, p = a(r) ? i : n && a(i) ? o : void 0;
    if (p?.type === "ObjectExpression" && (0, import_chunk_sps8tde9.BTs)(p)) s.push((0, import_chunk_sps8tde9.$To)(t, p));
  }), s.toSorted((t, r) => r.at.start - t.at.start);
}
function myl(e) {
  let s = /* @__PURE__ */ new Set(), t = [];
  for (let [r, { scanned: i }] of e.files) for (let o of P$i(i.program)) {
    let n = "problem" in o ? o : (0, import_chunk_sps8tde9.BAr)({ spelled: o.spelled, file: r, root: e.root });
    if ("module" in n) s.add(n.module);
    else {
      let p = n.problem.replace("Client", "Shader").replace(/surface module's|\("\.\/board\.tsx"\)$/g, (l) => l.startsWith("(") ? '("./sky.ts")' : "shader's");
      t.push(i.refuse(o.at, p).message);
    }
  }
  return { modules: [...s].sort(), problems: t };
}
