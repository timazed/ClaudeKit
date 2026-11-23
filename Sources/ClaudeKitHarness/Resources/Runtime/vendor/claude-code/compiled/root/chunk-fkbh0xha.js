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
var chunk_fkbh0xha_exports = {};
__export(chunk_fkbh0xha_exports, {
  Coi: () => Coi,
  ERn: () => ERn,
  Toi: () => Toi,
  Vor: () => Vor,
  mJt: () => mJt,
  o8o: () => o8o,
  vRn: () => vRn,
  zor: () => zor
});
module.exports = __toCommonJS(chunk_fkbh0xha_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_akwvpp7y = require("/$bunfs/root/chunk-akwvpp7y.js");
var import_chunk_jbjjrhxt = require("/$bunfs/root/chunk-jbjjrhxt.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var ERn = 5, Toi = [301, 302, 303, 307, 308], R = ["content-encoding", "content-language", "content-location", "content-type"], y = "tengu_playful_snail";
function Coi() {
  return (0, import_chunk_sghy0qej.Pe)(y, { safe: true });
}
function zor(e, t) {
  if ((0, import_chunk_akwvpp7y.a2)(e, t)) return true;
  let r = URL.parse(e), o = URL.parse(t);
  return o?.protocol === "http:" && r?.protocol === "https:" && r.hostname === o.hostname && r.port === "" && o.port === "";
}
function vRn(e) {
  let t = URL.parse(e);
  return t !== null && (t.protocol === "http:" || t.protocol === "https:" || !["data:", "blob:", "s3:"].includes(t.protocol) && /^[a-z][a-z0-9+.-]*:\d+(?:[/?#]|$)/.test(t.href));
}
function _(e) {
  if (!vRn(e)) throw (0, import_chunk_cqa9hrgx.m)("mcp_oauth_redirect_guard", "not_web_address"), new import_chunk_jv7av99m.A("Stopped an MCP request because its address is not http or https. Check the server's address in your settings, or ask the server's owner to fix the addresses it gives.");
}
function f(e) {
  let t = URL.parse(e), r = t?.origin === "null" ? /^\d+/.exec(t.pathname)?.[0] : void 0;
  return r === void 0 ? void 0 : `${t?.protocol}${r}`;
}
function o8o(e, t) {
  let r = f(t);
  return async (o, a) => {
    _(o);
    let n = f(o);
    if (n !== void 0 && n !== r) throw (0, import_chunk_cqa9hrgx.m)("mcp_oauth_redirect_guard", "not_the_entrys_host"), new import_chunk_jv7av99m.A("Stopped an MCP request because its address has no http:// or https:// and is not the server address in your settings. Ask the server's owner to fix the addresses it gives.");
    return e(o, a);
  };
}
function mJt(e, t = () => false) {
  return async (r, o) => {
    _(r);
    let a = (o?.method ?? "GET").toUpperCase();
    if (o === void 0 || a === "GET" || a === "HEAD" || (o.redirect ?? "follow") !== "follow" || !Coi() || t(o)) return await e(r, o);
    let n = new URL(r), c = { ...o, redirect: "manual" };
    for (let p = 0; ; p++) {
      let s = await e(n, c), h = Toi.includes(s.status) ? s.headers.get("location") : null;
      if (!h) return s;
      s.body?.cancel().catch(() => {
      });
      let d = URL.parse(h, n), i = d !== null && vRn(d) ? d : null;
      if (i === null || !zor(i.href, n.href)) throw (0, import_chunk_cqa9hrgx.m)("mcp_oauth_redirect_guard", i === null ? "unreadable_location" : "not_same_origin"), new import_chunk_jv7av99m.A(`Stopped an OAuth request, which can hold secrets: ${u(n)} redirected it to ${u(i)}. Ask the owner of ${u(n)} to remove that redirect.`, "Stopped an OAuth request because of where its redirect pointed");
      if (p === ERn) throw (0, import_chunk_cqa9hrgx.m)("mcp_oauth_redirect_guard", "too_many_redirects"), new import_chunk_jv7av99m.A(`Stopped an OAuth request: ${u(n)} redirected it more than ${ERn} times. Ask the owner of ${u(n)} to fix those redirects.`, "Stopped an OAuth request that was redirected too many times");
      if (s.status === 303 || s.status < 303 && a === "POST") {
        let l = new Headers(o.headers);
        for (let g of R) l.delete(g);
        c = { ...o, redirect: "manual", method: "GET", body: void 0, headers: l };
      }
      n = i;
    }
  };
}
function u(e) {
  return e === null || e.origin === "null" ? "an unusable address" : (0, import_chunk_jbjjrhxt.bu)(e.origin).replace(/\/$/, "");
}
function Vor(e) {
  if (e.body === void 0 || e.body === null) return true;
  if (typeof e.body !== "string") return false;
  let t;
  try {
    t = (0, import_chunk_w578pjby.te)(e.body);
  } catch {
    return false;
  }
  return (Array.isArray(t) ? t : [t]).every((r) => typeof r === "object" && r !== null && "jsonrpc" in r && r.jsonrpc === "2.0");
}
