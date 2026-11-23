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
var chunk_sqvd6je2_exports = {};
__export(chunk_sqvd6je2_exports, {
  $x: () => $x,
  BEr: () => BEr,
  ESl: () => ESl,
  Idn: () => Idn,
  TUi: () => TUi,
  WEr: () => WEr,
  YSo: () => YSo,
  YSs: () => YSs,
  aBn: () => aBn,
  ame: () => ame,
  h4: () => h4,
  iBn: () => iBn,
  jEr: () => jEr,
  kSl: () => kSl,
  my: () => my,
  owe: () => owe,
  vSl: () => vSl,
  yj: () => yj
});
module.exports = __toCommonJS(chunk_sqvd6je2_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_paa8n07f = require("/$bunfs/root/chunk-paa8n07f.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_a3fb7pa2 = require("/$bunfs/root/chunk-a3fb7pa2.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_g9ztbtfd = require("/$bunfs/root/chunk-g9ztbtfd.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_crypto = require("crypto");
var import_path = require("path");
var import_path2 = require("path");
var import_fs = require("fs");
var import_path3 = require("path");
var import_path4 = require("path");
function yj(e, n, i = Date.now()) {
  return Number.isFinite(e) && Math.abs(i - e) < n;
}
var h4 = () => (0, import_path2.join)((0, import_chunk_2gtmjt3y.Ze)(), "dev-mods");
var S = 5, W = 4, I = "tengu_tender_rivest";
function YSs() {
  return (0, import_chunk_sghy0qej.Pe)(I, { safe: true });
}
function YSo(e) {
  if (!YSs()) return b(e, W);
  let { links: n, isWhole: i } = f(e, S, /* @__PURE__ */ new Map());
  return { links: (0, import_chunk_4smdap7r.M)(n), isWhole: i };
}
function f(e, n, i) {
  if ((i.get(e) ?? 0) >= n) return { links: [], isWhole: true };
  i.set(e, n);
  try {
    let r = (0, import_fs.readdirSync)(e, { withFileTypes: true }).map((o) => {
      let a = (0, import_path3.join)(e, o.name), m = o.name === "node_modules" && n < S - 1 ? 0 : n - 1;
      if (o.isSymbolicLink()) return R(a, m, i);
      return o.isDirectory() && m > 0 ? f(a, m, i) : { links: [], isWhole: true };
    });
    return { links: r.flatMap((o) => o.links), isWhole: r.every((o) => o.isWhole) };
  } catch (r) {
    let o = (0, import_chunk_jv7av99m.w)(r);
    return { links: [], isWhole: o === "ENOENT" || o === "ENOTDIR" };
  }
}
function R(e, n, i) {
  let r = (0, import_chunk_w578pjby.ua)(e);
  if (r.unresolved) return { links: [...r.spellings, ...p(e)], isWhole: (0, import_chunk_w578pjby.gJ)(e).vetted };
  if (r.endsUnexamined === true) return { links: [...r.spellings, ...p(e)], isWhole: n === 0 };
  if (n === 0) return { links: r.spellings, isWhole: true };
  let { links: o, isWhole: a } = f(r.landing, n, i);
  return { links: [...r.spellings, ...o.filter((l) => !(0, import_chunk_z6pfqf6e.Ya)(r.landing, l, { alreadyComparable: true }))], isWhole: a };
}
function b(e, n) {
  try {
    let i = (0, import_fs.readdirSync)(e, { withFileTypes: true }).map((r) => {
      let o = (0, import_path3.join)(e, r.name);
      if (r.isSymbolicLink()) return { links: [o, ...p(o)], isWhole: true };
      return r.isDirectory() && n > 1 && r.name !== "node_modules" ? b(o, n - 1) : { links: [], isWhole: true };
    });
    return { links: i.flatMap((r) => r.links), isWhole: i.every((r) => r.isWhole) };
  } catch (i) {
    let r = (0, import_chunk_jv7av99m.w)(i);
    return { links: [], isWhole: r === "ENOENT" || r === "ENOTDIR" };
  }
}
function p(e) {
  try {
    return [(0, import_path3.resolve)(v((0, import_path3.dirname)(e)), (0, import_fs.readlinkSync)(e))];
  } catch {
    return [];
  }
}
function v(e) {
  try {
    return (0, import_fs.realpathSync)(e);
  } catch {
    return e;
  }
}
var F = 1024;
function my(e) {
  let n = (0, import_chunk_a3fb7pa2.gy)().foldedSegmentsBySpelling, i = n.get(e);
  if (i === void 0) {
    if (i = (0, import_path4.normalize)(e).split(import_path4.sep).map(import_chunk_fbnv54pa.za).join(import_path4.sep), n.size >= F) n.clear();
    n.set(e, i);
  }
  return i;
}
var BEr = "cache";
function $x() {
  return (0, import_path.resolve)((0, import_chunk_f9x2f6cx.Te)(), (0, import_chunk_wj4me9k5.Mc)());
}
function ame() {
  return (0, import_path.join)($x(), BEr);
}
function TUi(e) {
  let n = (0, import_chunk_2gtmjt3y.Nl)();
  return n !== null && [import_chunk_mgntjepj.DN, import_chunk_mgntjepj.lNe].some((i) => (0, import_chunk_g9ztbtfd.ti)((0, import_path.join)(n, i), e, false));
}
function owe() {
  return C() ?? (0, import_path.join)($x(), "mcpb");
}
function C() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_PLUGIN_MCPB_DIR;
  return e && (0, import_path.isAbsolute)(e) && !(0, import_chunk_z6pfqf6e.Ya)((0, import_path.resolve)(e), (0, import_chunk_f9x2f6cx.Te)()) && !(0, import_chunk_z6pfqf6e.Ya)((0, import_chunk_f9x2f6cx.Te)(), (0, import_path.resolve)(e)) ? (0, import_path.resolve)(e) : void 0;
}
function kSl() {
  return C() !== void 0;
}
function ESl(e, n) {
  let i = e.map((o) => o.split(owe() + import_path.sep)), r = i.flatMap(([, ...o]) => o);
  return r.length > 0 && r.every((o) => /^[0-9a-f]{20}(?=[\\/]|$)/.test(o)) ? i.map(([o, ...a]) => [o, ...a.map((l) => l.slice(0, 16) + l.slice(20))].join((0, import_path.join)(n, import_chunk_paa8n07f.h7e) + import_path.sep)) : void 0;
}
function WEr() {
  return `t-${(0, import_crypto.randomBytes)(4).toString("hex")}`;
}
function Idn() {
  return (0, import_chunk_4smdap7r.M)([(0, import_path.resolve)((0, import_chunk_2gtmjt3y.Ze)(), "plugins"), (0, import_path.resolve)((0, import_chunk_2gtmjt3y.Ze)(), "cowork_plugins"), $x(), ...(0, import_chunk_wj4me9k5.VG)().map((e) => (0, import_path.resolve)((0, import_chunk_f9x2f6cx.Te)(), e))]);
}
function jEr(e = (0, import_chunk_f9x2f6cx.Te)()) {
  return (0, import_chunk_4smdap7r.M)([...(0, import_chunk_f9x2f6cx.Rv)(), ...(0, import_chunk_f9x2f6cx.ZM)()].map((n) => (0, import_path.resolve)(e, n)));
}
function vSl(e) {
  let n = jEr();
  if (n.length === 0) return false;
  if ((0, import_chunk_z6pfqf6e.tY)(e, h)) return true;
  let i = n.join("\0"), r = (0, import_chunk_865at33z.ce)(), o = r.inlinePluginRootsComparableMemo;
  if (o?.roots !== i || !yj(o.at, H)) o = { roots: i, comparable: n.map((l) => (0, import_chunk_z6pfqf6e.Ah)(l, { foldCase: true, knownNotSuspect: !(0, import_chunk_z6pfqf6e.tY)(l, h) })), at: Date.now() }, r.inlinePluginRootsComparableMemo = o;
  let a = (0, import_chunk_z6pfqf6e.Ah)(e, { foldCase: true, knownNotSuspect: true });
  return o.comparable.some((l) => (0, import_chunk_z6pfqf6e.Ya)(l, a, { alreadyComparable: true }));
}
var H = 3e4, h = { allowLocalWsl: true, eisdirIsFolder: true };
function iBn(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return true;
  let n = (0, import_chunk_w578pjby.Ei)((0, import_path.resolve)(h4())), i = my((0, import_path.resolve)(e));
  if (n.map(my).some((c) => i === c || i.startsWith(c + import_path.sep))) return true;
  let r = (0, import_chunk_z6pfqf6e.wO)(e) || (0, import_chunk_z6pfqf6e.yP)(e), o = !(0, import_chunk_z6pfqf6e.BE)(e) && (!r || (0, import_chunk_z6pfqf6e.mc)(e));
  if (o && (0, import_chunk_z6pfqf6e.tY)(e, h)) return true;
  let a = (0, import_chunk_z6pfqf6e.Ah)(e, { foldCase: true, knownNotSuspect: o }), { links: l, isWhole: m } = YSo(h4());
  if (!m) return (0, import_chunk_w578pjby.t)("dev mods: a folder under the dev-mods root, or a place a link there leads to, could not be read or is on the network, so every path counts as mod code and edits ask, until it can be read or the link is removed"), true;
  return [...n, ...l].some((c) => (0, import_chunk_z6pfqf6e.Ya)((0, import_chunk_z6pfqf6e.Ah)(c, { foldCase: true }), a, { alreadyComparable: true }));
}
function aBn(e) {
  return !((0, import_chunk_f9x2f6cx.Y)() || (0, import_chunk_f9x2f6cx.Pd)()) && (iBn(e) || (0, import_chunk_z6pfqf6e.TJ)(e.toLowerCase()).includes((0, import_path.basename)(h4())));
}
