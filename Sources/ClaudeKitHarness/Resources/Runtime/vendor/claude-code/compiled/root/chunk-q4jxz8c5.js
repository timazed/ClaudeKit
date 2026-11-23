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
var chunk_q4jxz8c5_exports = {};
__export(chunk_q4jxz8c5_exports, {
  Hjs: () => Hjs,
  aUo: () => aUo,
  hwn: () => hwn
});
module.exports = __toCommonJS(chunk_q4jxz8c5_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_brp4kre5 = require("/$bunfs/root/chunk-brp4kre5.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var d = ".pending-wakeup", u = 1024, f = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ toolUseId: (0, import_chunk_adx6804h.n)().min(1).max(256), scheduledFor: (0, import_chunk_adx6804h.E)().int().positive(), chainStartedAt: (0, import_chunk_adx6804h.E)().int().nonnegative() }));
async function hwn(e, o) {
  let r = (0, import_path.join)(e, d);
  try {
    if (o === void 0) {
      if (await (0, import_promises.rm)(r, { force: true }).then(() => true, (a) => ((0, import_chunk_9e5mdyfk.Lu)(a), false))) return;
    }
    await (0, import_chunk_brp4kre5.uht)(r, o === void 0 ? "" : (0, import_chunk_w578pjby._)(o));
  } catch (t) {
    if (!(0, import_chunk_jv7av99m.J)(t)) (0, import_chunk_9e5mdyfk.Lu)(t);
  }
}
async function Hjs(e) {
  let o = await (0, import_chunk_xfj2cwfv.Uu)((0, import_path.join)(e, d), u);
  if (!o) return null;
  try {
    let r = f().safeParse((0, import_chunk_w578pjby.te)(o));
    return r.success ? r.data : null;
  } catch {
    return null;
  }
}
class aUo {
  #o = Promise.resolve();
  #r = 0;
  #e;
  #i;
  constructor() {
    this.#i = (0, import_chunk_f9x2f6cx.Nla)(this.#n);
  }
  #n = (e) => {
    try {
      if (!(0, import_chunk_865at33z.Kc)()) return;
      let o = (0, import_chunk_865at33z.j0)();
      if (o === void 0) return;
      if (e !== void 0 && (0, import_chunk_bzyb60p0.Zr)()) return;
      this.#e ??= (0, import_chunk_w578pjby.Ct)(() => this.#o);
      let r = ++this.#r;
      this.#o = this.#o.then(() => r === this.#r ? hwn(o, e) : void 0);
    } catch (o) {
      (0, import_chunk_k449cc64.i)(o);
    }
  };
  flush() {
    return this.#o;
  }
  dispose() {
    this.#i(), this.#o.then(() => this.#e?.());
  }
}
