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
var chunk_0a69wnzr_exports = {};
__export(chunk_0a69wnzr_exports, {
  Aul: () => Aul,
  Bms: () => Bms,
  Cul: () => Cul,
  EMi: () => EMi,
  Min: () => Min,
  Rul: () => Rul,
  Ums: () => Ums,
  Wms: () => Wms,
  Zyr: () => Zyr,
  eSr: () => eSr,
  gkt: () => gkt,
  hkt: () => hkt,
  kMi: () => kMi,
  mkt: () => mkt,
  sho: () => sho,
  wMi: () => wMi,
  xul: () => xul
});
module.exports = __toCommonJS(chunk_0a69wnzr_exports);
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_4chf71g6 = require("/$bunfs/root/chunk-4chf71g6.js");
var import_chunk_g9n176jp = require("/$bunfs/root/chunk-g9n176jp.js");
var import_chunk_ta6q9jek = require("/$bunfs/root/chunk-ta6q9jek.js");
var import_chunk_pyawkp3j = require("/$bunfs/root/chunk-pyawkp3j.js");
var import_chunk_30a5awzz = require("/$bunfs/root/chunk-30a5awzz.js");
var import_chunk_6eq0mqyj = require("/$bunfs/root/chunk-6eq0mqyj.js");
var import_chunk_cvv9kfq3 = require("/$bunfs/root/chunk-cvv9kfq3.js");
var import_chunk_kemkq7qp = require("/$bunfs/root/chunk-kemkq7qp.js");
var import_chunk_bkfd2ttj = require("/$bunfs/root/chunk-bkfd2ttj.js");
var import_chunk_t99xdws4 = require("/$bunfs/root/chunk-t99xdws4.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_promises = require("fs/promises");
var import_path = require("path");
class v {
  directories = [];
  announced = /* @__PURE__ */ new Set();
  get() {
    return this.directories;
  }
  publish(o) {
    let e = (0, import_chunk_4smdap7r.M)([...o.additionalWorkingDirectories.values()].map((r) => r.path)).sort(), n = this.directories;
    if (n.length === e.length && n.every((r, s) => r === e[s])) return false;
    return this.directories = e, true;
  }
  noteAnnounced(o) {
    for (let e of o) this.announced.add(e);
  }
  everAnnounced() {
    return [...this.announced];
  }
  reset() {
    this.directories = [], this.announced.clear();
  }
}
var x = new import_chunk_2904xtvq.j(() => new v());
function O() {
  return x.of((0, import_chunk_f9x2f6cx.N)().host);
}
function mkt() {
  let o = O(), e = (0, import_chunk_f9x2f6cx.ns)(), n = (0, import_chunk_f9x2f6cx.Ed)();
  return o.noteAnnounced([...e === null ? [] : [e], ...n === null ? [] : [n], ...F(), ...o.get()]), o.get();
}
function w() {
  return O().get();
}
function Cul() {
  return O().everAnnounced();
}
function sho(o) {
  return O().publish(o);
}
function F() {
  try {
    return [(0, import_chunk_w578pjby.le)().cwd()];
  } catch {
    return [];
  }
}
var Zyr = new import_chunk_2904xtvq.j(() => ({ named: false }));
async function Ums(o) {
  if (o.has(import_chunk_ta6q9jek.fy) && (o.holdsSessionEvent(import_chunk_ta6q9jek.fy) || !(0, import_chunk_865at33z.Sy)())) return;
  if (Zyr.of((0, import_chunk_f9x2f6cx.N)().host).named) {
    o.record([import_chunk_ta6q9jek.fy]), o.recordSessionEvent(import_chunk_ta6q9jek.fy);
    return;
  }
  if (!(0, import_chunk_6e68m1dj.hn)()) return;
  let e;
  try {
    let n = (0, import_chunk_6mfepmbb.Sut)(), r = (await (0, import_promises.readdir)((0, import_path.dirname)(n))).filter((c) => c === (0, import_path.basename)(n) || c.startsWith(`${(0, import_path.basename)(n)}.`));
    e = (await Promise.all(r.map((c) => (0, import_promises.readdir)((0, import_path.join)((0, import_path.dirname)(n), c)).then((f) => f.length > 0, () => true)))).includes(true);
  } catch (n) {
    e = !(0, import_chunk_jv7av99m.kn)(n);
  }
  if (e && o.record([import_chunk_ta6q9jek.fy])) (0, import_chunk_cqa9hrgx.u)("api_tools_used_project_folder");
  if (e) o.recordSessionEvent(import_chunk_ta6q9jek.fy);
}
var y = new import_chunk_pzzqg6s3.ze(() => /* @__PURE__ */ new Set());
function Aul(o) {
  try {
    let e = y.of((0, import_chunk_f9x2f6cx.N)());
    for (let n of o) if ((0, import_chunk_cvv9kfq3.qf)(n)) e.add(n.name);
    else e.delete(n.name);
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
  }
}
function Bms(o) {
  return (0, import_chunk_cvv9kfq3.qf)({ name: o }) || y.peek((0, import_chunk_f9x2f6cx.N)())?.has(o) === true;
}
function Rul() {
  return (0, import_chunk_f9x2f6cx.Bp)((o, e) => {
    if (import_chunk_30a5awzz.Kln.has(e)) y.drop((0, import_chunk_f9x2f6cx.N)());
  });
}
var Min = "x-claude-code-sandy-plover", eSr = 64, A = 7168, H = 256, hkt = import_chunk_f9x2f6cx.p_, W = "tengu_tools_used_header_size", B = [10, 25, 50, 75, 90], S = /* @__PURE__ */ new Set([import_chunk_hn3cwwzt.ke, import_chunk_k883m4fq.De, import_chunk_rb36kwbn.lt, import_chunk_rb36kwbn.Dt, import_chunk_865at33z.Qr, import_chunk_865at33z.Sr, import_chunk_rb36kwbn.Ks, import_chunk_6eq0mqyj.My, import_chunk_060xwhvh._t, import_chunk_060xwhvh.Df, import_chunk_t99xdws4.co, import_chunk_kemkq7qp.OA, import_chunk_bkfd2ttj.iS]);
function wMi(o) {
  let e = o.filter(({ name: r }) => !S.has(r)), n = new Set((0, import_chunk_4smdap7r.bT)(e, ({ name: r, url: s, directory_entry: c }) => {
    if (s !== void 0 || c !== void 0) return `${s} ${c}`;
    let f = (0, import_chunk_px0hhsq7.mr)(r)?.serverName;
    return f === void 0 ? r : import_chunk_px0hhsq7.ch + f;
  }));
  return [...n, ...e.filter((r) => !n.has(r)), ...o.filter(({ name: r }) => S.has(r))];
}
function Wms(o) {
  let e = o.filter(({ name: p }) => p !== "" && Buffer.byteLength(p, "utf8") <= H).map(({ name: p, mcp: h, url: E, directory_entry: _, unresolved: R }) => ({ name: p, ...h === true && { mcp: h }, ...(0, import_chunk_g9n176jp.A_o)(E, _, R) })), n = [...e.filter(({ name: p }) => !S.has(p)), ...e.filter(({ name: p }) => S.has(p))], r = k(n);
  if (r.length === o.length) return { value: `[${r.join(",")}]`, sent: r.length, dropped: 0, incomplete: false };
  let s = [{ name: hkt }, ...wMi(e)].slice(0, eSr), c = 1 + s.length - A;
  for (let p of s) c += g(p).length;
  let f = /* @__PURE__ */ new Map();
  for (let p of s.toReversed()) {
    if (c <= 0) break;
    let { url: h, directory_entry: E, ..._ } = p;
    c -= g(p).length - g(_).length, f.set(p, _);
  }
  let m = k(s.map((p) => f.get(p) ?? p));
  return { value: `[${m.join(",")}]`, sent: m.length - 1, dropped: o.length - (m.length - 1), incomplete: true };
}
async function gkt(o) {
  let e = await kMi(), n = o.lastingConnectorDownloads(), r = e === "none" && n === "unread" ? "unknown" : e;
  if (o.noteConnectorDownloadsInReach(r), n === "held") o.record([import_chunk_pmryp5f3.vu]), o.recordSessionEvent(void 0, { server: { type: "unknown" } }), o.noteConnectorDataFromEarlierDownload();
  return r;
}
var T = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (o) => o.clear()), U = 6e4;
async function kMi() {
  let o = "unknown";
  try {
    let e = [(0, import_chunk_18rsj2ts.oa)(), (0, import_chunk_f9x2f6cx.ns)(), (0, import_chunk_f9x2f6cx.Ed)(), ...w()].filter((c) => c !== null), n = (0, import_chunk_pyawkp3j.DSr)() && !(0, import_chunk_4chf71g6.Qae)() && !(0, import_chunk_pyawkp3j.EHi)(), r = e.join("\0");
    if (!n) T.clear();
    let s = n ? T.get(r) : void 0;
    if (s !== void 0 && (s.found === "found" || Date.now() - s.at < U)) return s.found;
    if (o = await (0, import_chunk_pyawkp3j.THi)(e), n && o !== "unknown") {
      if (T.size >= 64) T.clear();
      T.set(r, { found: o, at: Date.now() });
    }
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`Connector downloads folder check failed, so this conversation is treated as possibly holding connector files: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" });
  }
  return o;
}
async function EMi(o) {
  if (await gkt(o) !== "none") o.record([import_chunk_pmryp5f3.vu]), o.recordSessionEvent(void 0, { server: { type: "unknown" } });
  await Ums(o), o.noteSessionDiskLook();
}
async function xul(o) {
  await EMi(o);
  let e = (0, import_chunk_g9n176jp.swr)(), n = /* @__PURE__ */ new Map();
  for (let m of o.names()) {
    let p = e ? (0, import_chunk_g9n176jp.Mhl)(m) : void 0, h = Bms(m);
    for (let E of (0, import_chunk_px0hhsq7.QHo)(m)) {
      let _ = n.get(E);
      if (_ === void 0 || D(_) && p !== void 0 && !D(p)) n.set(E, { name: E, ...h && { mcp: true }, ...p });
    }
  }
  let r = [...n.values()], s = Wms(r), c = o.holdsNamesForSession() ? Wms(r.filter(({ name: m }) => !o.isForSession(m))) : s;
  if (c.dropped > 0 && o.reportTruncationOnce()) (0, import_chunk_cqa9hrgx.l)("api_tools_used_header", "incomplete_list", { sent: c.sent, dropped: c.dropped });
  z(o, c);
  let f = s.value;
  if (f.includes('"directory_entry":') || f.includes('"url":')) (0, import_chunk_g9n176jp.Ohl)();
  if (f.includes('"mcp":true') && (0, import_chunk_30a5awzz.eo)().once("tools_used_mcp_mark")) (0, import_chunk_cqa9hrgx.u)("api_tools_used_mcp_mark");
  return f;
}
function D(o) {
  return o.url === void 0 && o.directory_entry === void 0 && o.unresolved !== true;
}
function z(o, e) {
  let n = e.sent + (e.incomplete ? 1 : 0), r = Buffer.byteLength(e.value, "utf8"), s = { count: b(n, eSr), bytes: b(r, A), capped: e.incomplete };
  if (!o.raiseHeaderSizeSteps(s)) return;
  (0, import_chunk_y53wbr8a.a)(W, { count: n, size_bytes: r, hit_cap: e.incomplete });
}
function b(o, e) {
  let n = 0;
  for (let r of B) if (o * 100 >= e * r) n = r;
  return n;
}
function k(o) {
  let e = [], n = 2;
  for (let r of o) {
    if (e.length === eSr) break;
    let s = g(r), c = s.length + (e.length === 0 ? 0 : 1);
    if (n + c > A) break;
    e.push(s), n += c;
  }
  return e;
}
function g(o) {
  return (0, import_chunk_w578pjby.cs)(o).replace(/[\u007f-\uffff]/g, (e) => `\\u${e.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
