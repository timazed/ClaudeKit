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
var chunk_kxbewx27_exports = {};
__export(chunk_kxbewx27_exports, {
  cva: () => cva,
  uva: () => uva
});
module.exports = __toCommonJS(chunk_kxbewx27_exports);
var import_chunk_jafhv8vw = require("/$bunfs/root/chunk-jafhv8vw.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var d = ["take_in"];
class r {
  visitors = /* @__PURE__ */ new Map();
}
var l = new import_chunk_pzzqg6s3.ze(() => new r());
function a(o) {
  try {
    return o.pending() === true;
  } catch {
    return false;
  }
}
function cva(o) {
  let e = l.peek(o)?.visitors;
  return e !== void 0 && [...e.values()].some(a);
}
async function uva(o, e) {
  let n = l.peek(o)?.visitors;
  if (n === void 0) return;
  let p = (async () => {
    for (let s of d) {
      let i = n.get(s);
      if (i !== void 0 && !(0, import_chunk_jafhv8vw.g6)(e) && a(i)) try {
        await i.visit(e);
      } catch {
      }
    }
  })();
  if ((0, import_chunk_jafhv8vw.g6)(e)) return;
  let t = () => {
  }, c = new Promise((s) => {
    t = () => s();
  });
  e.addEventListener("abort", t, { once: true });
  try {
    await Promise.race([p, c]);
  } finally {
    e.removeEventListener("abort", t);
  }
}
