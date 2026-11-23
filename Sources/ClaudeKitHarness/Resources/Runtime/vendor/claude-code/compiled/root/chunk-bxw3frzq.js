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
var chunk_bxw3frzq_exports = {};
__export(chunk_bxw3frzq_exports, {
  IDt: () => IDt,
  cNa: () => cNa
});
module.exports = __toCommonJS(chunk_bxw3frzq_exports);
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_qf73a9we = require("/$bunfs/root/chunk-qf73a9we.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var l = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ eval: (0, import_chunk_adx6804h.E)().refine(Number.isSafeInteger), status: (0, import_chunk_adx6804h.n)().optional().catch(void 0) })), m = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ kind: (0, import_chunk_adx6804h.v)(import_chunk_qf73a9we.kE), fields: l() }));
function IDt(t, a) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return;
  let r = m().safeParse(a);
  if (r.success) return u(r.data.fields);
  let d = /^<event\b([^>]*)>(?:\n(\{[^\n]*\})\n<\/event(?: nonce="([A-Za-z0-9_-]+)")?>$)?/, [, e, s, f] = d.exec(t) ?? [];
  if (e === void 0 || !e.includes(` kind="${import_chunk_qf73a9we.kE}"`)) return;
  let i = / eval="(\d+)"/.exec(e)?.[1];
  if (i !== void 0) return { evalId: Number(i), status: / status="([^"]*)"/.exec(e)?.[1] };
  if (s === void 0 || f !== / nonce="([A-Za-z0-9_-]+)"/.exec(e)?.[1]) return;
  let o = l().safeParse((0, import_chunk_0jve1fep.et)(s, false));
  return o.success ? u(o.data) : void 0;
}
function cNa(t) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return [];
  let a = /<event\b[^>]*>(?:\n\{[^\n]*\}\n<\/event(?: nonce="[A-Za-z0-9_-]+")?>)?/g, r = [];
  for (let [d] of t.matchAll(a)) {
    let e = IDt(d, void 0);
    if (e !== void 0) r.push(e);
  }
  return r;
}
function u(t) {
  return { evalId: t.eval, status: t.status };
}
