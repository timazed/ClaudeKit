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
var chunk_1m0ck3v8_exports = {};
__export(chunk_1m0ck3v8_exports, {
  AI: () => AI,
  _ft: () => _ft,
  o1e: () => o1e,
  tBl: () => tBl,
  z0r: () => z0r
});
module.exports = __toCommonJS(chunk_1m0ck3v8_exports);
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
function _ft(r) {
  return r.replace(/:\d+$/, "");
}
var e = "gitlab.com", o = "bitbucket.org", tBl = { github: import_chunk_43nz5n02.Vr, gitlab: e, bitbucket: o }, n = { "ssh.github.com": "github", "altssh.gitlab.com": "gitlab", "altssh.bitbucket.org": "bitbucket" };
function AI(r) {
  if (r = _ft(r), (0, import_chunk_43nz5n02.Ro)(r)) return "github";
  let t = (0, import_chunk_43nz5n02.Qqt)(r), i = n[t];
  if (i) return i;
  if (t === e) return "gitlab";
  if (t === o) return "bitbucket";
  return "other";
}
function o1e(r) {
  let t = r.trim();
  if ((0, import_chunk_43nz5n02.Rge)(t) || (0, import_chunk_sah8dzn4._J)(t) || (0, import_chunk_73gwqz1r.Age)(t)) return null;
  if (t.includes("://")) try {
    return new URL(t).hostname || null;
  } catch {
    return null;
  }
  return /^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1] ?? null;
}
function z0r(r) {
  let t = /^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);
  return t && !(0, import_chunk_sah8dzn4._J)(r) ? { user: t[1], host: t[2], path: t[3] } : null;
}
