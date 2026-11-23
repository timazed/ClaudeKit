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
var chunk_r4h9zgjy_exports = {};
__export(chunk_r4h9zgjy_exports, {
  DJl: () => DJl,
  HJl: () => HJl,
  LJl: () => LJl,
  Nzl: () => Nzl,
  XRn: () => XRn
});
module.exports = __toCommonJS(chunk_r4h9zgjy_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_rpdn91q1 = require("/$bunfs/root/chunk-rpdn91q1.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_j2ybpxmz = require("/$bunfs/root/chunk-j2ybpxmz.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
function Nzl() {
  return [(0, import_chunk_zhr7rpv7.ve)(), ...import_chunk_rpdn91q1.QFl.map((e) => (0, import_chunk_ch6jxpf8.CMo)(e) ?? process.env[e])];
}
function HJl(e) {
  if (!(0, import_chunk_z688m88d.Zt)(Nzl(), e)) XRn((0, import_chunk_zhr7rpv7.ve)());
}
function XRn(e) {
  if ((0, import_chunk_f9x2f6cx.Xia)(), (0, import_chunk_865at33z.YV)(), (0, import_chunk_zhr7rpv7.vr)().providerCache = (0, import_chunk_zhr7rpv7.Pra)(), (0, import_chunk_f9x2f6cx.Hda)(), (0, import_chunk_f9x2f6cx.pFs)(), (0, import_chunk_f9x2f6cx.NQe)().clear(), (0, import_chunk_865at33z.kNe)(), (0, import_chunk_865at33z.ZGn)(), (0, import_chunk_j2ybpxmz.o2i)(), e === "firstParty") (0, import_chunk_865at33z.z0)();
}
async function DJl({ newModel: e, permissions: o }) {
  if (!o) return null;
  if ((0, import_chunk_865at33z.cI)(e)) return null;
  let r = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-n6p52spf.js"))), i = (0, import_chunk_bz1f2qnq.Z)(o).mode;
  if (!r.isAutoModeActive() && i !== "auto") return null;
  r.setAutoModeActive(false), (0, import_chunk_f9x2f6cx.tFr)(i, "default"), o.setToolPermissionContext((s) => ({ ...s, mode: "default", prePlanMode: void 0 }));
  let n = "Auto mode is unavailable for this model; reverted to default permissions.";
  return (0, import_chunk_w578pjby.t)(`[3p-switch] ${n}`), n;
}
function LJl(e, o) {
  (0, import_chunk_f9x2f6cx.KEe)(), (0, import_chunk_f9x2f6cx.Ig)(e), (0, import_chunk_f9x2f6cx.y3n)(e), o?.(e);
}
