const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_fvm45mg0_exports = {};
__export(chunk_fvm45mg0_exports, {
  Oei: () => Oei,
  Pei: () => Pei,
  pXl: () => pXl
});
module.exports = __toCommonJS(chunk_fvm45mg0_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var b = 50, D = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.v)(1), sessions: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)(), reason: (0, import_chunk_adx6804h.n)(), at: (0, import_chunk_adx6804h.n)() })) })), f = "device-unbound-creates";
function u() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "state", `${f}.json`);
}
async function m(o) {
  let i = await o.readText();
  if (i === void 0) return [];
  let r = y(i);
  if (!r.success) return [];
  let e = await o.retentionCutoff();
  return e === null ? r.data.sessions : r.data.sessions.filter((s) => !x(s.at, e));
}
function y(o) {
  try {
    return D().safeParse((0, import_chunk_w578pjby.te)(o));
  } catch {
    return { success: false };
  }
}
function x(o, i) {
  let r = Date.parse(o);
  return Number.isNaN(r) || r < i.getTime();
}
async function pXl(o, i, r) {
  try {
    let e = (0, import_chunk_t39bs2jr.Un)(o), a = [...(await m(r)).filter((g) => (0, import_chunk_t39bs2jr.Un)(g.id) !== e), { id: e, reason: i, at: r.now().toISOString() }].slice(-b);
    await r.writeText((0, import_chunk_w578pjby._)({ version: 1, sessions: a }, null, 2) + `
`);
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`[deviceBind] unbound create not recorded (${(0, import_chunk_jv7av99m.d)(e)})`);
  }
}
async function Pei(o, i, r) {
  try {
    let e = (0, import_chunk_t39bs2jr.Un)(o), s = (await m(r)).find((a) => (0, import_chunk_t39bs2jr.Un)(a.id) === e);
    return s !== void 0 && i(s.reason) ? s.reason : void 0;
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`[deviceBind] unbound-create record unreadable (${(0, import_chunk_jv7av99m.d)(e)})`);
    return;
  }
}
function Oei(o) {
  let i = (0, import_chunk_m15w38ag.ne)() && o !== void 0 ? o : void 0, r = import_chunk_hkvzj051.at.state(f);
  return { readText: async () => {
    if (i) {
      let e = await i.readText([r]);
      if (!e.ok) throw Error("device unbound-creates read failed");
      let s = e.value.items[0];
      return s.found ? s.value : void 0;
    }
    try {
      return await (0, import_chunk_8j3h6yzg.Vn)().read(u());
    } catch (e) {
      if ((0, import_chunk_jv7av99m.J)(e)) return;
      throw e;
    }
  }, writeText: async (e) => {
    if (i) {
      if (!(await i.write(r, e, { mode: 384 })).ok) throw Error("device unbound-creates write failed");
      return;
    }
    let s = u();
    await (0, import_chunk_8j3h6yzg.Vn)().mkdir((0, import_path.dirname)(s), 448), await (0, import_chunk_8j3h6yzg.Vn)().atomicWrite(s, e, 384);
  }, now: () => /* @__PURE__ */ new Date(), retentionCutoff: async () => {
    let e = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-mjenkt0a.js")));
    return await e.isRetentionCleanupSafe(o, 0) ? e.getCutoffDate() : null;
  } };
}
