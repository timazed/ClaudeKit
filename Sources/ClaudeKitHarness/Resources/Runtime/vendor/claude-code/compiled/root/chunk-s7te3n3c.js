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
var chunk_s7te3n3c_exports = {};
__export(chunk_s7te3n3c_exports, {
  CRa: () => CRa,
  E3s: () => E3s,
  Evn: () => Evn,
  Ozo: () => Ozo,
  T3s: () => T3s,
  TRa: () => TRa,
  jL: () => jL,
  v3s: () => v3s,
  x$e: () => x$e
});
module.exports = __toCommonJS(chunk_s7te3n3c_exports);
var import_chunk_r6fna520 = require("/$bunfs/root/chunk-r6fna520.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_kzzkh06w = require("/$bunfs/root/chunk-kzzkh06w.js");
var import_chunk_fbqj9ad4 = require("/$bunfs/root/chunk-fbqj9ad4.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var import_chunk_drtv8e2x = require("/$bunfs/root/chunk-drtv8e2x.js");
var import_chunk_vh92d4r0 = require("/$bunfs/root/chunk-vh92d4r0.js");
var import_crypto = require("crypto");
var import_path = require("path");
var jL = 800, v = { darwin: "osascript -e 'get POSIX path of (the clipboard as \xABclass furl\xBB)'", win32: ["powershell", "-NoProfile", "-Command", "Get-Clipboard"] };
function T() {
  let o = (0, import_path.join)((0, import_path.dirname)((0, import_chunk_8nvd6fqx.ih)()), `${import_chunk_8nvd6fqx.pMr}${(0, import_crypto.randomBytes)(16).toString("hex")}`, "clipboard.png"), n = (0, import_chunk_vh92d4r0.No)([o]), r = `set fp to open for access POSIX file ${`"${o.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`} with write permission`, a = "", p = '"$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)"', c = { darwin: { checkImage: "osascript -e 'the clipboard as \xABclass PNGf\xBB'", saveImage: `osascript -e 'set png_data to (the clipboard as \xABclass PNGf\xBB)' -e ${(0, import_chunk_vh92d4r0.No)([r])} -e 'write png_data to fp' -e 'close access fp'` }, linux: { checkImage: `"$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)" -NoProfile -NonInteractive -Sta -Command 'Add-Type -AssemblyName System.Windows.Forms; if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) { exit 1 }' 2>/dev/null`, saveImage: `"$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)" -NoProfile -NonInteractive -Sta -Command 'Add-Type -AssemblyName System.Windows.Forms; $i = [System.Windows.Forms.Clipboard]::GetImage(); if ($null -eq $i) { exit 1 }; $ms = New-Object System.IO.MemoryStream; $i.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png); [Convert]::ToBase64String($ms.ToArray())' 2>/dev/null | tr -d '\\r' | base64 -d > ${n}` }, win32: { checkImage: ["powershell", "-NoProfile", "-NonInteractive", "-Sta", "-Command", "Add-Type -AssemblyName System.Windows.Forms; if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) { exit 1 }"], saveImage: ["powershell", "-NoProfile", "-NonInteractive", "-Sta", "-Command", "Add-Type -AssemblyName System.Windows.Forms; $img = [System.Windows.Forms.Clipboard]::GetImage(); if ($null -eq $img) { exit 1 }; $img.Save(, [System.Drawing.Imaging.ImageFormat]::Png)"] } };
  return { commands: c.darwin || c.linux, screenshotPath: o };
}
async function y(e) {
  if (typeof e === "string") return (0, import_chunk_9zdrdv25.c$)(e, { reject: false });
  let [o, ...n] = e;
  return (0, import_chunk_9zdrdv25.gS)(o, n, { reject: false });
}
var P = ["xclip", "-selection", "clipboard", "-o", "-t"], C = [{ list: [...P, "TARGETS"], read: P }, { list: ["wl-paste", "--list-types"], read: ["wl-paste", "--type"] }], D = ["png", "jpeg", "jpg", "webp", "gif", "bmp"];
async function B() {
  let e = import_chunk_c203g5kd.s.WAYLAND_DISPLAY ? C.toReversed() : C;
  for (let { list: o, read: n } of e) {
    let l = await (0, import_chunk_7fsmgfxx.ut)(o[0], o.slice(1), { timeout: 3e3 });
    if (l.code !== 0) continue;
    let r = l.stdout.split(`
`), a = D.map((c) => "image/" + c).find((c) => r.includes(c));
    if (a === void 0) return null;
    let p = await (0, import_chunk_7fsmgfxx.ut)(n[0], [...n.slice(1), a], { timeout: 3e4, encoding: "latin1", stripFinalNewline: false });
    return p.code === 0 ? Buffer.from(p.stdout, "latin1") : null;
  }
  return null;
}
async function TRa() {
  if (!(0, import_chunk_fbqj9ad4.won)()) return false;
  try {
    return Bun.Image.hasClipboardImage();
  } catch (e) {
    return (0, import_chunk_k449cc64.i)(e), false;
  }
}
async function x$e(e) {
  if (!(0, import_chunk_fbqj9ad4.won)()) return null;
  try {
    let r = Bun.Image.fromClipboard();
    if (!r) return null;
    let { width: a, height: p } = await r.metadata(), c = a > e.maxWidth || p > e.maxHeight;
    if (c) r.resize(e.maxWidth, e.maxHeight, { fit: "inside", withoutEnlargement: true });
    let f = (await (0, import_chunk_fbqj9ad4.qcs)(() => r, S())).webp ?? await r.png().toBuffer(), { width: h, height: g } = (c ? (0, import_chunk_kzzkh06w.DT)(f) : void 0) ?? { width: a, height: p };
    if (f.length > e.targetRawSize) {
      let b = await (0, import_chunk_fbqj9ad4.pwt)(f, f.length, "png", e);
      return (0, import_chunk_cqa9hrgx.u)("clipboard_read"), { base64: b.buffer.toString("base64"), mediaType: `image/${b.mediaType}`, dimensions: { originalWidth: a, originalHeight: p, displayWidth: b.dimensions?.displayWidth ?? h, displayHeight: b.dimensions?.displayHeight ?? g } };
    }
    return (0, import_chunk_cqa9hrgx.u)("clipboard_read"), { base64: f.toString("base64"), mediaType: (0, import_chunk_kzzkh06w.qae)(f), dimensions: { originalWidth: a, originalHeight: p, displayWidth: h, displayHeight: g } };
  } catch (r) {
    if (r instanceof import_chunk_fbqj9ad4.lU || (0, import_chunk_jv7av99m.w)(r)?.startsWith("ERR_IMAGE_")) (0, import_chunk_w578pjby.t)(`Clipboard image read failed: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(r);
  }
  let o;
  try {
    o = T();
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), (0, import_chunk_cqa9hrgx.m)("clipboard_read", "construct_failed"), null;
  }
  let { commands: n, screenshotPath: l } = o;
  try {
    let r = ["darwin", "win32"].includes("darwin") ? null : await B();
    if (r === null) {
      if ((0, import_chunk_cg8dqz0a.x)() === "linux" || (await y(n.checkImage)).exitCode !== 0) return null;
      if (await (0, import_chunk_w578pjby.le)().mkdir((0, import_path.dirname)(l), { mode: 448 }), (await y(n.saveImage)).exitCode !== 0) return (0, import_chunk_cqa9hrgx.m)("clipboard_read", "save_failed"), null;
      r = await (0, import_chunk_w578pjby.le)().readFileBytes(l);
    }
    if (r.length >= 2 && r[0] === 66 && r[1] === 77) r = await (await (0, import_chunk_fbqj9ad4.qne)())(r).png().toBuffer();
    let a = await (0, import_chunk_fbqj9ad4.pwt)(r, r.length, "png", e, { directWebpMaxBytes: S() }), p = a.buffer.toString("base64"), c = (0, import_chunk_kzzkh06w.QUt)(p);
    return (0, import_chunk_cqa9hrgx.u)("clipboard_read"), { base64: p, mediaType: c, dimensions: a.dimensions };
  } catch {
    return (0, import_chunk_cqa9hrgx.m)("clipboard_read", "read_failed"), null;
  } finally {
    let r = (0, import_chunk_w578pjby.le)();
    await r.unlink(l).catch(() => {
    }), await r.rmdir((0, import_path.dirname)(l)).catch(() => {
    });
  }
}
async function R() {
  try {
    let e = v.darwin;
    if (!e) return (await (0, import_chunk_vw137skj.Tbt)()).trim();
    let o = await y(e);
    if (o.exitCode !== 0 || !o.stdout) return null;
    return o.stdout.trim();
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`Failed to read image path from clipboard: ${e instanceof Error ? e.message : String(e)}`, { level: "error" }), null;
  }
}
var Evn = /\.(png|jpe?g|gif|webp)$/i;
function N(e) {
  if (e.startsWith('"') && e.endsWith('"') || e.startsWith("'") && e.endsWith("'")) return e.slice(1, -1);
  return e;
}
var E = /^(?:[A-Za-z]:\\|\\\\)/;
function L(e) {
  if ((0, import_chunk_cg8dqz0a.x)() === "wsl" && E.test(e)) return e;
  let l = `__DOUBLE_BACKSLASH_${(0, import_crypto.randomBytes)(8).toString("hex")}__`;
  return e.replaceAll("\\\\", l).replace(/\\(.)/g, "$1").replace(new RegExp(l, "g"), "\\");
}
function Ozo(e) {
  return L(N(e.trim()));
}
function E3s(e) {
  return Evn.test(Ozo(e));
}
function v3s(e) {
  let o = Ozo(e);
  if (Evn.test(o)) return o;
  return null;
}
async function CRa(e, o, n) {
  let l = v3s(e);
  if (!l) return null;
  let r = l;
  if ((0, import_chunk_cg8dqz0a.x)() === "wsl" && E.test(r)) r = await new import_chunk_drtv8e2x.pUt(import_chunk_c203g5kd.s.WSL_DISTRO_NAME).toLocalPath(r);
  let a;
  try {
    if ((0, import_path.isAbsolute)(r)) a = await n(r);
    else {
      let g = await R();
      if (g && r === (0, import_path.basename)(g)) a = await n(g);
    }
  } catch (g) {
    return (0, import_chunk_w578pjby.t)(`Failed to read pasted image file ${r}: ${g instanceof Error ? g.message : String(g)}`, { level: "error" }), null;
  }
  if (a === "refused") return "refused";
  if (!a || a === "absent") return null;
  if (a.length === 0) return (0, import_chunk_w578pjby.t)(`Image file is empty: ${r}`, { level: "warn" }), null;
  if (a.length >= 2 && a[0] === 66 && a[1] === 77) a = await (await (0, import_chunk_fbqj9ad4.qne)())(a).png().toBuffer();
  let p = (0, import_chunk_kzzkh06w.cy)(a);
  if (p === null) return (0, import_chunk_w578pjby.t)(`Pasted path has image extension but content is not a supported image: ${r}`, { level: "warn" }), null;
  let c = p.split("/")[1] || "png", f = await (0, import_chunk_fbqj9ad4.pwt)(a, a.length, c, o, { directWebpMaxBytes: S() }), h = f.buffer.toString("base64");
  return { path: r, base64: h, mediaType: `image/${f.mediaType}`, dimensions: f.dimensions };
}
function T3s(e) {
  if (e.includes("\0")) return true;
  let o = e.slice(0, 4096);
  if (o.length < 32) return false;
  let n = 0;
  for (let l of o) if (l === "\uFFFD") n++;
  return n / o.length > 0.05;
}
function S() {
  return (0, import_chunk_t7fzcstv.bt)() ? void 0 : (0, import_chunk_fbqj9ad4.Sgr)(import_chunk_r6fna520.B7);
}
