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
var chunk_p3h9bq2s_exports = {};
__export(chunk_p3h9bq2s_exports, {
  kzr: () => kzr
});
module.exports = __toCommonJS(chunk_p3h9bq2s_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_s7eqtcpb = require("/$bunfs/root/chunk-s7eqtcpb.js");
var import_chunk_tg0cy969 = require("/$bunfs/root/chunk-tg0cy969.js");
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_path = require("path");
var D = new RegExp(String.raw`^[#.]*(\.env(\..*)?|\.envrc|.*\.(pem|key|p12|pfx|p8|ppk|keystore|jks)|.*_(rsa|dsa|ecdsa|ed25519)(_sk(_rk(_.*)?)?)?|.*credentials.*|device-keys\.json.*|history\.jsonl(\..*)?|\.[0-9a-f]{16}\.tmp|.*secrets?\.(ya?ml|json|toml)|terraform\.tfvars(\.json)?|\.netrc|\.npmrc|\.pypirc|deploykey|kubeconfig(\.(ya?ml|json))?)(` + import_chunk_w82axegn.d_r + String.raw`|#)*$`, "is"), d = [...import_chunk_w82axegn.fxi.map((t) => [t]), ...import_chunk_w82axegn.pxi], G = d.filter(([t, a]) => t !== ".claude" || a !== "settings.json"), H = Math.max(...d.map((t) => t.length)), U = /^[\x00-\x7f]*$/;
function N(t) {
  return t.slice(0, 1) + (0, import_chunk_7cfjrnwy.nt)(t.slice(1), ".");
}
var Y = new RegExp((0, import_chunk_4smdap7r.M)([...d.map(([t]) => N(t ?? "")), ...import_chunk_w82axegn.oUt.map(([, t]) => N(t))]).map(import_chunk_7cfjrnwy.fo).join("|"));
function W(t) {
  if (t.length > import_chunk_w82axegn.qq) return true;
  let a = (0, import_chunk_w82axegn.lpe)(t);
  if (a === null) return true;
  let m = [...(0, import_chunk_w82axegn.osn)(t).map((n) => n((0, import_chunk_w82axegn.u_r)(t))), t.toLowerCase()].map((n) => (0, import_chunk_w82axegn.SAe)(n));
  return D.test(t) || m.some((n) => n.length > import_chunk_w82axegn.nsn) || (0, import_chunk_4smdap7r.M)([...m.flat(), ...a.map((n) => n.toLowerCase())]).some((n) => D.test(n) || (0, import_chunk_w82axegn.Sxi)(n) && t !== ".mcp.json" || (0, import_chunk_w82axegn.Hfo)(n));
}
function kzr(t) {
  let a = (0, import_chunk_839h1d5e.Co)((e) => (0, import_chunk_w82axegn.E9e)(e)), m = t.split((0, import_chunk_w82axegn._xi)()).filter((e) => e !== ""), n = [...m, "x"].join("/"), _ = (0, import_chunk_w82axegn.lpe)(n), R = [n, ..._ ?? []].map((e) => e.split("/").slice(0, -1)), g = R.map((e) => e.map((o) => a(o))), S = `${/^[a-z]:/i.test(t) ? "" : "/"}${m.map((e) => `${e}/`).join("")}`, T = _ !== null && (0, import_path.isAbsolute)(t) && !(0, import_chunk_w82axegn.dpe)(`${S}x`);
  if (g.some((e) => d.some((o) => (0, import_chunk_w82axegn.CNn)(e, o))) || T && (0, import_chunk_w82axegn.lfs)(`${S}x`)) return () => true;
  let j = (0, import_chunk_z6pfqf6e.tR)(`/${m.join("/")}`).split("/").slice(1), C = T ? (0, import_chunk_s7eqtcpb.z_r)().flatMap(({ literal: e, tail: o }) => {
    let r = e.split(/[\\/]/).filter((i) => i !== "").map((i) => i.toLowerCase()), p = o.toLowerCase().split(/[*?[\]/]/).find((i) => i !== "");
    return [...R, j].filter((i) => i.slice(0, r.length).every((f, u) => f.toLowerCase() === r[u] || a(f).includes(r[u] ?? ""))).map((i) => N(r[i.length] ?? p ?? ""));
  }) : [], A = C.length === 0 ? null : new RegExp((0, import_chunk_4smdap7r.M)(C).map(import_chunk_7cfjrnwy.fo).join("|")), x = g.some((e) => (0, import_chunk_w82axegn.dfs)([...e, ["config"]])), h = g.flatMap((e) => Array.from({ length: H - 1 }, (o, r) => e.slice(-(r + 1))).filter((o) => d.some((r) => r.length > o.length && (0, import_chunk_w82axegn.CNn)(o, r.slice(0, o.length))))), L = (0, import_chunk_4smdap7r.M)(g.flatMap((e) => import_chunk_w82axegn.oUt.map(([o]) => o).filter((o) => e.at(-1)?.includes(o)))), F = h.length === 0 && L.length === 0;
  return (e) => {
    if ((0, import_chunk_w82axegn.dpe)(e)) return true;
    if ((0, import_chunk_tg0cy969.tKr)(e) || (0, import_chunk_tg0cy969.nKr)(e)) return true;
    let o = e.toLowerCase(), r = U.test(e), p = [e, ...(0, import_chunk_w82axegn.yxi)(e)], i = p.flatMap(import_chunk_w82axegn.Bst), f = [...p, ...i], u = i.map((s) => `/${(0, import_chunk_7cfjrnwy.pP)(s, "/")}`);
    if ((0, import_chunk_4smdap7r.M)(f.map((s) => s.split("/").filter((l) => l !== "").at(-1) ?? "")).some((s) => W(s) || s === ".mcp.json" && !e.endsWith(s) || (0, import_chunk_w82axegn.hxi)(s).some((l) => (0, import_chunk_w82axegn.Hfo)(l) || x && import_chunk_w5s307zm.y0r.includes(l))) || u.some((s) => s.endsWith("/.mcp.json")) || A !== null && (!r || A.test(o)) && p.some((s) => (0, import_chunk_w82axegn.lfs)(`${S}${s}`))) return true;
    let w = o.indexOf(".git"), I = w === -1 ? -1 : o.indexOf("/", w);
    if (F && r && !Y.test(o) && (I === -1 || !o.includes("config", I))) return false;
    let O = `/${S}${e}`.endsWith("/.claude/settings.json") && !u.some((s) => s.endsWith("/.claude/settings.json")) ? G : d, y = (0, import_chunk_w82axegn.lpe)(e);
    return y === null || ["", ...L.map((s) => `${s}/`)].some((s) => p.some((l) => (0, import_chunk_w82axegn.wG)(`${s}${l}`))) || (0, import_chunk_4smdap7r.M)([...f, ...y]).some((s) => {
      let l = s.split("/").filter((c) => c !== "").map((c, E, b) => E === b.length - 1 ? (0, import_chunk_w82axegn.hxi)(c) : a(c));
      return l.some((c) => c.length > import_chunk_w82axegn.nsn) || (0, import_chunk_w82axegn.c0)(s) || (0, import_chunk_w82axegn.dfs)(l) || [[], ...h].some((c) => O.some((E) => (0, import_chunk_w82axegn.CNn)([...c, ...l], E)) || (0, import_chunk_w82axegn.cfs)([...c, ...l]));
    });
  };
}
