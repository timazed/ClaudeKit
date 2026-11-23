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
var chunk_5b6xmq1e_exports = {};
__export(chunk_5b6xmq1e_exports, {
  KKr: () => KKr,
  ZYt: () => ZYt
});
module.exports = __toCommonJS(chunk_5b6xmq1e_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
function KKr(t) {
  try {
    let e = import_chunk_865at33z.dhe.of((0, import_chunk_f9x2f6cx.N)().host).value;
    if (e === void 0) return { answer: "not-now" };
    if (e === null) return { answer: "out" };
    let n = e.subscriptionType, r = n === "team" || n === "enterprise";
    if (!r && t.consumerPlans !== "in") return { answer: "out" };
    if (!e.scopes?.includes(import_chunk_ephf358x.uP)) return { answer: "out" };
    let o = !r && n != null, s = (0, import_chunk_2nv4wrez.HV)() !== null;
    if (!s && !o) return { answer: "not-now" };
    let i = (0, import_chunk_2nv4wrez.eD)();
    if (i === void 0) {
      if (!s || (0, import_chunk_2nv4wrez.XYe)() || !(0, import_chunk_2nv4wrez.v9)() || !(0, import_chunk_2nv4wrez.X2i)(e.accessToken)) return { answer: "not-now" };
    } else if (!o || i !== "prosumer_oauth") return { answer: "out" };
    let a = (0, import_chunk_k67pwqya.hvt)();
    if (a === "taint") return { answer: "out" };
    if (a === "pending") return { answer: "not-now" };
    if (t.zeroRetentionOrganizations !== "in" && (0, import_chunk_2zeyvjwb.uo)("zdr")) return { answer: "out" };
    return { answer: "clean", plan: n };
  } catch {
    return { answer: "out" };
  }
}
function ZYt() {
  return (0, import_chunk_865at33z.i_)() || !(0, import_chunk_zhr7rpv7.jn)() || !(0, import_chunk_zhr7rpv7.pc)() || (0, import_chunk_2gtmjt3y.Xn)();
}
