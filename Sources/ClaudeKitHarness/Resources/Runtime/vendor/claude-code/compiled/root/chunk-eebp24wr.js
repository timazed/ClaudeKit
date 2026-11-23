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
var chunk_eebp24wr_exports = {};
__export(chunk_eebp24wr_exports, {
  Kre: () => Kre
});
module.exports = __toCommonJS(chunk_eebp24wr_exports);
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var a = (0, import_chunk_w1d7ygsk.V)(function(u) {
  function c(t) {
    let r = {};
    if (t = t.replace(/^\?/, ""), t) for (let n of t.split("&")) {
      let [e, s = null] = n.split("=");
      if (e = decodeURIComponent(e), s) s = decodeURIComponent(s);
      if (!(e in r)) r[e] = s;
      else if (Array.isArray(r[e])) r[e].push(s);
      else r[e] = [r[e], s];
    }
    return r;
  }
  u.parseQueryString = c;
});
var Kre = (0, import_chunk_w1d7ygsk.V)(function(y) {
  var l = a(), i = (t) => {
    if (typeof t === "string") return i(new URL(t));
    let { hostname: r, pathname: n, port: e, protocol: s, search: o } = t, p;
    if (o) p = l.parseQueryString(o);
    return { hostname: r, port: e ? parseInt(e) : void 0, protocol: s, path: n, query: p };
  };
  y.parseUrl = i;
});
