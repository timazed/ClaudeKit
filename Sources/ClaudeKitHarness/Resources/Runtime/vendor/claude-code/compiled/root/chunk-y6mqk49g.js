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
var chunk_y6mqk49g_exports = {};
__export(chunk_y6mqk49g_exports, {
  CKt: () => CKt,
  GQi: () => GQi,
  OHr: () => OHr,
  PHr: () => PHr,
  n1l: () => n1l,
  o1l: () => o1l,
  r1l: () => r1l,
  s1l: () => s1l,
  t1l: () => t1l
});
module.exports = __toCommonJS(chunk_y6mqk49g_exports);
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_dvkg7v5x = require("/$bunfs/root/chunk-dvkg7v5x.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_child_process = require("child_process");
var import_os = require("os");
var PHr = ["https_proxy", "HTTPS_PROXY", "http_proxy", "HTTP_PROXY"];
function t1l(e) {
  let n = PHr.find((o) => e[o]), t = n ? e[n] : void 0;
  return n && t ? { value: t, source: n } : void 0;
}
function l(e) {
  try {
    return new URL(e);
  } catch {
    return;
  }
}
function GQi(e) {
  let { no_proxy: n, NO_PROXY: t } = e;
  if (n && t && n !== t) return `${n},${t}`;
  return n || t;
}
function n1l(e) {
  return e.no_proxy === "*" || e.NO_PROXY === "*" ? "*" : GQi(e);
}
function g(e) {
  return (typeof e === "string" ? e : "").toLowerCase().split(/[,\s]+/).filter(Boolean);
}
function OHr(e) {
  let n = l(e)?.hostname.toLowerCase() ?? "";
  return (0, import_chunk_dvkg7v5x.DM)(n) || /^127(\.\d{1,3}){3}$/.test(n);
}
function r1l(e, n, { ranges: t = false } = {}) {
  if (n === "*") return true;
  let o = l(e);
  if (!o) return false;
  let r = o.hostname.toLowerCase(), a = o.protocol === "https:" || o.protocol === "wss:", s = `${r}:${o.port || (a ? "443" : "80")}`, c = r.replace(/^\[|\]$/g, ""), d = t && (0, import_chunk_dvkg7v5x.qee)(c) !== void 0;
  return g(n).some((i) => {
    if (d) {
      let u = (0, import_chunk_dvkg7v5x.qee)(i);
      if ((0, import_chunk_dvkg7v5x.AEe)(c, u ? `${i}/${u.length * 8}` : i)) return true;
    }
    if (i.includes(":")) return s === i;
    return i.startsWith(".") ? r === i.slice(1) || r.endsWith(i) : r === i;
  });
}
function o1l(e, n) {
  let t = l(e);
  if (!t) return false;
  let o = t.hostname.replace(/^\[|\]$/g, "").replace(/(^|[^.])\.+$/, "$1"), r = t.port || "443";
  return g(n).some((a) => {
    let s = /^(\[.*\]|[^:]*):(\d+)$/.exec(a);
    if (s && s[2] !== r) return false;
    let c = (s?.[1] ?? a).replace(/^\[|\]$/g, "").replace(/(^|[^.])\.+$/, "$1");
    return /^[*.]/.test(c) ? o.endsWith(c.replace(/^\*/, "")) : o === c || (0, import_chunk_dvkg7v5x.P_)(o) && (0, import_chunk_dvkg7v5x.P_)(c);
  });
}
var _ = /* @__PURE__ */ new Set([...import_chunk_9zdrdv25.qqt, "AWS_BEARER_TOKEN_BEDROCK", "INPUT_AWS_BEARER_TOKEN_BEDROCK", ...import_chunk_gd77dyw4.P6e]), h = null;
function s1l(e) {
  h = e;
}
async function CKt() {
  {
    if ((0, import_chunk_ch6jxpf8.dL)().profile === void 0) return;
    let { externalDataInterceptor: e } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-gh9z80td.js"))).then((m2) => (0, import_chunk_w1d7ygsk.rt)(m2.default, 1));
    e.getTokenRecord().exec = P;
  }
}
function P(e, ...n) {
  let t = n.length === 1 ? n[0] : n[1], o = n.length === 1 ? {} : n[0];
  Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-gh9z80td.js"))).then((m2) => (0, import_chunk_w1d7ygsk.rt)(m2.default, 1)).then(({ parseKnownFiles: r }) => r({})).then((r) => {
    let a = /* @__PURE__ */ new Set(), s = (0, import_chunk_ch6jxpf8.dL)().profile, c = false;
    while (!c && s !== void 0 && !a.has(s)) a.add(s), c = r[s]?.credential_process === e, s = r[s]?.source_profile;
    if (c) {
      let d = h;
      if (d === null) throw Error("Claude Code did not run the organization's AWS credential_process: an internal list of environment variables to remove from it was not set up. This is a bug in Claude Code.");
      (0, import_chunk_ch6jxpf8.cL)(() => {
        let i = { ...process.env }, u = /* @__PURE__ */ new Set([..._, ...d().map(import_chunk_9zdrdv25.sP)]);
        for (let f of Object.keys(i)) if (u.has((0, import_chunk_9zdrdv25.sP)(f))) delete i[f];
        let p = (0, import_os.homedir)();
        if ((0, import_chunk_cg8dqz0a.x)() !== "windows") i.HOME ||= p;
        m(e, { cwd: p, env: i }, t);
      });
    } else m(e, o, t);
  }).catch((r) => t((0, import_chunk_jv7av99m.D)(r), { stdout: "", stderr: "" }));
}
function m(e, n, t) {
  (0, import_chunk_wn8z7ghn.iC)(), (0, import_child_process.exec)(e, { ...n, windowsHide: true }, (o, r, a) => t(o, { stdout: r, stderr: a }));
}
