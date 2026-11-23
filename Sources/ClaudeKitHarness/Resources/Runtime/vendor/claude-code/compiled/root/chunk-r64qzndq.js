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
var chunk_r64qzndq_exports = {};
__export(chunk_r64qzndq_exports, {
  NYr: () => NYr,
  Oor: () => Oor,
  j9o: () => j9o
});
module.exports = __toCommonJS(chunk_r64qzndq_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_http = require("http");
function Oor(n) {
  let r = Array.isArray(n) ? n[0] : n;
  return r ? r : void 0;
}
var f = 3118;
function p() {
  return { range: (0, import_chunk_cg8dqz0a.x)() === "windows" ? { min: 39152, max: 49151 } : { min: 49152, max: 65535 }, fallback: f };
}
function j9o(n = f) {
  return `http://localhost:${n}/callback`;
}
function A() {
  let n = import_chunk_c203g5kd.s.MCP_OAUTH_CALLBACK_PORT;
  return n !== void 0 && n <= 65535 ? n : void 0;
}
async function NYr(n, r = p()) {
  let t = A();
  if (t) return t;
  if (n && await i(n)) return n;
  let { min: e, max: o } = r.range, a = o - e + 1, l = Math.min(a, 100);
  for (let d = 0; d < l; d++) {
    let c = e + Math.floor(Math.random() * a);
    if (await i(c)) return c;
  }
  if (await i(r.fallback)) return r.fallback;
  let u = await m(0);
  if (u !== void 0) return u;
  throw Error("No available ports for OAuth redirect");
}
async function i(n) {
  return await m(n) !== void 0;
}
async function m(n) {
  try {
    return await new Promise((r, t) => {
      let e = (0, import_http.createServer)();
      e.once("error", t), e.listen(n, "127.0.0.1", () => {
        let o = e.address(), a = typeof o === "object" && o ? o.port : void 0;
        e.close(() => a !== void 0 ? r(a) : t(Error("no address on bound server")));
      });
    });
  } catch {
    return;
  }
}
