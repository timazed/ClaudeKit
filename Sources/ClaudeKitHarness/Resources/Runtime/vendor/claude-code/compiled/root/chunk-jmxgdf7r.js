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
var chunk_jmxgdf7r_exports = {};
__export(chunk_jmxgdf7r_exports, {
  Ghe: () => Ghe,
  Q0: () => Q0,
  Zj: () => Zj,
  rRt: () => rRt,
  yhn: () => yhn
});
module.exports = __toCommonJS(chunk_jmxgdf7r_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_v6cdm8tp = require("/$bunfs/root/chunk-v6cdm8tp.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_os = require("os");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
class e {
  pidSpace = null;
  pidDomain = void 0;
  uidsCollapse = null;
}
var rRt = (0, import_chunk_t57w17k7.de)(new e(), (n) => {
  n.pidDomain = void 0;
});
function Ghe() {
  if (rRt.pidSpace === null) {
    let n = "";
    rRt.pidSpace = `${(0, import_os.hostname)()}${n === "" ? "" : "#" + n}`;
  }
  return rRt.pidSpace;
}
function Q0() {
  return rRt.pidDomain ??= (async () => (0, import_chunk_v6cdm8tp.N0l)((0, import_chunk_cg8dqz0a.x)()))().catch((n) => {
    throw rRt.pidDomain = void 0, n;
  }), rRt.pidDomain;
}
async function yhn(n) {
  try {
    let t = (0, import_chunk_w578pjby.te)(await (0, import_promises.readFile)(n, "utf8"));
    if (t === null || typeof t !== "object") return;
    let i = {};
    if ("rvAuth" in t && typeof t.rvAuth === "string") i.rvAuth = t.rvAuth;
    if ("ptyAuth" in t && typeof t.ptyAuth === "string") i.ptyAuth = t.ptyAuth;
    if ("claimAuth" in t && typeof t.claimAuth === "string") i.claimAuth = t.claimAuth;
    return i;
  } catch {
    return;
  }
}
function Zj(n, t) {
  if (typeof n !== "string" || !t || n.length === 0) return false;
  let i = Buffer.from(n), r = Buffer.from(t);
  if (i.length !== r.length) return false;
  return (0, import_crypto.timingSafeEqual)(i, r);
}
