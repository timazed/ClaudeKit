const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_6d79247d_exports = {};
__export(chunk_6d79247d_exports, {
  Foi: () => Foi
});
module.exports = __toCommonJS(chunk_6d79247d_exports);
var r;
r = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? Promise.resolve().then(() => __toESM(require("crypto"))).then((e) => e.webcrypto);
async function i(e) {
  return (await r).getRandomValues(new Uint8Array(e));
}
async function l(e) {
  let t = "", c = await i(e);
  for (let n = 0; n < e; n++) {
    let o = c[n] % 66;
    t += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~"[o];
  }
  return t;
}
async function s(e) {
  return await l(e);
}
async function u(e) {
  let a = await (await r).subtle.digest("SHA-256", new TextEncoder().encode(e));
  return btoa(String.fromCharCode(...new Uint8Array(a))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
}
async function Foi(e) {
  if (!e) e = 43;
  if (e < 43 || e > 128) throw `Expected a length between 43 and 128. Received ${e}.`;
  let a = await s(e), t = await u(a);
  return { code_verifier: a, code_challenge: t };
}
