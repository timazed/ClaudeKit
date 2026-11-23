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
var chunk_qt3kq0hf_exports = {};
__export(chunk_qt3kq0hf_exports, {
  KBa: () => KBa,
  vsr: () => vsr
});
module.exports = __toCommonJS(chunk_qt3kq0hf_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_dfyba0ch = require("/$bunfs/root/chunk-dfyba0ch.js");
var import_chunk_btfm8m05 = require("/$bunfs/root/chunk-btfm8m05.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_stream = require("stream");
(0, import_chunk_adx6804h.B)();
var u = 36e4;
function vsr(o) {
  let r = (0, import_chunk_ts09sys6.Wle)(o);
  return r?.carriesDownloads === true && (0, import_chunk_dfyba0ch.x8o)(r.serverId) && !(0, import_chunk_865at33z.Vg)() ? r.serverId : void 0;
}
var m = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)())), f = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ notFetched: (0, import_chunk_adx6804h.n)() }), (0, import_chunk_adx6804h.c)({ status: (0, import_chunk_adx6804h.E)().int(), headers: m(), read: (0, import_chunk_adx6804h.n)() }), (0, import_chunk_adx6804h.c)({ status: (0, import_chunk_adx6804h.E)().int(), headers: m(), body: (0, import_chunk_adx6804h.n)() })])), d = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ bytes: (0, import_chunk_adx6804h.n)(), done: (0, import_chunk_adx6804h.P)() }));
async function KBa(o, r, s) {
  let t = await o.connection(), e = f().parse(await t.request({ method: import_chunk_btfm8m05.JBa, params: { ...r } }, f(), { signal: s, timeout: u }));
  if ("notFetched" in e) return e;
  let { status: i, headers: a } = e;
  return { status: i, headers: a, body: "read" in e ? b(t, e.read, s) : import_stream.Readable.from([Buffer.from(e.body)]) };
}
function b(o, r, s) {
  let t = false, e = import_stream.Readable.from((async function* () {
    while (!t) {
      let { bytes: i, done: a } = d().parse(await o.request({ method: import_chunk_btfm8m05.P8o, params: { id: r } }, d(), { signal: s, timeout: u }));
      if (t = a, i !== "") yield Buffer.from(i, "base64");
    }
  })(), { objectMode: false });
  return e.once("close", () => {
    if (!t) t = true, o.request({ method: import_chunk_btfm8m05.P8o, params: { id: r, close: true } }, d(), { timeout: u }).catch(() => {
      return;
    });
  }), e;
}
