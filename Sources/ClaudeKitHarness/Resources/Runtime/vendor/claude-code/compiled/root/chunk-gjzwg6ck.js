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
var chunk_gjzwg6ck_exports = {};
__export(chunk_gjzwg6ck_exports, {
  GS: () => GS,
  Yee: () => Yee,
  gO: () => gO
});
module.exports = __toCommonJS(chunk_gjzwg6ck_exports);
function gO(r) {
  let e = Promise.resolve();
  return (...i) => {
    let o = e.then(() => r(...i));
    return e = o.catch(() => {
    }), o;
  };
}
function Yee() {
  let r = Promise.resolve();
  return { acquire() {
    let e = () => {
    }, i = new Promise((t) => {
      e = t;
    }), o = r;
    return r = i, o.then(() => e);
  } };
}
var s = 5;
function GS() {
  let r = /* @__PURE__ */ new Map();
  return { run(e, i) {
    let t = (r.get(e) ?? Promise.resolve()).then(() => i()), n = t.then(() => {
    }, () => {
    });
    return r.set(e, n), n.then(() => {
      if (r.get(e) === n) r.delete(e);
    }), t;
  }, has(e) {
    return r.has(e);
  }, get size() {
    return r.size;
  }, async settle() {
    await Promise.all([...r.values()]);
  }, async drain() {
    for (let e = 0; e < s; e++) {
      let i = [...r.values()];
      if (i.length === 0) return;
      await Promise.all(i);
    }
  }, clear() {
    r.clear();
  } };
}
