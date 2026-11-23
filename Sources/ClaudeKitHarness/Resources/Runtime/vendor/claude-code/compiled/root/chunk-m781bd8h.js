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
var chunk_m781bd8h_exports = {};
__export(chunk_m781bd8h_exports, {
  JOa: () => JOa,
  Kve: () => Kve,
  Wht: () => Wht,
  ZKr: () => ZKr,
  fTn: () => fTn,
  hTn: () => hTn,
  hW: () => hW,
  iMe: () => iMe,
  ier: () => ier,
  kHt: () => kHt,
  mTn: () => mTn,
  o7t: () => o7t,
  pTn: () => pTn,
  ser: () => ser
});
module.exports = __toCommonJS(chunk_m781bd8h_exports);
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_a9c4wn56 = require("/$bunfs/root/chunk-a9c4wn56.js");
var ZKr = "target is this session itself \u2014 there is no one else to send to", u = `address the main conversation as "${import_chunk_865at33z.cS}"`;
function fTn(e) {
  let { ownMessagingSocket: s } = require("/$bunfs/root/chunk-8s2jrd7d.js"), n = s();
  return n !== void 0 && (0, import_chunk_xfj2cwfv.wXe)(e, n);
}
function Wht(e) {
  let { ownMessagingSocket: s } = require("/$bunfs/root/chunk-8s2jrd7d.js"), n = s();
  return n !== void 0 && (0, import_chunk_xfj2cwfv.jNe)(e, n);
}
function d(e) {
  let { ownMessagingSocket: s } = require("/$bunfs/root/chunk-8s2jrd7d.js"), n = s(), t = (0, import_chunk_865at33z.yde)(e);
  return n !== void 0 && t !== null && (0, import_chunk_865at33z.N4i)(t.ref, n);
}
function ser(e, s) {
  return d(e) && !fTn(s);
}
function ier(e) {
  return `'${e}' is the name-and-ref token this session advertises for ITSELF, yet a different session record on this machine claims it \u2014 not sent. A record impersonating this session is suspicious: ask the user. (If you meant yourself, there is no one to send to.)`;
}
function JOa(e) {
  return `Not sent \u2014 '${e}' is this session's own name and ref, but another session record on this machine claims it.`;
}
function kHt(e) {
  return `'${e}' is this session's own address \u2014 a message or file sent there would only come back to this conversation; there is no one else at that address to send to.`;
}
function iMe(e) {
  let s = (0, import_chunk_t39bs2jr.Un)(e);
  return [(0, import_chunk_r60bafc1.vre)()?.bridgeSessionId, (0, import_chunk_a9c4wn56._le)()].some((n) => typeof n === "string" && (0, import_chunk_t39bs2jr.Un)(n) === s);
}
function hW(e) {
  return e.teammateContext !== void 0 || e.agentContext !== void 0 && (0, import_chunk_865at33z.ghe)(e.agentContext);
}
function o7t(e) {
  return `Not sent \u2014 '${e}' is this session's own name.`;
}
function pTn(e, s, n = u) {
  let { getRegisteredSessionName: t } = require("/$bunfs/root/chunk-qqt6ey13.js"), o = (0, import_chunk_865at33z.vPr)(t()?.name), i = o === null ? "this session" : `this session ("${o}")`;
  return s ? `
('${e}' also addresses ${i} \u2014 this process's main session; to reach the main conversation from inside it, ${n}.)` : `
('${e}' also addresses ${i} itself \u2014 if you meant yourself, there is no one to send to.)`;
}
function mTn(e) {
  return !e.cloudUnavailable && !e.bridgeUnavailable && !e.localUnavailable && !e.searchTruncated && !e.pinnedIdentityClaimedLocally;
}
function hTn(e) {
  let { getRegisteredSessionName: s, getHeldSessionNames: n } = require("/$bunfs/root/chunk-qqt6ey13.js"), { ownMessagingSocket: t } = require("/$bunfs/root/chunk-8s2jrd7d.js"), o = s(), i = t();
  if (o === void 0 || i === void 0 || (0, import_chunk_xfj2cwfv.Wb)(e).scheme !== "other") return "no";
  let r = (0, import_chunk_865at33z.yde)(e);
  if (r !== null) {
    let a = (0, import_chunk_865at33z.$s)(r.name);
    if (!(0, import_chunk_865at33z.N4i)(r.ref, i)) return "no";
    if (a !== (0, import_chunk_865at33z.$s)(o.name)) {
      let c = n().get(a);
      if (c === void 0) return "no";
      return c === "derived" ? "categorical" : "note";
    }
  } else if ((0, import_chunk_865at33z.$s)(e) !== (0, import_chunk_865at33z.$s)(o.name)) return "no";
  let { getSessionNamingState: l } = require("/$bunfs/root/chunk-zdrnxdty.js");
  return o.source === "derived" || (o.source === "user" || o.source === "collision") && l().userTypedName === o.name ? "categorical" : "note";
}
function Kve(e, s, n = u) {
  let { getRegisteredSessionName: t } = require("/$bunfs/root/chunk-qqt6ey13.js"), o = (0, import_chunk_865at33z.vPr)(t()?.name);
  if (s) {
    let i = o !== null ? ` ("${o}" is the name OTHER sessions use for it)` : "";
    return `'${e}' is this process's own main session${i} \u2014 from inside it, ${n} instead.`;
  }
  return o !== null ? `'${e}' is this session itself \u2014 "${o}" is the name other sessions use to message YOU; there is no one else by that name to send to.` : `'${e}' is this session itself \u2014 there is no one else at that address to send to.`;
}
