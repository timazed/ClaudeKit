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
var chunk_v44b7svs_exports = {};
__export(chunk_v44b7svs_exports, {
  Wfa: () => Wfa,
  ZNo: () => ZNo,
  t$s: () => t$s
});
module.exports = __toCommonJS(chunk_v44b7svs_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_spjmqhhj = require("/$bunfs/root/chunk-spjmqhhj.js");
var import_chunk_tbr7tkzm = require("/$bunfs/root/chunk-tbr7tkzm.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var ZNo = "RegisterRepoRoot", _ = 32, t$s = 4096, O = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ directory: (0, import_chunk_adx6804h.n)().max(t$s), askedBy: (0, import_chunk_adx6804h.n)().min(1).max(64).optional() })), S = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Map()), W = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.c)({ directory: (0, import_chunk_adx6804h.n)().min(1).max(4096), alreadyTaken: (0, import_chunk_adx6804h.v)(true).optional() }), (0, import_chunk_adx6804h.c)({ refusal: (0, import_chunk_adx6804h.n)().min(1).max(64) })]));
async function Wfa(i, g, a) {
  let { directory: y, askedBy: s } = O().parse(i), w = a.toolUseContext(), { workspaceRoot: o = { kind: "absent" } } = a, e;
  try {
    e = await (0, import_chunk_spjmqhhj.T1r)(y, () => ({ ...(0, import_chunk_bz1f2qnq.Z)(w), additionalWorkingDirectories: new Map(o.kind === "valid" ? [[o.root, { path: o.root, source: "cliArg" }]] : []) }), (0, import_chunk_f9x2f6cx.Te)(), true);
  } catch (r) {
    let d = (0, import_chunk_spjmqhhj.F3t)(r);
    if (d === void 0) throw r;
    if (d === "outside_scope") {
      let h = o.kind === "valid" ? "the folder is not below the workspace root" : o.kind === "invalid" ? `the workspace root is invalid: ${o.fault}` : "no workspace root";
      (0, import_chunk_w578pjby.t)(`${ZNo}: outside_scope: ${h}`, { level: "warn" });
    }
    return u(d);
  }
  let R = o.kind === "valid" ? (0, import_path.relative)(o.real, e) : "";
  if (o.kind === "valid" && !(0, import_chunk_spjmqhhj.G5n)(e, (0, import_chunk_f9x2f6cx.Te)(), [], []).allowed && ((0, import_path.isAbsolute)(R) || R.split(import_path.sep).some((r) => r === "" || r.startsWith(".")))) return (0, import_chunk_w578pjby.t)(`${ZNo}: outside_scope: the folder is not strictly below where the workspace root led at the daemon's start, or a folder on the way has a name that starts with a dot`, { level: "warn" }), u("outside_scope");
  g.throwIfAborted();
  let l = (0, import_chunk_f9x2f6cx.tu)(), m = S.of(a.session.host), f = l.includes(e);
  if (!f) {
    if (l.length >= _) return u("too_many");
    if ((0, import_chunk_f9x2f6cx.AL)([...l, e]), s !== void 0) m.set(e, s);
    (0, import_chunk_p1ewvgeh.Ejt)(e), import_chunk_ha393e1n.Ue.refreshConfig();
  }
  return await (0, import_chunk_tbr7tkzm.Rgt)(), { summary: "folder registered", output: { directory: e, ...f && (s === void 0 || m.get(e) !== s) && { alreadyTaken: true } } };
}
function u(i) {
  return { summary: `folder not registered: ${i}`, output: { refusal: i } };
}
