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
var chunk_zdtzd1bp_exports = {};
__export(chunk_zdtzd1bp_exports, {
  I6: () => I6,
  oso: () => oso
});
module.exports = __toCommonJS(chunk_zdtzd1bp_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_4s4nxvxt = require("/$bunfs/root/chunk-4s4nxvxt.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_path = require("path");
var import_url = require("url");
function I6(r) {
  if (!(0, import_chunk_2yx6c1y2.KC)(r)) return null;
  try {
    let e = (0, import_chunk_z6pfqf6e.uC)(r), t = (0, import_chunk_z6pfqf6e.uC)((0, import_path.resolve)(e));
    if ((0, import_chunk_z6pfqf6e.ja)(e) || (0, import_chunk_z6pfqf6e.$r)(t) || (0, import_chunk_4s4nxvxt.Bcn)(e) || (0, import_chunk_4s4nxvxt.Bcn)(t)) return null;
    let s = (0, import_url.pathToFileURL)(e);
    return s.hostname !== "" || (0, import_chunk_4s4nxvxt.Sji)(s.href) ? null : s.href;
  } catch {
    return null;
  }
}
function oso(r) {
  let e = /^file:/i.test(r);
  if (!e) {
    if (!(r.startsWith("/") && !(0, import_chunk_z6pfqf6e.$r)(r))) return r;
  }
  let t = e ? r.slice(5) : r;
  if (t.startsWith("//")) {
    if (t = t.slice(2), t === "localhost") t = "/";
    else if (t.startsWith("localhost/")) t = t.slice(9);
  }
  let s = t.search(/[#?]/), u = s === -1 ? "" : t.slice(s), l = s === -1 ? t : t.slice(0, s);
  if (l === "") return null;
  try {
    l = decodeURIComponent(l);
  } catch {
  }
  if (l = h(l), !(0, import_chunk_2yx6c1y2.KC)(l)) return null;
  let f = (0, import_path.isAbsolute)(l) ? l : (0, import_path.resolve)((0, import_chunk_18rsj2ts.pe)(), l), i = I6(f);
  if (i === null) return null;
  let o = i + u;
  return (0, import_chunk_4s4nxvxt.Sji)(o) ? null : o;
}
function h(r, e = import_path.isAbsolute) {
  if (/^\/[A-Za-z]:(?=[\\/]|$)/.test(r) && e(r.slice(1))) return r.slice(1);
  return r;
}
