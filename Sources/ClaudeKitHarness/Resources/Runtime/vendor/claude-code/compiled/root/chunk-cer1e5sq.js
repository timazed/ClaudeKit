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
var chunk_cer1e5sq_exports = {};
__export(chunk_cer1e5sq_exports, {
  AIt: () => AIt,
  M2s: () => M2s,
  Nwn: () => Nwn,
  WWr: () => WWr,
  dW: () => dW,
  lW: () => lW
});
module.exports = __toCommonJS(chunk_cer1e5sq_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_stream = require("stream");
(0, import_chunk_bs4h6795.G)();
function p() {
}
var Nwn = (0, import_chunk_bs4h6795.an)(false), M2s = (0, import_chunk_bs4h6795.an)(void 0);
function lW(r) {
  let i = (0, import_chunk_sng02qpc.k)(5), { children: t } = r, { exit: n } = (0, import_chunk_8bkqeb5d.gx)(), a, o;
  if (i[0] !== n) a = () => {
    let m = setTimeout(n, 0);
    return () => clearTimeout(m);
  }, o = [n], i[0] = n, i[1] = a, i[2] = o;
  else a = i[1], o = i[2];
  (0, import_chunk_bs4h6795.It)(a, o);
  let s;
  if (i[3] !== t) s = (0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: t }), i[3] = t, i[4] = s;
  else s = i[4];
  return s;
}
async function dW(r, t) {
  r.render((0, import_chunk_a46xeenj.e)(lW, { children: t })), await r.waitUntilExit();
}
async function AIt(r, t) {
  let n = { columns: (0, import_chunk_xcgcdx61.pHo)(t).columns, signal: t.signal ?? new AbortController().signal, pending: [], answers: /* @__PURE__ */ new Map() }, i = (0, import_chunk_a46xeenj.e)(M2s, { value: n, children: r });
  for (; ; ) {
    let a = await f(i, t), o = await Promise.all(n.pending.splice(0));
    if (n.signal.aborted) throw new import_chunk_jv7av99m.Ie();
    if (o.length === 0) return a;
  }
}
async function WWr(r, t) {
  let n = await AIt(r, t);
  return (0, import_chunk_wbk1hf21.Dr)(n);
}
async function f(r, { columns: t, storageV5: n }) {
  let i = "", a = false, o = new import_stream.PassThrough();
  if (t !== void 0) o.columns = t;
  return o.on("data", (s) => {
    if (a) return;
    a = true, i = s.toString();
  }), await (await (0, import_chunk_8bkqeb5d.cY)((0, import_chunk_a46xeenj.e)(lW, { children: (0, import_chunk_a46xeenj.e)(Nwn.Provider, { value: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_3jkk3v3z.kjr, { value: p, children: r }) }) }), { stdout: o, stdin: new import_stream.PassThrough(), patchConsole: false }, { storageV5: n })).waitUntilExit(), i;
}
