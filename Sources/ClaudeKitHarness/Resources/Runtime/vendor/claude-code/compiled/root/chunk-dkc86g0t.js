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
var chunk_dkc86g0t_exports = {};
__export(chunk_dkc86g0t_exports, {
  IWe: () => IWe,
  OWe: () => OWe,
  _co: () => _co,
  acs: () => acs,
  dcs: () => dcs,
  gco: () => gco,
  lcs: () => lcs,
  owt: () => owt,
  yco: () => yco,
  zhr: () => zhr,
  zrl: () => zrl
});
module.exports = __toCommonJS(chunk_dkc86g0t_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var zhr = "/dev/null", IWe = { GIT_CONFIG_GLOBAL: "/dev/null", GIT_CONFIG_NOSYSTEM: "1" };
var OWe = { GIT_REFERENCE_BACKEND: "files" };
var owt = { GIT_LITERAL_PATHSPECS: "1", GIT_GLOB_PATHSPECS: "0", GIT_NOGLOB_PATHSPECS: "0", GIT_ICASE_PATHSPECS: "0" };
function zrl(n) {
  return `"${n.replace(/["\\]/g, (e) => `\\${e}`)}"`;
}
var N = 16384;
function gco(n) {
  return n.reduce((e, s) => {
    let r = Buffer.byteLength(s) + 1, o = e.slices.at(-1);
    if (o !== void 0 && o.length > 0 && e.bytes + r <= N) return o.push(s), { slices: e.slices, bytes: e.bytes + r };
    return e.slices.push([s]), { slices: e.slices, bytes: r };
  }, { slices: [], bytes: 0 }).slices;
}
async function _co(n, e) {
  let s = Buffer.alloc(1048576);
  for (let r = 0; ; ) {
    let { bytesRead: o } = await n.read(s, 0, s.length, r);
    if (o === 0) return;
    e(s.subarray(0, o)), r += o;
  }
}
function acs(n) {
  return n.stage === "0" && n.sole;
}
var yco = import_fs.constants.O_RDWR | import_fs.constants.O_CREAT | import_fs.constants.O_EXCL | import_chunk_jxja0v0z.cr, lcs = import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_EXCL | import_chunk_jxja0v0z.cr;
async function dcs(n, e, s, r) {
  let o = (0, import_path.join)(r, `named-${(0, import_crypto.randomBytes)(6).toString("hex")}.ls`), d = await (0, import_promises.open)(o, yco, 384);
  try {
    for (let l of gco([...s])) {
      let i = await n(["-c", "core.precomposeUnicode=false", "ls-files", "-s", "-z", "--", ...l], { GIT_INDEX_FILE: e, ...owt }, void 0, void 0, d.fd);
      if (i.code !== 0) return (0, import_chunk_w578pjby.t)(`[indexEntriesNamed] ls-files exited ${String(i.code)}`), null;
    }
    let f = /* @__PURE__ */ new Map(), _ = "", T = (l) => {
      let i = l.indexOf("	"), E = Buffer.from(l.slice(i + 1), "latin1").toString("utf8");
      if (s.has(E)) {
        let [u = "", p = "", g = ""] = l.slice(0, i).split(" "), c = f.get(E), m = c === void 0 || c.sole && c.mode === u && c.id === p && c.stage === g;
        f.set(E, { mode: u, id: p, stage: g, sole: m });
      }
    };
    return await _co(d, (l) => {
      let i = (_ + l.toString("latin1")).split("\0");
      _ = i.pop() ?? "", i.forEach(T);
    }), _ === "" ? f : null;
  } finally {
    await d.close(), await (0, import_promises.unlink)(o).catch(() => {
    });
  }
}
