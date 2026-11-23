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
var chunk_zsd70pa1_exports = {};
__export(chunk_zsd70pa1_exports, {
  A6o: () => A6o,
  EZn: () => EZn,
  R6o: () => R6o,
  _9s: () => _9s,
  g9s: () => g9s,
  h9s: () => h9s,
  m9s: () => m9s,
  vZn: () => vZn
});
module.exports = __toCommonJS(chunk_zsd70pa1_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
function EZn() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "daemon.status.json");
}
function vZn() {
  return import_chunk_hkvzj051.at.state("daemon-status");
}
async function m9s(s, o) {
  let r = { supervisorPid: process.pid, supervisorProcStart: (0, import_chunk_rb36kwbn.aFe)(), writtenAt: Date.now(), workers: s };
  if ((0, import_chunk_m15w38ag.ne)() && o !== void 0) try {
    let e = await o.write(vZn(), (0, import_chunk_w578pjby._)(r, null, 2), { mode: 438 & ~process.umask() });
    if (!e.ok) (0, import_chunk_w578pjby.t)(`writeDaemonStatus: ${e.error.code}`);
    return e.ok;
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`writeDaemonStatus: ${(0, import_chunk_jv7av99m.d)(e)}`), false;
  }
  try {
    return await (0, import_chunk_8j3h6yzg.Vn)().atomicWrite(EZn(), (0, import_chunk_w578pjby._)(r, null, 2)), true;
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`writeDaemonStatus: ${(0, import_chunk_jv7av99m.d)(e)}`), false;
  }
}
async function h9s(s) {
  if ((0, import_chunk_m15w38ag.ne)() && s !== void 0) {
    try {
      let o = await s.delete(vZn());
      if (!o.ok) (0, import_chunk_w578pjby.t)(`removeDaemonStatus: ${o.error.code}`);
    } catch (o) {
      (0, import_chunk_w578pjby.t)(`removeDaemonStatus: ${(0, import_chunk_jv7av99m.d)(o)}`);
    }
    return;
  }
  try {
    await (0, import_chunk_8j3h6yzg.Vn)().delete(EZn());
  } catch {
  }
}
async function A6o(s) {
  let o;
  if ((0, import_chunk_m15w38ag.ne)() && s !== void 0) {
    let i;
    try {
      i = await s.readText([vZn()]);
    } catch {
      return null;
    }
    if (!i.ok) return null;
    let u = i.value.items[0];
    if (!u.found) return null;
    o = u.value;
  } else try {
    o = await (0, import_chunk_8j3h6yzg.Vn)().read(EZn());
  } catch {
    return null;
  }
  let r = (0, import_chunk_0jve1fep.et)(o, false);
  if (!r || typeof r !== "object") return null;
  let e = r;
  if (typeof e.supervisorPid !== "number" || typeof e.workers !== "object" || e.workers === null) return null;
  try {
    process.kill(e.supervisorPid, 0);
  } catch {
    return null;
  }
  let a = typeof e.supervisorProcStart === "string" ? e.supervisorProcStart : void 0;
  if (!await (0, import_chunk_rb36kwbn.GC)(e.supervisorPid, a)) return null;
  return r;
}
var m = 4096, p = 200, R6o = 64, f = 32;
function S(s) {
  let o = [], r = (0, import_chunk_adx6804h.c)({ servedFolder: (0, import_chunk_adx6804h.c)({ dir: (0, import_chunk_adx6804h.n)().min(1).max(m), sessions: (0, import_chunk_adx6804h.Zc)().positive().max(R6o) }) });
  for (let e of Object.values(s?.workers ?? {})) {
    let a = r.safeParse(e);
    if (a.success) o.push(a.data.servedFolder);
  }
  return o;
}
async function g9s(s, o) {
  try {
    let r = await A6o(o);
    return r?.supervisorPid === s ? S(r) : [];
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`readServedFolders: ${(0, import_chunk_jv7av99m.d)(r)}`);
  }
  return [];
}
function _9s(s) {
  let r = s.slice(0, f).map(({ dir: a, sessions: i }) => `serving tools: ${i} ${(0, import_chunk_7cfjrnwy.O)(i, "cloud session")} in ${(0, import_chunk_tp3c5q2s.kge)((0, import_chunk_7cfjrnwy.el)(a), p)}`), e = s.length - r.length;
  return e > 0 ? r.concat(`serving tools: and ${e} more ${(0, import_chunk_7cfjrnwy.O)(e, "folder")}`) : r;
}
