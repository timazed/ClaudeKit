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
var chunk_9g965wca_exports = {};
__export(chunk_9g965wca_exports, {
  Sor: () => Sor,
  Wni: () => Wni,
  YAn: () => YAn,
  qqe: () => qqe
});
module.exports = __toCommonJS(chunk_9g965wca_exports);
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_hrmqj4hy = require("/$bunfs/root/chunk-hrmqj4hy.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_tnmn1726 = require("/$bunfs/root/chunk-tnmn1726.js");
var import_chunk_rtsmzy7m = require("/$bunfs/root/chunk-rtsmzy7m.js");
var import_chunk_5zps0wmn = require("/$bunfs/root/chunk-5zps0wmn.js");
var c = [import_chunk_r8478wtb.Vt, import_chunk_r8478wtb.Zf].flatMap((o) => [o, ...(0, import_chunk_qebpc5de.vEe)(o)]);
function l(o, r) {
  let s = [...Object.entries(o.options.toolAliases ?? {}), ...Object.entries((0, import_chunk_bz1f2qnq.Z)(o).toolAliases ?? {})], e = s.flatMap(([n, i]) => [...r.includes(i) ? [n] : [], ...r.includes(n) ? [i] : []]), t = s.flatMap(([n, i]) => e.includes(i) ? [n] : []);
  return [...r, ...e, ...t];
}
function a(o) {
  return o.hooks.some((r) => !(0, import_chunk_rtsmzy7m.D$t)({ hook: r }));
}
function u(o, r, s = true) {
  if (!o || o === "*") return true;
  if (/^[a-zA-Z0-9_|, -]+$/.test(o)) return o.split(/[|,]/).map((e) => e.trim()).some((e) => r.includes(e) || r.includes((0, import_chunk_qebpc5de.Gl)(e)));
  try {
    let e = (0, import_chunk_tnmn1726.nfo)(o);
    return r.some((t) => e.test(t));
  } catch (e) {
    return s || e instanceof import_chunk_tnmn1726.ope;
  }
}
function d(o, r, s = () => false) {
  let e = (0, import_chunk_5zps0wmn.Ib)("tool.call").filter((n) => !s(n)), t = (0, import_chunk_5zps0wmn.Ib)("tool.check");
  return (0, import_chunk_5zps0wmn.Qi)("classic.PreToolUse", void 0, (0, import_chunk_5zps0wmn.Ib)("classic.PreToolUse")) || o.some((n) => (0, import_chunk_5zps0wmn.Gq)(n, e) || (0, import_chunk_5zps0wmn.aAe)(r ? { tool: n } : (0, import_chunk_rtsmzy7m.UO)({ name: n }), t));
}
function YAn(o, r) {
  try {
    let s = r.flatMap((t) => [t, ...(0, import_chunk_qebpc5de.vEe)(t)]), e = l(o, s);
    return d(e, e.length > s.length, import_chunk_59mwkeke.yd);
  } catch {
    return true;
  }
}
function qqe(o, r) {
  try {
    let s = r === void 0 ? c : [...c, r, ...(0, import_chunk_qebpc5de.vEe)(r)], e = l(o, s);
    if (d(e, e.length > s.length)) return true;
    if (o.sessionHooksRegistry.has(o.agentId ?? o.session.id, "PreToolUse")) return true;
    return (0, import_chunk_hrmqj4hy.zP)("PreToolUse").some((t) => u(t.matcher, e) && a(t));
  } catch {
    return true;
  }
}
function Wni(o, r, s) {
  try {
    let e = l(o, [r, ...(0, import_chunk_qebpc5de.vEe)(r)]);
    return YAn(o, [r]) || (0, import_chunk_hrmqj4hy.zP)("PreToolUse").some((t) => u(t.matcher, e) && a(t) && !("pluginId" in t && s(t.pluginId)));
  } catch {
    return true;
  }
}
var p = [import_chunk_rb36kwbn.lt, import_chunk_rb36kwbn.Dt].flatMap((o) => [o, ...(0, import_chunk_qebpc5de.vEe)(o)]);
function Sor() {
  return d(p, false, import_chunk_59mwkeke.yd) || (0, import_chunk_hrmqj4hy.zP)("PreToolUse").some((o) => u(o.matcher, p, false) && a(o));
}
