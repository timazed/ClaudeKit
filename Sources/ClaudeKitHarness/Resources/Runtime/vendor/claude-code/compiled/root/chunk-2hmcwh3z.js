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
var chunk_2hmcwh3z_exports = {};
__export(chunk_2hmcwh3z_exports, {
  FIe: () => FIe,
  Izs: () => Izs,
  xve: () => xve
});
module.exports = __toCommonJS(chunk_2hmcwh3z_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_84d4qt5z = require("/$bunfs/root/chunk-84d4qt5z.js");
var import_readline = require("readline");
var E = 5, FIe = 250, Izs = "That answer arrived too quickly after the question to count. Please answer again.";
async function xve(e, s = process.stdin, { ignoreAnswersWithinMs: o = 0, output: n = process.stdout, reaskPreamble: d = "", signal: r } = {}) {
  if (o > 0) {
    if (await R(s, o)) return false;
  }
  if (r?.aborted === true) return false;
  let a = () => {
  }, f = new Promise((c) => {
    a = c;
  }), t = (0, import_readline.createInterface)({ input: s, output: n }), m = 0, l = () => {
    let c = performance.now();
    t.question(`${e} [y/N] `, (b) => {
      if (o > 0 && performance.now() - c < o) {
        if (++m > E) {
          a(false), t.close();
          return;
        }
        n.write(`${d}${Izs}
`), l();
        return;
      }
      let i = b.trim().toLowerCase();
      a(i === "y" || i === "yes"), t.close();
    });
  };
  return l(), t.once("close", () => a(false)), r?.addEventListener("abort", () => t.close(), { once: true }), f;
}
async function R(e, s) {
  let o = "isTTY" in e && e.isTTY === true, n = "isRaw" in e && e.isRaw === true, d = false, r = () => {
    d = true;
  }, a = () => {
  };
  if (e.once("end", r), e.once("close", r), e.on("data", a), o) (0, import_chunk_84d4qt5z.Fv)(e, true);
  try {
    e.resume(), await (0, import_chunk_5appeerh.K)(s);
  } finally {
    if (e.removeListener("data", a), e.removeListener("end", r), e.removeListener("close", r), e.pause(), o) (0, import_chunk_84d4qt5z.Fv)(e, n);
  }
  return d || "readableEnded" in e && e.readableEnded === true || "destroyed" in e && e.destroyed === true;
}
