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
var chunk_gqe1nb2a_exports = {};
__export(chunk_gqe1nb2a_exports, {
  lN: () => lN,
  r0n: () => r0n
});
module.exports = __toCommonJS(chunk_gqe1nb2a_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_2tqq6ycx = require("/$bunfs/root/chunk-2tqq6ycx.js");
var import_chunk_4fssttte = require("/$bunfs/root/chunk-4fssttte.js");
var import_chunk_ya9q1k3s = require("/$bunfs/root/chunk-ya9q1k3s.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var d = 1e3, u = new import_chunk_pzzqg6s3.ze(() => /* @__PURE__ */ new Set());
function r0n(e, r, o) {
  let n = r.trustedNetworkDirectories;
  if ((0, import_chunk_p1ewvgeh.nLe)(e, n)) return "network";
  let t = (0, import_chunk_n2dbhmj2.xt)(e);
  if (o === "person") return lN(t, r) ? "denied" : void 0;
  if ((0, import_chunk_ya9q1k3s.x4)(e) || (0, import_chunk_ya9q1k3s.x4)(t)) return "network";
  let i = (0, import_chunk_2tqq6ycx.Nq)(e, t, n);
  if (!i.ok) return "network";
  return [t, ...i.pathsToCheck].some((s) => lN(s, r)) ? "denied" : void 0;
}
function lN(e, r) {
  try {
    return c(e, r);
  } catch (o) {
    if ((0, import_chunk_f9x2f6cx.k1e)(o)) return true;
    throw o;
  }
}
function c(e, r) {
  if ((0, import_chunk_p1ewvgeh.nLe)(e, r.trustedNetworkDirectories)) {
    let o = u.of((0, import_chunk_f9x2f6cx.N)());
    if (!o.has(e) && o.size < d) o.add(e), (0, import_chunk_y53wbr8a.a)("tengu_attachment_unc_read_blocked", {});
    return true;
  }
  if ((0, import_chunk_p1ewvgeh._j)(e, r, [e])) return true;
  if ((0, import_chunk_4fssttte.v7)(e, r)) return true;
  return (0, import_chunk_p1ewvgeh.Cjt)(e, r, "read") !== null;
}
