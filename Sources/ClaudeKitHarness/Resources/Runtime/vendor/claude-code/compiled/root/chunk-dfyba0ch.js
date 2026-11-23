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
var chunk_dfyba0ch_exports = {};
__export(chunk_dfyba0ch_exports, {
  Ksi: () => Ksi,
  PJt: () => PJt,
  Vsi: () => Vsi,
  YBa: () => YBa,
  kTe: () => kTe,
  qsi: () => qsi,
  x8o: () => x8o,
  z7r: () => z7r
});
module.exports = __toCommonJS(chunk_dfyba0ch_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_m0xr8k74 = require("/$bunfs/root/chunk-m0xr8k74.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_btfm8m05 = require("/$bunfs/root/chunk-btfm8m05.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_crypto = require("crypto");
(0, import_chunk_adx6804h.B)();
var Vsi = "anthropic/connectorFiles", k = 108e4, R = 5e3, z = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/;
function kTe(e) {
  let r = (0, import_chunk_ts09sys6.Wle)(e);
  return r?.carriesFiles === "bytes" && x8o(r.serverId) ? r.serverId : void 0;
}
function x8o(e) {
  return typeof e === "string" && z.test(e);
}
function Ksi(e) {
  let r = e.serverInfo?.name;
  return r && x8o(e.name) && e.name === (0, import_chunk_ts09sys6.Wle)(e)?.serverId ? { name: r, id: e.name.slice(0, 8) } : void 0;
}
function PJt(e) {
  let r = Ksi(e);
  return r ? `${r.name} (${r.id})` : e.name;
}
function z7r(e) {
  return (0, import_chunk_m0xr8k74.w8e)(e) || kTe(e) !== void 0;
}
var b = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ notSent: (0, import_chunk_adx6804h.n)() }), (0, import_chunk_adx6804h.c)({ status: (0, import_chunk_adx6804h.E)().int(), headers: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()), body: (0, import_chunk_adx6804h.n)(), handedOver: (0, import_chunk_adx6804h.P)() })])), y = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ stop: (0, import_chunk_adx6804h.v)(true).optional() }));
async function YBa(e, { parts: r, ...s }, C) {
  let d = (0, import_crypto.randomUUID)(), u = new AbortController(), t = { signal: AbortSignal.any([C, u.signal]), timeout: k }, m = e.request({ method: import_chunk_btfm8m05.XBa, params: { transfer: d, ...s } }, b(), t).then((o) => b().parse(o)), l = m.then(() => ({ stop: true }), () => ({ stop: true }));
  try {
    let o = 0;
    for await (let h of r()) {
      let a = new AbortController(), f = () => a.abort();
      t.signal.addEventListener("abort", f, { once: true });
      try {
        t.signal.throwIfAborted();
        let g = e.request({ method: import_chunk_btfm8m05.Ysi, params: { transfer: d, index: o, bytes: h.toString("base64") } }, y(), { ...t, signal: a.signal }).then((i) => y().parse(i));
        g.catch(() => {
        });
        let { stop: w } = await Promise.race([g, l]).catch(async (i) => {
          let A = (0, import_chunk_5appeerh.K)(R, t.signal);
          if (await Promise.race([l, A]) === void 0) throw i;
          return { stop: true };
        });
        if (w) {
          a.abort();
          break;
        }
      } finally {
        t.signal.removeEventListener("abort", f);
      }
      o++;
    }
  } catch (o) {
    throw u.abort(), o;
  }
  return m;
}
function qsi(e) {
  let r = (0, import_chunk_0jve1fep.Le)(e) ? e._meta : void 0, s = (0, import_chunk_0jve1fep.Le)(r) ? r[Vsi] : void 0;
  return (0, import_chunk_0jve1fep.Le)(s) ? s.inputRequired : void 0;
}
