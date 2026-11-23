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
var chunk_sg0rp1h5_exports = {};
__export(chunk_sg0rp1h5_exports, {
  DRn: () => DRn,
  LRn: () => LRn,
  S8o: () => S8o,
  Vgt: () => Vgt,
  fsi: () => fsi,
  msr: () => msr,
  psr: () => psr,
  x7r: () => x7r,
  y8o: () => y8o
});
module.exports = __toCommonJS(chunk_sg0rp1h5_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_478yxt5w = require("/$bunfs/root/chunk-478yxt5w.js");
var import_chunk_mxhw2w5n = require("/$bunfs/root/chunk-mxhw2w5n.js");
var import_chunk_bsw3jbbx = require("/$bunfs/root/chunk-bsw3jbbx.js");
var import_chunk_w8ry7jkt = require("/$bunfs/root/chunk-w8ry7jkt.js");
var import_chunk_ye486ddj = require("/$bunfs/root/chunk-ye486ddj.js");
var import_chunk_271f5kxt = require("/$bunfs/root/chunk-271f5kxt.js");
var import_chunk_a8ey418s = require("/$bunfs/root/chunk-a8ey418s.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_promises2 = require("stream/promises");
var DRn = "task-files", L = 6e4, B = 67108864, psr = 20, A = 200, P = /\.[A-Za-z0-9]{1,16}$/, z = 1024, D = ["scf url lnk pif website shs shb xnk library-ms searchconnector-ms search-ms osdx settingcontent-ms appcontent-ms", "appref-ms application appinstaller vsto xbap jnlp", "theme themepack deskthemepack msstyles wmz wms wmd", "hta chm its scr cpl msc wsf wsh ws wsc sct vbe jse psc1 wsb gadget", "diagcab diagpkg diagcfg printerexport webpnp ins isp prf ops reg", "rdp ica wcx msrcincident mcl remmina vnc", "iqy dqy oqy rqy slk odc udl pbids xlw xlb xll xlam xla ppam ppa wll accda accde mda mde ade adp", "mad maf mag mam maq mar mas mau mav maw", "webloc inetloc fileloc afploc ftploc mailloc newsloc vncloc atloc savedsearch terminal mobileconfig desktop kdelnk"].join(" ").split(" "), M = new RegExp(`(?:\\.(?:${D.join("|")})|^desktop\\.ini|^autorun\\.inf)$`, "i"), H = "\xA5\u20A9\u2216\u2044\u2215\u02BA\u030E\u02B9\u02BC\u02C8\u2032\u02CB\u0300\u2035\u0589\u2236\u066A\u2217\u3008\u3009\u01C0\u2223\u2758\u01C3\u02C4\u0302\u2303\u0303\u223C", y = "\\-\u2010\u2013\u2014\u2015\u2212\u2500\u252C\u2534\u2550\u2564-\u2569", U = new RegExp(`${import_chunk_bsw3jbbx.Nsi.source}|${import_chunk_bsw3jbbx.Fsi.source}|\\p{Default_Ignorable_Code_Point}|[%\\p{Cs}\\u2018-\\u201f\\u1680\\u2800${H}]`, "u"), R = /^[\u200c\u200d\ufe0e\ufe0f]$/, W = new RegExp(`^(?![${y}])(?:[^\\P{L}\\p{ASCII}]|[^\\P{M}\\p{ASCII}]|[^\\P{N}\\p{ASCII}]|[^\\P{S}\\p{ASCII}])`, "u"), X = new RegExp(`^[.${y}+@ ]+`, "u"), j = new RegExp(`(\\s)[${y}+@](?=\\S)`, "gu"), q = { no_disk: true, bad_id: true, bad_size: true, too_large: true, egress_blocked: true, essential_traffic: true, policy_pending: true, not_https: true, no_token: true, sign_in_expired: true, no_room: true, refused: true, size_mismatch: true, stalled: true, canceled: true, name_taken: true, write_failed: true, network: true }, msr = Object.keys(q);
function Vgt(e, n) {
  let o = e.length > z ? "" : e.normalize("NFKC").split(/[/\\]/).at(-1) ?? "", r = (0, import_chunk_7cfjrnwy.pP)(V(o).replace(X, ""), ". "), s = r === "" || Buffer.byteLength(r, "utf8") > A || Buffer.byteLength(F(r), "utf8") > A || import_chunk_7cfjrnwy.Cyn.test((0, import_chunk_7cfjrnwy.nt)(r, ".").trim().toLowerCase()) || K(r) ? `${n}${P.exec(r)?.[0] ?? ""}` : r;
  return F(s);
}
function LRn(e, n) {
  if (!import_chunk_w8ry7jkt.kUe.test(e.fileId)) return { ok: false, code: "bad_id" };
  if (!Number.isSafeInteger(e.sizeBytes) || e.sizeBytes < 0) return { ok: false, code: "bad_size" };
  if (e.sizeBytes > import_chunk_271f5kxt.jDe) return { ok: false, code: "too_large" };
  let o = (0, import_chunk_2zeyvjwb.t2)(), r = (0, import_chunk_ye486ddj.EW)({ oauthToken: (0, import_chunk_865at33z.fz)(), isStoredLogin: true });
  if (r !== void 0) return { ok: false, code: r };
  if (o) return { ok: false, code: "policy_pending" };
  if (!(0, import_chunk_ephf358x.cn)().BASE_API_URL.startsWith("https://")) return { ok: false, code: "not_https" };
  if (n.aborted) return { ok: false, code: "canceled" };
  return;
}
async function y8o(e, n, o) {
  let r = new AbortController(), s = { bytes: 0 }, l = setTimeout((a) => a.abort(), L, r), u, f = () => {
    clearTimeout(l), u?.destroy();
  }, m = false;
  try {
    let a;
    try {
      a = await import_chunk_865at33z.zt.get(`/v1/files/${encodeURIComponent(e.fileId)}/content`, { auth: "claude-ai-oauth", refreshOAuth: true, recoverOAuth401: true, storageV5: n, host: "api", headers: { "anthropic-client-platform": (0, import_chunk_tb84sczh.H_)(), "anthropic-client-version": { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, "anthropic-version": import_chunk_271f5kxt.axi, "Accept-Encoding": "identity" }, responseType: "stream", timeout: 0, signal: AbortSignal.any([o, r.signal]), maxRedirects: 0, validateStatus: () => true });
    } catch (p) {
      return (0, import_chunk_w578pjby.t)(`[task files] ${e.fileId} request failed: ${(0, import_chunk_jv7av99m.d)(p)}`, { level: "error" }), { ok: false, code: o.aborted ? "canceled" : r.signal.aborted ? "stalled" : "network" };
    }
    if (!a.ok) return { ok: false, code: a.reason === "essential-traffic-only" ? "essential_traffic" : a.reason === "no-auth" ? "no_token" : "egress_blocked" };
    if (u = a.data, u.on("error", () => {
    }), a.status === 401) return { ok: false, code: "sign_in_expired" };
    if (a.status !== 200) return { ok: false, code: "refused", status: a.status };
    let k = a.response.headers["content-length"];
    if (k !== void 0 && Number(k) !== e.sizeBytes) return { ok: false, code: "size_mismatch" };
    return m = true, { ok: true, bytes: G(u, e.sizeBytes, l, s), bytesRead: () => s.bytes, codeOfFailure(p) {
      if (o.aborted) return "canceled";
      if (r.signal.aborted) return "stalled";
      if (s.fault !== void 0) return (0, import_chunk_w578pjby.t)(`[task files] ${e.fileId} not saved: ${(0, import_chunk_jv7av99m.d)(p)}`, { level: "error" }), s.fault;
      return (0, import_chunk_k449cc64.i)(p), "write_failed";
    }, close: f };
  } finally {
    if (!m) f();
  }
}
async function fsi(e, n, o, r) {
  let s, l, u;
  try {
    if ((0, import_chunk_f9x2f6cx.Y)()) return { ok: false, code: "no_disk" };
    if (await (0, import_chunk_478yxt5w.O7)({ isFilesDial: true, signal: r }), r.aborted) return { ok: false, code: "canceled" };
    let f = LRn(e, r);
    if (f !== void 0) return f;
    let m = (0, import_path.join)(n, DRn), a = Vgt(e.name, e.fileId);
    if (await (0, import_chunk_mxhw2w5n.f1)(n, o), !await S8o(n, e.sizeBytes)) return { ok: false, code: "no_room" };
    let k = await y8o(e, o, r);
    if (!k.ok) return k;
    s = k;
    let { bytes: p } = s;
    if ((0, import_chunk_m15w38ag.ne)() && o !== void 0) for (let c = 1; c <= psr; c++) {
      let _ = (0, import_path.join)(m, x7r(a, c)), S = (0, import_chunk_a8ey418s.av)(_);
      if (S === void 0) break;
      let b = await o.writeFromStream(S, p, { maxBytes: e.sizeBytes, precondition: { type: "ifAbsent" }, mode: 384 });
      if (b.ok) return { ok: true, filepath: _, bytes: b.value.bytes };
      if (b.error.code === "AlreadyExists" && s.bytesRead() > 0) return { ok: false, code: "name_taken" };
      if (b.error.code !== "AlreadyExists") throw (0, import_chunk_w578pjby.t)(`[task files] storage write failed (${b.error.code})`, { level: "error" }), Error("a task file was not stored");
      if (c === psr) return { ok: false, code: "name_taken" };
    }
    await (0, import_chunk_mxhw2w5n.$jt)(m, (0, import_chunk_8j3h6yzg.Vn)());
    try {
      await (0, import_promises.mkdir)(m, { mode: 448 });
    } catch (c) {
      if ((0, import_chunk_jv7av99m.w)(c) !== "EEXIST") throw c;
    }
    l = (0, import_path.join)(m, `.${(0, import_crypto.randomBytes)(8).toString("hex")}.partial`), u = await (0, import_promises.open)(l, import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_EXCL | import_chunk_jxja0v0z.cr, 384), await (0, import_promises2.pipeline)(p, u.createWriteStream());
    let E = await (0, import_promises.open)(l, import_chunk_09gzjq1e.Fo | import_chunk_jxja0v0z.cr);
    try {
      for (let c = 1; c <= psr; c++) {
        let _ = (0, import_path.join)(m, x7r(a, c));
        if (await (0, import_chunk_bsw3jbbx.Esr)(l, E, _, 384) !== void 0) return { ok: true, filepath: _, bytes: s.bytesRead() };
      }
    } finally {
      await E.close();
    }
    return { ok: false, code: "name_taken" };
  } catch (f) {
    if (s !== void 0) return { ok: false, code: s.codeOfFailure(f) };
    if (r.aborted) return { ok: false, code: "canceled" };
    return (0, import_chunk_k449cc64.i)(f), { ok: false, code: "write_failed" };
  } finally {
    if (s?.close(), await u?.close().catch(() => {
    }), l !== void 0) await (0, import_promises.unlink)(l).catch(() => {
    });
  }
}
async function S8o(e, n) {
  let o = await (0, import_promises.statfs)(e, { bigint: true }).catch(() => {
    return;
  });
  return o === void 0 || o.blocks <= 0n || o.bsize <= 0n || o.bavail * o.bsize >= BigInt(n + B);
}
function x7r(e, n) {
  if (n === 1) return e;
  let { name: o, ext: r } = (0, import_path.parse)(e);
  return `${o} (${n})${r}`;
}
function F(e) {
  return M.test((0, import_chunk_fbnv54pa.za)(e)) ? `${e}.download` : e;
}
function K(e) {
  let n = (0, import_chunk_bsw3jbbx.ksr)(e, true);
  return (0, import_chunk_fbnv54pa.za)(e) === "architecture.md" || n !== void 0 && n !== "odd_spelling";
}
function V(e) {
  let n = "", o = "";
  for (let r of e) o = (R.test(r) ? R.test(o) ? r === "\u200D" && /[\ufe0e\ufe0f]/u.test(o) : W.test(o) : !U.test(r)) ? r : "_", n += o;
  return n.replace(j, "$1_").replace(/ {2,}/g, " ");
}
async function* G(e, n, o, r) {
  try {
    for await (let s of e) {
      if (o.refresh(), r.bytes += s.length, r.bytes > n) break;
      yield s;
    }
  } catch (s) {
    throw r.fault = "network", s;
  }
  if (clearTimeout(o), r.bytes !== n) throw r.fault = "size_mismatch", Error("a task file did not have the size the server listed");
}
