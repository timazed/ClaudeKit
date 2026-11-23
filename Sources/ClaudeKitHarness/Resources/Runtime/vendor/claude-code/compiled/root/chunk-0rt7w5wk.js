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
var chunk_0rt7w5wk_exports = {};
__export(chunk_0rt7w5wk_exports, {
  EKr: () => EKr,
  UZn: () => UZn,
  kKr: () => kKr,
  wKr: () => wKr
});
module.exports = __toCommonJS(chunk_0rt7w5wk_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_74mx55jd = require("/$bunfs/root/chunk-74mx55jd.js");
var import_chunk_s3bbbse4 = require("/$bunfs/root/chunk-s3bbbse4.js");
var import_chunk_5sjwf92x = require("/$bunfs/root/chunk-5sjwf92x.js");
var import_chunk_zsz02y6d = require("/$bunfs/root/chunk-zsz02y6d.js");
var import_promises = require("fs/promises");
function UZn() {
  let e = [(0, import_chunk_2gtmjt3y.Ze)()];
  try {
    e.push((0, import_chunk_zsz02y6d.Ug)());
  } catch {
  }
  return (a) => e.some((n) => (0, import_chunk_p1ewvgeh.BP)(a, n, true));
}
function wKr(e, a) {
  return { readFileState: a, bashTools: (0, import_chunk_s3bbbse4.Dlo)(e), bashHosts: (0, import_chunk_s3bbbse4.Llo)(e) };
}
function kKr(e, a) {
  let n = a;
  if (!n?.signals || !n.signals.cli?.length && !n.signals.filesRead?.length && !n.signals.manifestDeps?.length && !n.signals.hosts?.length && !n.signals.cwd?.length) return null;
  let c;
  try {
    if (n.signals.manifestDeps?.length) c = n.signals.manifestDeps.map((l) => ({ file: new RegExp(l.file, "i"), pattern: new RegExp(l.pattern) }));
  } catch (l) {
    return (0, import_chunk_w578pjby.t)(`Skipping relevance signals for "${e}": invalid RegExp in relevance.signals: ${l}`, { level: "warn" }), null;
  }
  let o = n.signals.hosts?.map((l) => l.toLowerCase());
  return { cli: n.signals.cli, hosts: o, filesRead: n.signals.filesRead, manifestDep: c, cwd: n.signals.cwd };
}
async function EKr(e, a) {
  let { bashTools: n, bashHosts: c } = a ?? {};
  if (e.cli && n?.size) {
    let i = e.cli.find((s) => n.has(s));
    if (i) return { signal: "cli", command: i };
  }
  if (e.hosts?.length && c?.size) {
    let i = e.hosts.find((s) => c.has(s));
    if (i) return { signal: "hosts", host: i };
  }
  if (e.cwd?.length) {
    let i = (0, import_chunk_18rsj2ts.pe)().replaceAll("\\", "/"), s = (0, import_chunk_w5s307zm.dr)((0, import_chunk_18rsj2ts.pe)())?.replaceAll("\\", "/"), f = [i];
    if (s && i.startsWith(`${s}/`)) f.push(i.slice(s.length + 1));
    for (let p of e.cwd) {
      let g = p.replace(/\/+$/, "").replace(/\/\*\*$/, "");
      if (!g) continue;
      if (f.some((r) => import_chunk_ha393e1n.I9e.isMatch(r, [g, `${g}/**`], { nocase: true, dot: true }))) return { signal: "cwd" };
    }
  }
  let o = a?.readFileState, l = [];
  if (o && (e.filesRead?.length || e.manifestDep)) {
    let i = UZn();
    l = (0, import_chunk_5sjwf92x.Fjt)(o).filter((s) => !i(s));
  }
  if (e.filesRead?.length && l.length) {
    let i = l.find((s) => import_chunk_ha393e1n.I9e.isMatch(s.replaceAll("\\", "/"), e.filesRead, { nocase: true, dot: true }));
    if (i) return { signal: "filesRead", file: i };
  }
  if (e.manifestDep && o && l.length > 0) {
    let i = new Map(o.entries()), s = (async () => {
      for (let { file: p, pattern: g } of e.manifestDep) for (let r of l) {
        if (!p.test(r)) continue;
        try {
          let m = i.get(r), u = m && (0, import_chunk_5sjwf92x.AU)(m) ? m.content : void 0;
          if (!u) {
            if ((0, import_chunk_f9x2f6cx.Y)()) {
              (0, import_chunk_74mx55jd.KQ)("plugin_relevance");
              continue;
            }
            if ((await (0, import_promises.stat)(r)).size > 524288) continue;
            u = await (0, import_promises.readFile)(r, "utf8");
          }
          if (g.test(u)) return r;
        } catch {
        }
      }
      return null;
    })(), f = await (0, import_chunk_5appeerh.qt)(s, 50, "manifestDep scan").catch(() => null);
    if (f) return { signal: "manifestDep", file: f };
  }
  return null;
}
