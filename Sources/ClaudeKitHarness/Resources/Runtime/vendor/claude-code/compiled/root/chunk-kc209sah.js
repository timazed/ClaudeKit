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
var chunk_kc209sah_exports = {};
__export(chunk_kc209sah_exports, {
  lXl: () => lXl,
  lZs: () => lZs
});
module.exports = __toCommonJS(chunk_kc209sah_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_v6cdm8tp = require("/$bunfs/root/chunk-v6cdm8tp.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var x = /^([1-9][0-9]{0,9})\.([0-9a-f]{64})$/, u = 4096, z = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.v)(1), pid: (0, import_chunk_adx6804h.E)().int().positive(), procStart: (0, import_chunk_adx6804h.n)().min(1), nonceSha256: (0, import_chunk_adx6804h.n)() }));
function l() {
  return (0, import_path.join)((0, import_os.homedir)(), ".claude", "state", "unattended-serving-runs");
}
function a(o) {
  return (0, import_path.join)(l(), `${o}.json`);
}
async function lXl() {
  try {
    let o = await (0, import_chunk_rb36kwbn.HE)();
    if (o === void 0) return;
    let e = (0, import_crypto.randomBytes)(32).toString("hex"), r = a(process.pid);
    return await (0, import_promises.mkdir)((0, import_path.dirname)(r), { recursive: true, mode: 448 }), await (0, import_chunk_q7qjcthc.yr)(r, `${(0, import_chunk_w578pjby._)({ version: 1, pid: process.pid, procStart: o, nonceSha256: (0, import_chunk_ccm69jjy.Je)(e) })}
`, 384), await k(), process.once("exit", () => {
      try {
        (0, import_fs.unlinkSync)(r);
      } catch {
      }
    }), { token: `${process.pid}.${e}`, remove: async () => {
      try {
        await (0, import_promises.unlink)(r);
      } catch {
      }
    } };
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`unattended run grant: not recorded (${(0, import_chunk_jv7av99m.d)(o)})`, { level: "warn" });
    return;
  }
}
async function lZs(o) {
  try {
    let e = o === void 0 ? null : x.exec(o);
    if (!e) return false;
    let r = Number(e[1]), i = await T(a(r));
    if (i === void 0 || i.pid !== r || !j(i.nonceSha256, (0, import_chunk_ccm69jjy.Je)(e[2])) || !(0, import_chunk_v6cdm8tp.Rd)(r)) return false;
    return await (0, import_chunk_rb36kwbn.Ef)(r, { skipCache: true }) === i.procStart;
  } catch {
    return false;
  }
}
async function T(o) {
  let e;
  try {
    e = await (0, import_promises.open)(o, "r");
    let r = Buffer.alloc(u + 1), { bytesRead: i } = await e.read(r, 0, r.length, 0);
    if (i > u) return;
    let s = z().safeParse((0, import_chunk_w578pjby.te)(r.subarray(0, i).toString("utf8")));
    return s.success ? s.data : void 0;
  } catch {
    return;
  } finally {
    await e?.close().catch(() => {
    });
  }
}
function j(o, e) {
  let r = Buffer.from(o), i = Buffer.from(e);
  return r.length === i.length && (0, import_crypto.timingSafeEqual)(r, i);
}
async function k() {
  try {
    for (let o of await (0, import_promises.readdir)(l())) {
      let e = Number(/^([1-9][0-9]{0,9})\.json$/.exec(o)?.[1]);
      if (Number.isInteger(e) && !(0, import_chunk_v6cdm8tp.Rd)(e)) await (0, import_promises.unlink)(a(e)).catch(() => {
      });
    }
  } catch {
  }
}
