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
var chunk_5ke1b82m_exports = {};
__export(chunk_5ke1b82m_exports, {
  O5e: () => O5e,
  P5e: () => P5e,
  rKl: () => rKl,
  x5e: () => x5e
});
module.exports = __toCommonJS(chunk_5ke1b82m_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_r0q0n8n3 = require("/$bunfs/root/chunk-r0q0n8n3.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_async_hooks = require("async_hooks");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_path2 = require("path");
var import_crypto = require("crypto");
var import_promises2 = require("fs/promises");
var import_crypto2 = require("crypto");
var import_fs = require("fs");
var import_promises3 = require("fs/promises");
var import_path3 = require("path");
var import_promises4 = require("fs/promises");
var import_promises5 = require("fs/promises");
function rKl(r) {
  let o = r ?? (0, import_chunk_18rsj2ts.pe)();
  return (0, import_chunk_2yx6c1y2.eF)(o) ?? (0, import_chunk_w5s307zm.dr)(o) ?? (0, import_chunk_f9x2f6cx.Te)();
}
var x5e = new import_async_hooks.AsyncLocalStorage();
var P5e = "cc-plugin-diff";
var M = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])(\.|$)/i;
var u = 64;
var j = 12;
var R = { realpath: false, retries: { retries: 10, minTimeout: 5, maxTimeout: 100 }, onCompromised: (r) => {
  (0, import_chunk_w578pjby.t)(`$.store lock compromised: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" });
} };
function x() {
  let r = /* @__PURE__ */ new Map();
  return (o) => {
    let e = r.get(o) ?? (0, import_chunk_865at33z.JGe)();
    return r.set(o, e), e;
  };
}
var B = /^[a-z0-9._-]+$/;
var U = x();
function y(r) {
  if (B.test(r) && !M.test(r) && r.length <= u && r !== "." && r !== "..") return `${r}.json`;
  let e = r.replace(/[^a-zA-Z0-9_-]/g, "_"), n = (0, import_crypto.createHash)("sha256").update(r).digest("hex").slice(0, j);
  return `${e.slice(0, u) || "plugin"}-${n}.json`;
}
var f = (r) => (0, import_path2.join)((0, import_chunk_wj4me9k5.Mc)(), "store", y(r));
async function k(r) {
  let o = f(r);
  return await (0, import_promises.mkdir)((0, import_path.dirname)(o), { recursive: true, mode: 448 }), o;
}
async function G(r, o) {
  let e = /* @__PURE__ */ new Date();
  try {
    await (0, import_promises2.utimes)(o, e, e);
  } catch (n) {
    (0, import_chunk_w578pjby.t)(`$.store (${r}): could not touch ${o}: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "warn" });
  }
}
async function g(r) {
  let o = await (0, import_promises4.readFile)(f(r), "utf8").catch((e) => {
    if ((0, import_chunk_jv7av99m.J)(e)) return;
    throw e;
  });
  return o === void 0 ? void 0 : [r, o];
}
async function S(r) {
  let o = await (0, import_chunk_xcgcdx61.EB)(r).reduce(async (i, s) => await i ?? g(s), Promise.resolve(void 0));
  if (o === void 0) return false;
  let [e, n] = o, a = f(r), m = `${a}.carry-${(0, import_crypto2.randomUUID)()}`;
  try {
    if (!(0, import_chunk_ma3kja9f.T)((0, import_chunk_w578pjby.te)(n))) return false;
    return await (0, import_promises3.mkdir)((0, import_path3.dirname)(a), { recursive: true }), await (0, import_promises3.writeFile)(m, n, { flag: "wx" }), await (0, import_promises3.link)(m, a).catch(async (i) => {
      if ((0, import_chunk_jv7av99m.w)(i) === "EEXIST") throw i;
      await (0, import_promises3.copyFile)(m, a, import_fs.constants.COPYFILE_EXCL);
    }), true;
  } catch (i) {
    let s = (0, import_chunk_jv7av99m.w)(i) === "EEXIST";
    return (0, import_chunk_w578pjby.t)(`$.store (${r}): ` + (s ? `${e}'s store was carried by another session` : `could not carry ${e}'s store: ${(0, import_chunk_jv7av99m.d)(i)}`), { level: s ? "debug" : "warn" }), s;
  } finally {
    await (0, import_promises3.unlink)(m).catch(() => {
      return;
    });
  }
}
async function fr(r, o) {
  try {
    return await (0, import_promises5.readFile)(o, "utf8");
  } catch (e) {
    if (!(0, import_chunk_jv7av99m.J)(e)) throw e;
  }
  if (!await S(r)) return;
  try {
    return await (0, import_promises5.readFile)(o, "utf8");
  } catch (e) {
    if ((0, import_chunk_jv7av99m.J)(e)) return;
    throw e;
  }
}
var I = { async read(r) {
  let o = f(r), e;
  try {
    e = await fr(r, o);
  } catch (a) {
    throw new import_chunk_hcg738hf.je(`${r}: store file ${o} is unreadable (${(0, import_chunk_jv7av99m.d)(a)})`);
  }
  if (e === void 0) return {};
  let n;
  try {
    n = (0, import_chunk_w578pjby.te)(e);
  } catch (a) {
    throw new import_chunk_hcg738hf.je(`${r}: store file ${o} is malformed (${(0, import_chunk_jv7av99m.d)(a)})`);
  }
  if (!(0, import_chunk_ma3kja9f.T)(n)) throw new import_chunk_hcg738hf.je(`${r}: store file ${o} is malformed (the JSON is not an object)`);
  return await G(r, o), n;
}, write: async (r, o) => (0, import_chunk_q7qjcthc.yr)(await k(r), `${(0, import_chunk_w578pjby._)(o, null, 2)}
`, 384), async lock(r) {
  let o = await k(r);
  return (0, import_chunk_2yx6c1y2.Rc)(o, { lockfilePath: `${o}.lock`, ...R });
} };
function F() {
  let r = (0, import_chunk_r0q0n8n3.Xr)();
  return { setBackend: r.set, backendOverride: r.get };
}
var wr = F();
var C = () => wr.backendOverride() ?? I;
var c = 256;
async function O(r, o, e) {
  try {
    if (r.event !== "keys" && r.key.length > c) throw new import_chunk_hcg738hf.je(`${o}: $.store.${r.event}: the key is ${r.key.length} characters, over the ${c} limit`);
    let n = C(), m = r.event === "set" || r.event === "delete" ? await n.lock?.(o) : void 0;
    try {
      e?.();
      let i = await n.read(o);
      switch (r.event) {
        case "get":
          return Object.hasOwn(i, r.key) ? i[r.key] : void 0;
        case "keys":
          return Object.keys(i);
        case "set": {
          let s = { ...i, [r.key]: r.value }, l = (0, import_chunk_w578pjby._)(s).length;
          if (l > import_chunk_0w2wb7gk.Yre) throw new import_chunk_hcg738hf.je(`${o}: $.store.set: the store would be ${l} characters, over the ${import_chunk_0w2wb7gk.Yre} limit`);
          await n.write(o, s), (0, import_chunk_w578pjby.t)(`$.store.set (${o}): ${r.key}`);
          return;
        }
        case "delete": {
          if (!Object.hasOwn(i, r.key)) return;
          let s = { ...i };
          delete s[r.key], await n.write(o, s);
          return;
        }
      }
    } finally {
      await (0, import_chunk_2yx6c1y2.Kg)(m, `$.store.${r.event} (${o})`);
    }
  } catch (n) {
    if (n instanceof import_chunk_hcg738hf.je) throw n;
    throw new import_chunk_hcg738hf.je(`${o}: $.store.${r.event} failed: ${(0, import_chunk_jv7av99m.d)(n)}`);
  }
}
function O5e(r, o) {
  let e = x5e.getStore(), n = performance.now();
  return U(o)(() => O(r, o, () => e?.waited(performance.now() - n)));
}
