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
var chunk_d3vfy4gs_exports = {};
__export(chunk_d3vfy4gs_exports, {
  F9e: () => F9e,
  Jal: () => Jal,
  N9e: () => N9e,
  O_r: () => O_r,
  P_r: () => P_r,
  Qal: () => Qal,
  Ssn: () => Ssn,
  Zal: () => Zal,
  Zfs: () => Zfs,
  abe: () => abe,
  cpo: () => cpo,
  dpo: () => dpo,
  ell: () => ell,
  eps: () => eps,
  lbe: () => lbe,
  upo: () => upo,
  yUt: () => yUt,
  ysn: () => ysn
});
module.exports = __toCommonJS(chunk_d3vfy4gs_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_7jczpc8b = require("/$bunfs/root/chunk-7jczpc8b.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_mxhw2w5n = require("/$bunfs/root/chunk-mxhw2w5n.js");
var import_chunk_r6fna520 = require("/$bunfs/root/chunk-r6fna520.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_kzzkh06w = require("/$bunfs/root/chunk-kzzkh06w.js");
var import_chunk_5qqp06t1 = require("/$bunfs/root/chunk-5qqp06t1.js");
var import_chunk_8mmj96hs = require("/$bunfs/root/chunk-8mmj96hs.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_path = require("path");
var import_promises = require("fs/promises");
var import_path2 = require("path");
var import_promises2 = require("fs/promises");
function abe() {
  if ((0, import_chunk_7jczpc8b.Kv)() !== void 0) return { dirs: [], paths: [] };
  return { dirs: [(0, import_chunk_mxhw2w5n.C0)()], paths: [] };
}
function P_r(e, n) {
  if (!e) return;
  let r = (0, import_path.dirname)(n);
  if (!e.dirs.includes(r)) e.dirs.push(r);
  if (!e.paths.includes(n)) e.paths.push(n);
}
function Jal(e, n) {
  if (!e) return;
  e.paths = e.paths.filter((r) => r !== n);
}
function eps(e, n, r, o) {
  let s = S(e.webFetchSavedFiles, n), c = s === e.webFetchSavedFiles ? e : { ...e, webFetchSavedFiles: s };
  return r ? c : o(c);
}
function S(e, n) {
  if (!n) return e;
  if (e && n.dirs.every((r) => e.dirs.includes(r)) && n.paths.every((r) => e.paths.includes(r))) return e;
  return { dirs: (0, import_chunk_4smdap7r.M)([...e?.dirs ?? [], ...n.dirs]), paths: (0, import_chunk_4smdap7r.M)([...e?.paths ?? [], ...n.paths]) };
}
var k = 5e3;
async function Zfs(e) {
  switch ((0, import_chunk_cg8dqz0a.x)()) {
    case "windows":
      return (0, import_promises2.writeFile)(`${e}:Zone.Identifier`, `[ZoneTransfer]\r
ZoneId=3\r
`).then(() => "marked", () => "failed");
    case "macos": {
      let { code: n } = await (0, import_chunk_7fsmgfxx.ut)("/usr/bin/xattr", ["-s", "-w", "com.apple.quarantine", `0081;${Math.floor(Date.now() / 1e3).toString(16)};Claude Code;`, e], { timeout: k, preserveOutputOnError: false });
      return n === 0 ? "marked" : "failed";
    }
    default:
      return "no_such_mark";
  }
}
var _ = Buffer.from("%PDF-");
function dpo(e) {
  return e.subarray(0, _.length).equals(_);
}
function N9e(e) {
  if (!e) return "bin";
  switch ((0, import_chunk_7cfjrnwy.nt)(e, ";").trim().toLowerCase()) {
    case "application/pdf":
      return "pdf";
    case "application/json":
      return "json";
    case "text/csv":
      return "csv";
    case "text/plain":
      return "txt";
    case "text/html":
      return "html";
    case "text/markdown":
      return "md";
    case "application/zip":
      return "zip";
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return "docx";
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return "xlsx";
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return "pptx";
    case "application/msword":
      return "doc";
    case "application/vnd.ms-excel":
      return "xls";
    case "audio/mpeg":
      return "mp3";
    case "audio/wav":
      return "wav";
    case "audio/ogg":
      return "ogg";
    case "video/mp4":
      return "mp4";
    case "video/webm":
      return "webm";
    case "image/png":
      return "png";
    case "image/jpeg":
      return "jpg";
    case "image/gif":
      return "gif";
    case "image/webp":
      return "webp";
    case "image/svg+xml":
      return "svg";
    case "image/x-icon":
    case "image/vnd.microsoft.icon":
      return "ico";
    case "text/css":
      return "css";
    case "text/javascript":
    case "application/javascript":
      return "js";
    case "application/xml":
    case "text/xml":
      return "xml";
    case "application/manifest+json":
      return "webmanifest";
    case "font/woff2":
    case "application/font-woff2":
      return "woff2";
    case "font/woff":
    case "application/font-woff":
      return "woff";
    case "font/ttf":
      return "ttf";
    case "font/otf":
      return "otf";
    case "application/wasm":
      return "wasm";
    default:
      return "bin";
  }
}
var C = ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.presentationml.presentation"], R = 2097152, N = 65536, j = 46, O = 1024;
function z(e, n) {
  let r = e.subarray(-O);
  switch (n) {
    case "application/pdf":
      return r.includes("%%EOF");
    case "image/png":
      return r.includes("IEND");
    case "image/jpeg":
      return r.includes("ffd9", 0, "hex");
    case "image/gif":
      return e.subarray(-2).toString("hex") === "003b";
    case "image/webp":
      return e.readUInt32LE(4) + 8 <= e.length;
  }
}
function F9e(e, n) {
  if (N9e(n) !== "bin") return n;
  if ((0, import_chunk_kzzkh06w.Eyr)(e) !== "zip") {
    let c = dpo(e) ? "application/pdf" : (0, import_chunk_kzzkh06w.cy)(e);
    return c !== null && z(e, c) ? c : n;
  }
  if ((0, import_chunk_f9x2f6cx.Y)() || (0, import_chunk_f9x2f6cx.Pd)()) return n;
  let r = Math.min(R, e.length), o = 0, s = false;
  try {
    let [c] = Object.values((0, import_chunk_5qqp06t1.SUt)(e, ({ name: i, originalSize: g, bytesToInflate: h }) => {
      if (o += j + i.length, o > R) throw Error("The zip lists too many entries");
      if (s || i !== "[Content_Types].xml" || g > r || h > N) return false;
      return s = true, true;
    })), m = Buffer.from(c ?? []).toString("latin1");
    return C.find((i) => m.includes(`${i}.main+xml`)) ?? n;
  } catch {
    return n;
  }
}
var cpo = import_chunk_r6fna520.lUn;
async function F(e) {
  let n = await Zfs(e);
  if (n === "marked") (0, import_chunk_cqa9hrgx.u)("binary_save_internet_mark");
  else if (n === "failed") (0, import_chunk_cqa9hrgx.l)("binary_save_internet_mark", "failed");
}
async function O_r(e) {
  if (!(0, import_chunk_865at33z.b)(import_chunk_mxhw2w5n.YEr, false)) return;
  let n = await (0, import_promises.lstat)(e).catch(() => null);
  if (n?.isFile() && n.nlink === 1) await F(e);
}
async function lbe(e, n, r, o, s, c) {
  if (e.length > cpo) return { error: `content is ${e.length} bytes, over the ${cpo} byte persist limit` };
  let m = (0, import_chunk_7jczpc8b.Kv)();
  if (m !== void 0) {
    let d = N9e(n), w, T = e.length > m.maxBytes ? null : await (0, import_chunk_7jczpc8b.tje)(m, { leafName: `${r}.${d}`, data: e }, (P) => {
      w = P;
    }, c);
    if (T === null) return { error: "binary content was not saved", notSavedReason: w };
    return P_r(o, T.path), (0, import_chunk_y53wbr8a.a)("tengu_binary_content_persisted", { sizeBytes: e.length, ext: (0, import_chunk_78g0060s.f)(d) }), { filepath: T.path, size: e.length, ext: d };
  }
  let i = (0, import_chunk_865at33z.b)(import_chunk_mxhw2w5n.YEr, false), g = (0, import_chunk_mxhw2w5n.C0)();
  if ((0, import_chunk_m15w38ag.ne)() && s !== void 0) {
    let d = await L(s, g, e, n, r, o, i);
    if (d !== void 0) return d;
  }
  await (0, import_chunk_mxhw2w5n.f1)(g, s, i ? 448 : void 0);
  let h = N9e(n), p = (0, import_path2.join)(g, `${r}.${h}`);
  try {
    await (0, import_chunk_mxhw2w5n.cme)(p, e, i ? 384 : void 0);
  } catch (d) {
    let w = (0, import_chunk_jv7av99m.D)(d);
    return (0, import_chunk_w578pjby.t)(`Failed to persist binary content to ${p}: ${w.message}`, { level: "error" }), { error: w.message };
  }
  if (i) await F(p);
  return P_r(o, p), (0, import_chunk_y53wbr8a.a)("tengu_binary_content_persisted", { sizeBytes: e.length, ext: (0, import_chunk_78g0060s.f)(h) }), { filepath: p, size: e.length, ext: h };
}
function yUt(e, n) {
  let r = (o) => o.replace(/[^\w-]/g, "");
  return `artifact-${r(e).slice(0, 8)}-${r(n)}`;
}
function upo(e) {
  return (0, import_path2.basename)(e).toLowerCase().startsWith("artifact-") && (0, import_path2.basename)((0, import_path2.dirname)(e)).toLowerCase() === import_chunk_mxhw2w5n.Mre;
}
async function L(e, n, r, o, s, c, m) {
  let i = N9e(o), g = `${s}.${i}`, h = (0, import_chunk_mxhw2w5n.ORe)(n, g);
  if (h === void 0) return;
  let p = (0, import_path2.join)(n, g), d = await e.write(h, r, { mode: m ? 384 : 438 & ~process.umask() });
  if (!d.ok) {
    let w = (0, import_chunk_7n1spq36.un)(d.error);
    return (0, import_chunk_w578pjby.t)(`Failed to persist binary content to ${p}: ${w}`, { level: "error" }), { error: `storage write failed (${w})` };
  }
  if (m) await F(p);
  return P_r(c, p), (0, import_chunk_y53wbr8a.a)("tengu_binary_content_persisted", { sizeBytes: r.length, ext: (0, import_chunk_78g0060s.f)(i) }), { filepath: p, size: r.length, ext: i };
}
function ysn(e, n, r, o) {
  return `${o}Binary content (${n || "unknown type"}, ${(0, import_chunk_7e12xj51.dn)(r)}) saved to ${e}`;
}
function Qal(e, n, r) {
  let o = (0, import_chunk_7jczpc8b.Kv)();
  if ((0, import_chunk_7cfjrnwy.nt)(n ?? "", ";").trim().toLowerCase() !== "application/pdf" || !dpo(e)) return;
  if (e.length > (o?.inlinePdfBytes?.(r) ?? 0)) return o?.servesTheModelsFiles?.(r) === true ? { type: "text", text: H(e.length) } : void 0;
  return { type: "document", source: { type: "base64", media_type: "application/pdf", data: e.toString("base64") } };
}
function H(e) {
  return `[This PDF (${(0, import_chunk_7e12xj51.dn)(e)}) cannot be shown whole in this session. Read it again with the pages parameter, for example pages: "1-5", at most ${import_chunk_r6fna520.gle} pages per call.]`;
}
var X = "[Another PDF in this result was left out: only the first is shown.]";
function Zal(e) {
  if (!Array.isArray(e) || (0, import_chunk_4smdap7r.U)(e, (r) => r.type === "document") < 2) return e;
  let n = false;
  return e.map((r) => {
    if (r.type !== "document" || !n) return n ||= r.type === "document", r;
    return { type: "text", text: X };
  });
}
function Ssn(e, n, r) {
  return `[Binary content (${(0, import_chunk_8mmj96hs.fpo)(e) ?? "application/octet-stream"}, ${(0, import_chunk_7e12xj51.dn)(n)}) was not kept: ${Z(r)}]`;
}
function Z(e) {
  switch (e) {
    case "budget":
      return "there is too little room left for saved files to keep this one. Repeating the call now would end the same way, and later files may too. Tell the user which files are missing.";
    case "timeout":
      return "saving files timed out, and saving can stay paused for a few minutes. If you need this file, repeat the call that returned it after that. If it is still missing, tell the user.";
    case "not_allowed":
      return "this session cannot keep tool results as files right now, so repeating the call may end the same way. Tell the user which files are missing.";
    case "no_container":
      return "this session's cloud environment could not be reached. If you need this file, repeat the call once. If that ends the same way, tell the user.";
    case void 0:
      return "it could not be saved.";
  }
}
var ell = "[The portion truncated above was not kept: it could not be saved.]";
