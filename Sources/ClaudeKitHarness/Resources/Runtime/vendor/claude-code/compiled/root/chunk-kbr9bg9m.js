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
var chunk_kbr9bg9m_exports = {};
__export(chunk_kbr9bg9m_exports, {
  JCl: () => JCl,
  dd: () => dd
});
module.exports = __toCommonJS(chunk_kbr9bg9m_exports);
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_util = require("util");
var import_vm = require("vm");
var { isProxy: u } = import_util.types, s = import_vm.isContext, r = typeof Bun > "u" ? void 0 : Bun.ant?.isVmContextGlobal, f = (0, import_chunk_wzdjp7c0.f_)(), { add: i, has: a } = WeakSet.prototype, { apply: n } = Reflect, o = /* @__PURE__ */ new WeakSet();
function JCl(t, e) {
  if (e !== void 0 && f && !s(e) && r?.(e) !== true) throw Error("Refusing to make a node:vm context: this Bun cannot recognize a context's global, so sandbox checks could be bypassed. Run Claude Code's native build, whose runtime can.");
  if (n(i, o, [t]), e !== void 0) n(i, o, [e]);
}
function x(t) {
  return n(a, o, [t]);
}
function dd(t) {
  return u(t) || x(t) || typeof t === "object" && t !== null && (s(t) || r?.(t) === true);
}
