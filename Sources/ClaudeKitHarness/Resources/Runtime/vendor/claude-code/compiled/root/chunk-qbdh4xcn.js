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
var chunk_qbdh4xcn_exports = {};
__export(chunk_qbdh4xcn_exports, {
  SNa: () => SNa,
  bNa: () => bNa,
  brr: () => brr
});
module.exports = __toCommonJS(chunk_qbdh4xcn_exports);
var brr = "you are not signed in, or this machine is not authorized to write to the session", SNa = "without your deny and ask rules";
function bNa({ completion: n, status: a, description: s = u, afterFirstReply: m = r }) {
  let t;
  n.then((e) => {
    t = { outcome: e, atMs: Date.now() };
  });
  let d = m, o, l = new Promise((e) => {
    o = e;
  });
  return { completion: n, status: a, description: s, outcome: () => t?.outcome, settledAtMs: () => t?.atMs, async afterFirstReply(e) {
    let i = d;
    if (d = null, i === null) return r();
    try {
      return await i(e, o);
    } finally {
      o(void 0);
    }
  }, readBack: l };
}
function r() {
  return Promise.resolve("skipped");
}
function u() {
  return null;
}
