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
var chunk_21whhrcv_exports = {};
__export(chunk_21whhrcv_exports, {
  F4r: () => F4r,
  Zet: () => Zet,
  _tr: () => _tr,
  gHa: () => gHa,
  hHa: () => hHa,
  mHa: () => mHa
});
module.exports = __toCommonJS(chunk_21whhrcv_exports);
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_mndk3x2g = require("/$bunfs/root/chunk-mndk3x2g.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_6h9mds0d = require("/$bunfs/root/chunk-6h9mds0d.js");
var Zet = (() => {
  try {
    return (0, import_chunk_h3s25p5k.zca)(process.cwd());
  } catch {
    return process.cwd();
  }
})();
function mHa(e, r) {
  let n = (0, import_chunk_h3s25p5k.GQe)();
  if (n === null || e === void 0 || import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" || (0, import_chunk_z6pfqf6e.sa)(n) || (0, import_chunk_z6pfqf6e.vd)(n) || (0, import_chunk_6h9mds0d.bE)(e, n) !== "same" || (0, import_chunk_6h9mds0d.bE)((0, import_chunk_f9x2f6cx.Te)(), r) !== "same") return;
  let t = (0, import_chunk_w5s307zm.dr)(n);
  if (t === null || (0, import_chunk_6h9mds0d.bE)(t, n) !== "same" || (0, import_chunk_w5s307zm.ol)(n) !== t) return;
  return (0, import_chunk_mndk3x2g.Nh)(n).canonical ?? void 0;
}
function F4r(e, r) {
  let n = (0, import_chunk_mndk3x2g.Nh)(e), t = (0, import_chunk_mndk3x2g.Nh)(r);
  if ((0, import_chunk_mndk3x2g.X6)(n) || (0, import_chunk_mndk3x2g.X6)(t)) return true;
  if (n.skipped !== t.skipped) return true;
  return (0, import_chunk_mndk3x2g.Y6)(n, t);
}
function hHa(e) {
  if ((0, import_chunk_z6pfqf6e.sa)(e) || (0, import_chunk_z6pfqf6e.vd)(e)) return [];
  let r = (0, import_chunk_w5s307zm.Mi)(e);
  if (r !== null && r !== void 0) return [r];
  let n = (0, import_chunk_6h9mds0d.o0)(e);
  return n.length > 0 ? n : [e];
}
function gHa(e) {
  if ((0, import_chunk_z6pfqf6e.sa)(e) || (0, import_chunk_z6pfqf6e.vd)(e)) return [];
  let r = (0, import_chunk_w5s307zm.Mi)(e);
  return r !== null && r !== void 0 ? [r] : (0, import_chunk_6h9mds0d.o0)(e);
}
function _tr(e, r, n) {
  if (r.length === 0) return false;
  if (!r.every((o) => {
    let i = (0, import_chunk_6h9mds0d.bE)(e, o);
    if (i === "indeterminate") return false;
    if (i === "same") return true;
    return !F4r(o, e);
  })) return false;
  if (n?.requireCovered === true) {
    let o = (0, import_chunk_mndk3x2g.Nh)(e);
    if ((0, import_chunk_mndk3x2g.X6)(o)) return false;
    let i = (a) => a.some((c) => {
      let u = (0, import_chunk_mndk3x2g.Nh)(c);
      if ((0, import_chunk_mndk3x2g.X6)(u)) return false;
      return (0, import_chunk_mndk3x2g.ipe)(o, u);
    });
    return i(n.coveredWitnesses ?? r) || i(n.extraCoveredRoots ?? []) || n.bootLaunchTree !== void 0 && (0, import_chunk_6h9mds0d.bE)(e, n.bootLaunchTree) === "same";
  }
  return true;
}
