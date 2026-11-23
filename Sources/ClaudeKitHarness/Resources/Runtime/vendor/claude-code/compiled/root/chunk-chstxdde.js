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
var chunk_chstxdde_exports = {};
__export(chunk_chstxdde_exports, {
  TGt: () => TGt,
  Tlt: () => Tlt,
  Wjn: () => Wjn,
  jjn: () => jjn,
  pGe: () => pGe,
  xj: () => xj
});
module.exports = __toCommonJS(chunk_chstxdde_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_hym6yzrf = require("/$bunfs/root/chunk-hym6yzrf.js");
var l = 1e3;
function Wjn(e = process.argv.slice(2)) {
  return (0, import_chunk_dw5px5e0.ZOe)(e) && (0, import_chunk_dw5px5e0.Tb)("--output-format", e) === "stream-json";
}
function pGe() {
  return (0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS);
}
var d = /* @__PURE__ */ new Set(["org_config_required_unavailable", "org_config_refused", "config_file_invalid"]);
function f(e) {
  return d.has(e) || pGe();
}
function jjn(e, t = process.argv.slice(2)) {
  let r = (0, import_chunk_dw5px5e0.Tb)("--session-id", t);
  return ((0, import_chunk_dw5px5e0.Tb)("--sdk-url", t) === void 0 ? (0, import_chunk_mzmcvr6c.ht)(r) : r) || e;
}
function Tlt({ sessionId: e, message: t, reason: r, invalidConfigFile: i, resultIndex: n = 0 }) {
  return { ...(0, import_chunk_hym6yzrf.LV)(e, [t]), ...r !== void 0 && { startup_failure_reason: r }, ...i !== void 0 && { invalid_config_file: i }, ...n !== null && { result_index: n } };
}
async function xj(e) {
  if (f(e.reason)) await TGt([Tlt({ ...e, sessionId: jjn(e.sessionId) })]);
}
async function TGt(e, { goesOn: t = false } = {}) {
  let r = process.stdout;
  if (!Wjn() || r.writableEnded || r.destroyed) return false;
  let i = e.map((o) => JSON.stringify(o) + `
`).join(""), n = (o) => {
  }, u = new Promise((o) => {
    n = o;
  }), s = () => n(false);
  r.once("error", s);
  try {
    r.write(i, (o) => n(!o));
  } catch {
    return false;
  }
  let a = await (0, import_chunk_5appeerh.me)(u, l) ?? false;
  if (t && a) r.off("error", s);
  return a;
}
