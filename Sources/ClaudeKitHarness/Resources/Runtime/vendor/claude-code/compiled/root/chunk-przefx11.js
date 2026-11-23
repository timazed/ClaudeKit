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
var chunk_przefx11_exports = {};
__export(chunk_przefx11_exports, {
  Bet: () => Bet,
  Fht: () => Fht,
  M$e: () => M$e,
  SHt: () => SHt,
  Vve: () => Vve,
  _ue: () => _ue,
  bHt: () => bHt,
  fqe: () => fqe,
  nie: () => nie,
  oYs: () => oYs,
  sMe: () => sMe,
  yue: () => yue
});
module.exports = __toCommonJS(chunk_przefx11_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_kf08yh2z = require("/$bunfs/root/chunk-kf08yh2z.js");
var import_chunk_6k9zs54e = require("/$bunfs/root/chunk-6k9zs54e.js");
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
function g(t) {
  let e = t.split("/"), r = (0, import_chunk_cg8dqz0a.x)();
  if (r === "windows" && e.some((n) => /[<>"|*]/.test(n) || (0, import_chunk_z6pfqf6e.lx)(n) || /[. ]$/.test(n))) return `path ${(0, import_chunk_kf08yh2z.lc)(t)} cannot be a file name on Windows (reserved device name, trailing dot or space, or one of < > " | *)`;
  if ((r === "windows" || r === "wsl") && e.some((n) => /~\d/.test(n))) return `path ${(0, import_chunk_kf08yh2z.lc)(t)} carries a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named entry`;
  return;
}
function Vve(t) {
  let e = t, r = (o) => {
    let s = e[o];
    return typeof s === "string" ? s : void 0;
  }, n = (0, import_chunk_6k9zs54e.jk)(e.paths), i = n === void 0 ? void 0 : n === import_chunk_6k9zs54e.Qm ? [] : n.filter((o) => typeof o === "string");
  return { path: r("path"), paths: i, outDir: r("out_dir") };
}
function M$e(t, { outDirJudged: e = false } = {}) {
  let { path: r, outDir: n } = Vve(t);
  if (r === void 0) return { reason: "read_file requires `path` \u2014 a published path from a list_files result" };
  let i = (0, import_chunk_mha8pjbc.z_o)(r);
  if ("errMsg" in i) return { reason: i.errMsg };
  let o = i.key.split("/"), s = g(i.key);
  if (s !== void 0) return { reason: s };
  let d = (0, import_chunk_cg8dqz0a.x)(), u = d === "windows" || d === "wsl", a, f = false;
  try {
    if (n === void 0 || n === "") {
      let { url: l } = t, c = typeof l === "string" ? (0, import_chunk_r8478wtb.Dn)(l) : null, h = c !== null ? _ue(c.slug) : null;
      f = h !== null, a = h ?? (0, import_chunk_18rsj2ts.pe)();
    } else a = (0, import_chunk_n2dbhmj2.xt)(n);
  } catch {
    return { reason: "out_dir cannot be resolved to a local directory" };
  }
  if (!e && d === "windows" && a.split(import_path.sep).some((l) => l !== "" && /[. ]$/.test(l))) return { reason: `${n === void 0 || n === "" ? "the default save directory" : `out_dir ${(0, import_chunk_kf08yh2z.lc)(n)}`} has a name ending in a dot or space, which Windows would save under a different name` };
  if (!e && u && n !== void 0 && n.split(/[\\/]/).some((l) => /~\d/.test(l))) return { reason: `out_dir ${(0, import_chunk_kf08yh2z.lc)(n)} names a directory by a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named directory` };
  return { dest: (0, import_path.join)(a, ...o), base: a, ...f && { defaultDir: true } };
}
var y = /* @__PURE__ */ new WeakMap();
function fqe(t, e = {}) {
  let r = t, { paths: n, url: i, out_dir: o } = r, s = typeof n === "object" && n !== null ? n : void 0, d = [typeof i === "string" ? i : "", typeof o === "string" ? o : "", e.outDirJudged === true ? "judged" : "", (0, import_chunk_18rsj2ts.pe)(), ((0, import_chunk_p1ewvgeh.YO)() ? (0, import_chunk_p1ewvgeh.Fx)() : null) ?? ""].join("\0"), u = s === void 0 ? void 0 : y.get(s);
  if (u !== void 0 && u.key === d) return u.value;
  let a = R(t, e);
  if (s !== void 0) y.set(s, { key: d, value: a });
  return a;
}
function R(t, e) {
  let { paths: r } = Vve(t);
  if (r === void 0 || r.length === 0) return { reason: "read_file requires `path`, or `paths` naming at least one published path" };
  if (r.length > import_chunk_mha8pjbc.I0e) return { reason: `\`paths\` names ${r.length} paths; at most ${import_chunk_mha8pjbc.I0e} can be read in one call` };
  let n = { ...t };
  delete n.paths;
  let i, o = [], s = /* @__PURE__ */ new Map();
  for (let d of r) {
    let u = (0, import_chunk_mha8pjbc.s4)(d);
    if ("errMsg" in u) return { reason: u.errMsg };
    let a = M$e({ ...n, path: d }, e);
    if ("reason" in a) return a;
    let f = u.key, l = (0, import_chunk_p1ewvgeh.Yo)((0, import_path.normalize)(a.dest).normalize("NFC").toUpperCase().toLowerCase()), c = s.get(l);
    if (c !== void 0) return { reason: c === f ? `\`paths\` names ${(0, import_chunk_kf08yh2z.lc)(d)} more than once` : `\`paths\` names ${(0, import_chunk_kf08yh2z.lc)(c)} and ${(0, import_chunk_kf08yh2z.lc)(d)}, which could save to the same file on a case-insensitive volume; read one of them on its own` };
    s.set(l, f), i ??= { base: a.base, ...a.defaultDir && { defaultDir: a.defaultDir } }, o.push({ path: f, dest: a.dest });
  }
  return { ...i, files: o };
}
var oYs = "artifact-files";
function _ue(t) {
  let e = (0, import_chunk_p1ewvgeh.YO)() ? (0, import_chunk_p1ewvgeh.Fx)() : null;
  return e === null ? null : (0, import_path.join)(e, oYs, t);
}
function yue(t) {
  return t.length > 0 && t.every((e) => e.length > 0 && e.every((r) => (0, import_chunk_p1ewvgeh.Pre)(r)));
}
function SHt(t) {
  let e = (0, import_chunk_p1ewvgeh.YO)() ? (0, import_chunk_p1ewvgeh.Fx)() : null;
  return e !== null && (0, import_chunk_p1ewvgeh.Yo)((0, import_path.normalize)(t)).startsWith((0, import_chunk_p1ewvgeh.Yo)(e) + import_path.sep);
}
async function Bet(t, e, r, n = {}) {
  let i = t.heldDirectory !== void 0 && import_chunk_jxja0v0z.oC !== 0 ? import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_EXCL | import_chunk_jxja0v0z.oC : "wx";
  await (0, import_promises.writeFile)(e, r, { ...n, flag: i }).catch((o) => {
    throw (0, import_chunk_jv7av99m.w)(o) === "ELOOP" ? new import_chunk_2yx6c1y2.C_(`Nothing was saved in ${(0, import_path.dirname)(e)}: part of that path is now a link. Check where it leads, then try again.`) : o;
  });
}
function Fht(t) {
  return (0, import_chunk_jv7av99m.w)(t) !== "EEXIST" && !(t instanceof import_chunk_2yx6c1y2.C_);
}
function sMe(t) {
  let e = t?.heldDirectory?.at;
  return e === void 0 ? [] : [async (r, n) => {
    await e.rename((0, import_path.basename)(r), (0, import_path.basename)(n));
  }, async (r) => {
    await e.unlink((0, import_path.basename)(r));
  }];
}
class nie extends Error {
  partial;
  renameError;
  removedEarlier;
  constructor(t, e, r) {
    super("the staged file could not be moved into place");
    this.partial = t;
    this.renameError = e;
    this.removedEarlier = r;
    this.name = "PartialKeptError";
  }
}
async function bHt(t, e, r, n = import_promises.unlink) {
  let i = true;
  try {
    await (0, import_chunk_q7qjcthc.ra)(t, e, r);
    return;
  } catch (o) {
    let s = (0, import_chunk_jv7av99m.w)(o);
    if (s === void 0 || !import_chunk_q7qjcthc.mF.has(s)) throw o;
    await n(e).catch((d) => {
      if ((0, import_chunk_jv7av99m.w)(d) !== "ENOENT") throw o;
      i = false;
    });
  }
  try {
    await (0, import_chunk_q7qjcthc.ra)(t, e, r);
  } catch (o) {
    throw new nie(t, o, i);
  }
}
