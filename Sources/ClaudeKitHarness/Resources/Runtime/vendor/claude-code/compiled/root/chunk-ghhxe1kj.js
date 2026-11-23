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
var chunk_ghhxe1kj_exports = {};
__export(chunk_ghhxe1kj_exports, {
  AQ: () => AQ,
  Dfr: () => Dfr,
  HHn: () => HHn,
  Yss: () => Yss,
  Ztn: () => Ztn,
  lG: () => lG,
  nSi: () => nSi,
  oSi: () => oSi,
  qss: () => qss,
  rSi: () => rSi,
  tSi: () => tSi,
  wCe: () => wCe
});
module.exports = __toCommonJS(chunk_ghhxe1kj_exports);
var import_chunk_dzf5h538 = require("/$bunfs/root/chunk-dzf5h538.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_1tyxkk56 = require("/$bunfs/root/chunk-1tyxkk56.js");
var import_chunk_4vfdya4f = require("/$bunfs/root/chunk-4vfdya4f.js");
var import_chunk_hnt4bwpe = require("/$bunfs/root/chunk-hnt4bwpe.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_gjzwg6ck = require("/$bunfs/root/chunk-gjzwg6ck.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_util = require("util");
(0, import_chunk_adx6804h.B)();
class D {
  customThemeBases = void 0;
  userThemes = void 0;
  pluginThemes = (0, import_chunk_se72nykz.ps)([]);
  systemTheme = void 0;
  systemThemeChanged = (0, import_chunk_69qhefwa.Be)();
  onSystemThemeChange = this.systemThemeChanged.subscribe;
  customThemeBase(e) {
    return this.customThemeBases?.get(e);
  }
  addCustomThemeBases(e) {
    this.customThemeBases ??= /* @__PURE__ */ new Map();
    for (let r of e) this.customThemeBases.set(r.slug, r.base);
  }
  commitUserThemes(e) {
    if (this.customThemeBases = new Map(e.map((r) => [r.slug, r.base])), this.addCustomThemeBases(this.pluginThemes.getState()), this.userThemes === void 0 || !(0, import_util.isDeepStrictEqual)(this.userThemes, e)) this.userThemes = e;
    return this.userThemes;
  }
  cachedUserThemes() {
    return this.userThemes ?? [];
  }
  cachedSystemTheme() {
    return this.systemTheme;
  }
  setSystemTheme(e) {
    if (this.systemTheme === e) return;
    this.systemTheme = e, this.systemThemeChanged.emit();
  }
}
var K = new import_chunk_2904xtvq.j(() => new D());
function AQ() {
  return K.of((0, import_chunk_f9x2f6cx.N)().host);
}
var E = "custom:", M = 262144;
function tSi(e) {
  return AQ().customThemeBase(e);
}
function qss() {
  return AQ().cachedUserThemes();
}
function nSi(e) {
  let r = AQ();
  return r.cachedUserThemes().find((o) => o.slug === e) ?? r.pluginThemes.getState().find((o) => o.slug === e);
}
function Ztn() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "themes");
}
function wCe(e) {
  return `${E}${e}`;
}
function lG(e) {
  return e.startsWith(E) ? e.slice(E.length) : null;
}
function x(e, r, o) {
  let i;
  try {
    i = (0, import_chunk_w578pjby.te)(r);
  } catch {
    (0, import_chunk_w578pjby.t)(`[theme] ${e}.json: invalid JSON`, { level: "warn" });
    return;
  }
  if (typeof i !== "object" || i === null || Array.isArray(i)) return;
  let m = i, u = (0, import_chunk_1tyxkk56.dlo)(m.base) ? m.base : "dark", y = typeof m.name === "string" ? m.name : e, T = {};
  if (typeof m.overrides === "object" && m.overrides !== null) {
    let s = (0, import_chunk_1tyxkk56.LQ)(u);
    for (let [a, g] of Object.entries(m.overrides)) if (Object.hasOwn(s, a) && (0, import_chunk_1tyxkk56.Bfe)(g)) T[a] = g;
  }
  return { slug: e, name: y, base: u, overrides: T, source: o };
}
async function k(e, r, o, i, m, u, y) {
  if (i && m) {
    let s;
    try {
      s = await i.read([m]);
    } catch (g) {
      if (u) u.readErrors++;
      (0, import_chunk_w578pjby.t)(`[theme] failed to read ${e}: ${(0, import_chunk_jv7av99m.d)(g)}`, { level: "warn" });
      return;
    }
    if (!s.ok) {
      if (u) u.readErrors++;
      (0, import_chunk_w578pjby.t)(`[theme] failed to read ${e}: ${(0, import_chunk_7n1spq36.un)(s.error)}`, { level: "warn" });
      return;
    }
    let a = s.value.items[0];
    return a?.found ? x(r, Buffer.from(a.value).toString("utf8"), o) : void 0;
  }
  let T;
  try {
    let s = await (0, import_promises.stat)(e);
    if (!s.isFile()) return;
    if (s.size > M) {
      (0, import_chunk_w578pjby.t)(`[theme] ${e} exceeds 256KB; skipping`, { level: "warn" });
      return;
    }
    T = await (0, import_promises.readFile)(e, "utf8");
  } catch (s) {
    if (y?.(s), !(0, import_chunk_jv7av99m.J)(s)) (0, import_chunk_w578pjby.t)(`[theme] failed to read ${e}`, { level: "warn" });
    return;
  }
  return x(r, T, o);
}
async function rSi(e, r, o = "", i, m) {
  return await A(e, r, o, void 0, i, m) ?? [];
}
async function A(e, r, o, i, m, u) {
  if (i && r === "user" && e === Ztn()) {
    let s = { namespace: "userConfigDir", dir: "themes" }, a = [], g = await (0, import_chunk_hnt4bwpe.Nd)((h) => i.listEntries(s, h === void 0 ? void 0 : { cursor: h }), (h) => {
      for (let f of h) {
        if (f.kind !== "key") continue;
        let l = f.key.namespace === "userConfigDir" ? f.key.relPath.at(-1) ?? "" : "";
        if ((0, import_path.extname)(l) !== ".json") continue;
        if ((f.size ?? 0) > M) {
          (0, import_chunk_w578pjby.t)(`[theme] ${(0, import_path.join)(e, l)} exceeds 256KB; skipping`, { level: "warn" });
          continue;
        }
        a.push({ slug: o + (0, import_path.basename)(l, ".json"), name: l });
      }
    }).catch((h) => ((0, import_chunk_w578pjby.t)(`[theme] list themes failed: ${(0, import_chunk_jv7av99m.d)(h)}; keeping the previously loaded themes (if any)`, { level: "warn" }), null));
    if (g === null) return null;
    switch (g.status) {
      case "done":
        break;
      case "error":
        return (0, import_chunk_w578pjby.t)(`[theme] list themes failed: ${(0, import_chunk_7n1spq36.un)(g.error)}; keeping the previously loaded themes (if any)`, { level: "warn" }), null;
      case "capped":
        return (0, import_chunk_w578pjby.t)(`[theme] list themes exceeded ${import_chunk_hnt4bwpe.pS} pages; keeping the previously loaded themes (if any)`, { level: "warn" }), null;
    }
    if (a.length === 0) return [];
    let z = a.map((h) => import_chunk_hkvzj051.at.userConfigDir("themes", [h.name])), S;
    try {
      S = await i.read(z);
    } catch (h) {
      (0, import_chunk_w578pjby.t)(`[theme] batched theme read failed: ${(0, import_chunk_jv7av99m.d)(h)}`, { level: "warn" });
    }
    let v = [];
    if (S?.ok) {
      for (let [h, f] of S.value.items.entries()) {
        if (!f.found) continue;
        let l = x(a[h].slug, Buffer.from(f.value).toString("utf8"), r);
        if (l) v.push(l);
      }
      return v;
    }
    let P = { readErrors: 0 };
    for (let [h, f] of a.entries()) {
      let l = await k((0, import_path.join)(e, f.name), f.slug, r, i, z[h], P);
      if (l) v.push(l);
    }
    if (v.length === 0 && P.readErrors > 0) return (0, import_chunk_w578pjby.t)(`[theme] could not read any of ${a.length} listed theme files; keeping the previously loaded themes (if any)`, { level: "warn" }), null;
    return v;
  }
  let y;
  try {
    y = await (0, import_promises.readdir)(e);
  } catch (s) {
    if ((0, import_chunk_jv7av99m.w)(s) === "ENOTDIR") {
      let a = await k(e, o + (0, import_path.basename)(e, ".json"), r, void 0, void 0, void 0, u);
      return a ? [a] : [];
    }
    if (u?.(s), !(0, import_chunk_jv7av99m.fn)(s)) (0, import_chunk_w578pjby.t)(`[theme] readdir ${e} failed`, { level: "warn" });
    return [];
  }
  let T = [];
  for (let s of y) {
    if ((0, import_path.extname)(s) !== ".json") continue;
    if (m !== void 0 && await m(e, s)) continue;
    let a = await k((0, import_path.join)(e, s), o + (0, import_path.basename)(s, ".json"), r, void 0, void 0, void 0, u);
    if (a) T.push(a);
  }
  return T;
}
var HHn = (0, import_chunk_gjzwg6ck.gO)(async (e) => {
  let r = AQ(), o = (0, import_chunk_0pb268nk.Lr)("themes") ? [] : await A(Ztn(), "user", "", e) ?? r.cachedUserThemes();
  return o.sort((i, m) => i.name.localeCompare(m.name)), r.commitUserThemes(o);
}), X = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), base: (0, import_chunk_adx6804h.n)(), overrides: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()) }));
async function Dfr(e, r) {
  let o = { name: e.name, base: e.base, overrides: e.overrides }, i = `${e.slug}.json`;
  if ((0, import_chunk_m15w38ag.ne)() && r !== void 0 && (0, import_chunk_hkvzj051.Ao)(i)) {
    let m = (0, import_chunk_w578pjby._)(o, null, 2) + `
`, u = await r.write(import_chunk_hkvzj051.at.userConfigDir("themes", [i]), m, { publishDiscipline: "atomic", mode: 438 & ~process.umask() });
    if (!u.ok) throw (0, import_chunk_w578pjby.t)(`[theme] v5 save ${e.slug} failed: ${(0, import_chunk_7n1spq36.un)(u.error)}`, { level: "warn" }), Error("theme save failed");
    return;
  }
  await (0, import_chunk_4vfdya4f.$De)((0, import_path.join)(Ztn(), `${e.slug}.json`), X, { defaultValue: () => ({ name: e.slug, base: "dark", overrides: {} }), ensureDir: true, indent: 2, trailingNewline: true }).write(o);
}
function oSi(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "theme";
}
function Yss(e) {
  if ((0, import_chunk_0pb268nk.Lr)("themes")) return () => {
  };
  let r = import_chunk_dzf5h538.ZO.watch(Ztn(), { persistent: true, ignoreInitial: true, depth: 0, awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 }, ignorePermissionErrors: true });
  return r.on("add", e), r.on("change", e), r.on("unlink", e), r.on("error", (o) => (0, import_chunk_w578pjby.t)(`[theme] watcher error: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "warn" })), () => void r.close();
}
