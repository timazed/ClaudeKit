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
var chunk_bdxnb0gq_exports = {};
__export(chunk_bdxnb0gq_exports, {
  Bma: () => Bma,
  IVe: () => IVe,
  MVe: () => MVe,
  Uma: () => Uma,
  e5t: () => e5t,
  nBs: () => nBs,
  nUr: () => nUr,
  oBs: () => oBs,
  rBs: () => rBs
});
module.exports = __toCommonJS(chunk_bdxnb0gq_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_ag2pf657 = require("/$bunfs/root/chunk-ag2pf657.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_os = require("os");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var g = 1, y = "device-mcp-snapshot", nBs = 8, z = 128;
function rBs(e) {
  return e.added.length > 0 || e.changed.length > 0;
}
var M = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.v)(g), hostname: (0, import_chunk_adx6804h.n)(), servers: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()), (0, import_chunk_adx6804h.v)("declined")])), withheld: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.c)({ added: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), changed: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()) })) }));
function O(e) {
  let r = typeof e._meta === "object" && e._meta !== null ? e._meta : {};
  return (0, import_chunk_ccm69jjy.Je)((0, import_chunk_w578pjby.cs)({ name: e.name, description: e.description, inputSchema: e.inputSchema, searchHint: r[import_chunk_syr33dp2.J7.searchHint] }));
}
function b(e) {
  return Object.fromEntries(e.map((r) => [r.name, O(r)]));
}
function j(e, r) {
  if (r === "declined") return { added: [], changed: [] };
  let i = Object.keys(e).filter((s) => !Object.hasOwn(r, s)), o = Object.keys(e).filter((s) => Object.hasOwn(r, s) && r[s] !== e[s]);
  if (i.length === 0 && o.length === 0) return;
  return { added: m(i), changed: m(o) };
}
function m(e) {
  return e.slice(0, nBs).map((r) => r.slice(0, z));
}
function oBs(e, r) {
  if (r === void 0) return e;
  return { servers: { ...r.servers, ...e.servers }, withheld: e.withheld };
}
function Uma(e, r) {
  let i = /* @__PURE__ */ new Map(), o = { ...r.servers }, s = false;
  for (let [a, w] of e) {
    let l = b(w), S = Object.hasOwn(r.servers, a) ? r.servers[a] : void 0;
    if (S === void 0) {
      o[a] = l, s = true;
      continue;
    }
    let u = j(l, S);
    if (u !== void 0) i.set(a, u);
  }
  let h = Object.fromEntries([...i].filter(([, a]) => rBs(a)));
  return { withheld: i, next: { servers: o, withheld: h }, changed: s || (0, import_chunk_w578pjby.cs)(h) !== (0, import_chunk_w578pjby.cs)(r.withheld) };
}
function nUr(e, r, i) {
  let o = { ...e.servers };
  for (let s of r) if (i === "accepted") delete o[s];
  else o[s] = "declined";
  return { servers: o, withheld: {} };
}
async function IVe(e) {
  let r = { servers: {}, withheld: {} }, i;
  try {
    i = await e.readText();
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`device-mcp snapshot: store unreadable (${(0, import_chunk_jv7av99m.d)(o)})`, { level: "warn" }), "unreadable";
  }
  if (i === void 0) return r;
  try {
    let o = M().safeParse((0, import_chunk_w578pjby.te)(i));
    return o.success && (0, import_chunk_ag2pf657.zJ)(o.data.hostname) === (0, import_chunk_ag2pf657.zJ)(e.hostname()) ? { servers: o.data.servers, withheld: o.data.withheld } : r;
  } catch {
    return r;
  }
}
async function e5t(e, r) {
  try {
    return await r.writeText((0, import_chunk_w578pjby._)({ version: g, hostname: (0, import_chunk_ag2pf657.zJ)(r.hostname()), servers: e.servers, withheld: e.withheld }, null, 2) + `
`), true;
  } catch (i) {
    return (0, import_chunk_w578pjby.t)(`device-mcp snapshot: not saved (${(0, import_chunk_jv7av99m.d)(i)})`, { level: "warn" }), false;
  }
}
function f() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "state", `${y}.json`);
}
function Bma() {
  return `delete ${(0, import_chunk_n2dbhmj2.os)(f())} to reset every server's baseline`;
}
function MVe(e) {
  let r = (0, import_chunk_m15w38ag.ne)() && e !== void 0 ? e : void 0, i = import_chunk_hkvzj051.at.state(y);
  return { readText: async () => {
    if (r) {
      let o = await r.readText([i]);
      if (!o.ok) throw Error("device-mcp snapshot read failed");
      let s = o.value.items[0];
      return s.found ? s.value : void 0;
    }
    try {
      return await (0, import_chunk_8j3h6yzg.Vn)().read(f());
    } catch (o) {
      if ((0, import_chunk_jv7av99m.J)(o)) return;
      throw o;
    }
  }, writeText: async (o) => {
    if (r) {
      if (!(await r.write(i, o, { mode: 384 })).ok) throw Error("device-mcp snapshot write failed");
      return;
    }
    let s = f();
    await (0, import_chunk_8j3h6yzg.Vn)().mkdir((0, import_path.dirname)(s), 448), await (0, import_chunk_8j3h6yzg.Vn)().atomicWrite(s, o, 384);
  }, hostname: import_os.hostname };
}
