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
var chunk_dwav19je_exports = {};
__export(chunk_dwav19je_exports, {
  aBs: () => aBs,
  b1o: () => b1o
});
module.exports = __toCommonJS(chunk_dwav19je_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var d = 10485760, I = new RegExp(`[${import_chunk_kx2fp6pc.nw}]`, "gu");
function aBs(t) {
  let e = (0, import_chunk_sah8dzn4.As)(t).trimEnd();
  return e.includes(`
`) ? (0, import_chunk_kx2fp6pc.y$)((0, import_chunk_w578pjby._)(e)) : e.replace(I, import_chunk_kx2fp6pc.O3);
}
async function b1o(t) {
  let e = process.stdout.isTTY, n = await (0, import_promises.stat)(t).then((c) => c.size).catch(() => 0);
  if (n > d) await w(t), n = 0;
  let r = p(t), i = null, o = null, a = false;
  return { write(c, y) {
    let s = `[${(/* @__PURE__ */ new Date()).toISOString()}] [${c}] ${aBs(y)}
`;
    if (e) process.stdout.write(s);
    if (a) return;
    if (n += Buffer.byteLength(s), o) o.push(s);
    else r.write(s);
    if (n > d && !i) {
      let S = r, u = [];
      o = u, i = (async () => {
        try {
          await g(S), await w(t), r = p(t), n = 0;
          for (let m of u) n += Buffer.byteLength(m), r.write(m);
        } catch {
        } finally {
          o = null, i = null;
        }
      })();
    }
  }, async close() {
    a = true, await i, await g(r);
  } };
}
function p(t) {
  let e = (0, import_fs.createWriteStream)(t, { flags: "a" });
  return e.on("error", () => {
  }), e;
}
function g(t) {
  return new Promise((e) => {
    if (t.closed) {
      e();
      return;
    }
    t.once("close", () => e()), t.end();
  });
}
async function w(t) {
  let e = `${t}.1`;
  try {
    await (0, import_promises.rename)(t, e);
  } catch (n) {
    if ((0, import_chunk_jv7av99m.J)(n)) return;
    await (0, import_promises.unlink)(e).catch(() => {
    }), await (0, import_promises.rename)(t, e).catch(() => (0, import_promises.unlink)(t).catch(() => {
    }));
  }
}
