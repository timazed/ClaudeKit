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
var chunk_kf08yh2z_exports = {};
__export(chunk_kf08yh2z_exports, {
  Cgl: () => Cgl,
  Egl: () => Egl,
  GFi: () => GFi,
  Hln: () => Hln,
  JFi: () => JFi,
  KFi: () => KFi,
  Mln: () => Mln,
  Tgl: () => Tgl,
  VFi: () => VFi,
  WWt: () => WWt,
  XFi: () => XFi,
  YFi: () => YFi,
  Zwr: () => Zwr,
  ays: () => ays,
  cle: () => cle,
  dys: () => dys,
  ekr: () => ekr,
  gyo: () => gyo,
  hyo: () => hyo,
  iys: () => iys,
  jFi: () => jFi,
  kgl: () => kgl,
  kre: () => kre,
  lat: () => lat,
  lc: () => lc,
  lys: () => lys,
  myo: () => myo,
  nkr: () => nkr,
  nys: () => nys,
  oys: () => oys,
  q$n: () => q$n,
  qFi: () => qFi,
  rys: () => rys,
  sys: () => sys,
  tkr: () => tkr,
  vgl: () => vgl,
  wEt: () => wEt,
  wgl: () => wgl,
  zFi: () => zFi
});
module.exports = __toCommonJS(chunk_kf08yh2z_exports);
var import_path = require("path");
var nys = "<!--claude-mermaid-runtime-begin:", jFi = "<!--claude-mermaid-runtime-end-->", rys = "<!--claude-hljs-runtime-begin:", GFi = "<!--claude-hljs-runtime-end-->", myo = "<!-- chart-runtime -->", oys = "<!-- /chart-runtime -->";
var sys = "/_runtime/mermaid-11.16.1.min.js", wgl = '<script src="/_runtime/mermaid-11.16.1.min.js">';
var WWt = "<!-- frame-runtime -->", q$n = "<!-- /frame-runtime -->";
function kgl(t) {
  return t.includes("<!--claude-mermaid-runtime-begin:") || t.includes("<!--claude-mermaid-runtime-end-->") || t.includes("<!--claude-hljs-runtime-begin:") || t.includes("<!--claude-hljs-runtime-end-->") || t.includes("<!-- chart-runtime -->") || t.includes("<!-- /chart-runtime -->");
}
function Mln(t) {
  if (/<\/script/i.test(t)) return "bundle contains <\/script";
  if (ays(t)) return "bundle contains <!-- together with <script (double-escaped state)";
  if (/<base\s+href="\/_f\//i.test(t)) return "bundle matches the stale /_f/ base-tag strip regex";
  if (/\sdata-frame-runtime="/i.test(t)) return "bundle matches the stale data-frame-runtime strip regex";
  if (t.includes("<!--claude-mermaid-runtime-begin:") || t.includes("<!--claude-mermaid-runtime-end-->")) return "bundle contains a mermaid runtime sentinel";
  if (t.includes("<!--claude-hljs-runtime-begin:") || t.includes("<!--claude-hljs-runtime-end-->")) return "bundle contains an hljs runtime sentinel";
  if (t.includes("<!-- chart-runtime -->") || t.includes("<!-- /chart-runtime -->")) return "bundle contains the chart-runtime sentinel";
  if (t.includes("<!-- frame-runtime -->") || t.includes("<!-- /frame-runtime -->")) return "bundle contains a frame-runtime serve sentinel";
  return null;
}
var iys = /* @__PURE__ */ new Set([" ", "	", `
`, "\f", "\r", "/", ">"]);
function lat(t) {
  let e = 0, n = t.length;
  while (e < n && s(t.charCodeAt(e))) e++;
  while (n > e && s(t.charCodeAt(n - 1))) n--;
  return e === 0 && n === t.length ? t : t.slice(e, n);
}
function s(t) {
  return t === 32 || t === 9 || t === 10 || t === 12 || t === 13;
}
function hyo(t, e) {
  if (!e.length) return t;
  let n = "", i = 0;
  for (let [r, o] of e) n += t.slice(i, r), i = o;
  return n + t.slice(i);
}
function ays(t) {
  return t.includes("<!--") && /<script/i.test(t);
}
var M = /<\/script(?=[\t\n\f\r />])/i, A = /<\/style(?=[\t\n\f\r />])/i;
function E(t, e) {
  let n = t.match(e);
  if (!n) return null;
  let i = n.index ?? 0, r = i + n[0].length, o = t.indexOf(">", r);
  if (o === -1 || /['"]/.test(t.slice(r, o))) return null;
  return { data: i, after: o + 1 };
}
function zFi(t) {
  let e = E(t, M);
  if (!e || ays(t.slice(0, e.data))) return -1;
  return e.after;
}
function Egl(t) {
  return E(t, A);
}
var g = 16, a = ' data-id="', VFi = a.length + g + 1, m = "(?!-)(?:(?!--)[A-Za-z0-9_-]){16}", b = new RegExp(`^${m}$`), KFi = `${a}${m}"`;
function lys(t, e) {
  if (!t.startsWith(a, e)) return 0;
  let n = e + a.length, i = n + g;
  return t.charCodeAt(i) === 34 && b.test(t.slice(n, i)) ? VFi : 0;
}
function _(t, e, n) {
  if (t.startsWith(n, e)) return n.length;
  let i = n.length - 1;
  if (!t.startsWith(n.slice(0, i), e)) return 0;
  let r = lys(t, e + i);
  return r && t.charCodeAt(e + i + r) === 62 ? i + r + 1 : 0;
}
function gyo(t, e) {
  return _(t, e, "<script>");
}
function vgl(t, e) {
  return _(t, e, "<style>");
}
var p = new RegExp('<script src="/_runtime/mermaid-[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.min\\.js"', "y");
function Tgl(t, e) {
  p.lastIndex = e;
  let n = p.exec(t);
  if (n === null) return null;
  let i = e + n[0].length;
  if (t.charCodeAt(i) === 62) return { len: i + 1 - e, annotated: false };
  let r = lys(t, i);
  return r && t.charCodeAt(i + r) === 62 ? { len: i + r + 1 - e, annotated: true } : null;
}
function Zwr(t) {
  let e = lat(t);
  if (!e.length) return -1;
  let n = 0;
  while (e.length) {
    let i = gyo(e, 0);
    if (!i) return -1;
    if (i > 8) n++;
    let r = zFi(e.slice(i));
    if (r < 0) return -1;
    e = lat(e.slice(i + r));
  }
  return n;
}
function wEt(t, e) {
  let n = 0, i = e;
  while (i < t.length) {
    let r = t.charCodeAt(i);
    if (n === 3) {
      if (r === 34 || r === 39) {
        let o = t.indexOf(r === 34 ? '"' : "'", i + 1);
        if (o < 0) return -1;
        i = o + 1, n = 5;
        continue;
      }
      if (s(r)) {
        i++;
        continue;
      }
      if (r === 62) return i + 1;
      n = 4, i++;
      continue;
    }
    if (r === 62) return i + 1;
    if (s(r)) n = n === 1 || n === 2 ? 2 : 0;
    else if (r === 47 && n !== 4) n = 0;
    else if (r === 61 && (n === 1 || n === 2)) n = 3;
    else n = n === 4 ? 4 : 1;
    i++;
  }
  return -1;
}
var R = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".mjs": "text/javascript", ".json": "application/json", ".map": "application/json", ".geojson": "application/json", ".webmanifest": "application/manifest+json", ".txt": "text/plain", ".md": "text/markdown", ".csv": "text/csv", ".xml": "application/xml", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".gif": "image/gif", ".webp": "image/webp", ".avif": "image/avif", ".ico": "image/vnd.microsoft.icon", ".woff": "font/woff", ".woff2": "font/woff2", ".ttf": "font/ttf", ".otf": "font/otf", ".mp3": "audio/mpeg", ".wav": "audio/wav", ".ogg": "audio/ogg", ".mp4": "video/mp4", ".webm": "video/webm", ".pdf": "application/pdf", ".wasm": "application/wasm" };
function cle(t) {
  return R[Hln((0, import_path.extname)(t))];
}
function Hln(t) {
  return t.replace(/[A-Z]/g, (e) => e.toLowerCase());
}
function kre(t) {
  let e = t.indexOf(";");
  return Hln(lat(e >= 0 ? t.slice(0, e) : t));
}
var qFi = /* @__PURE__ */ new Set(["text/html", "application/xhtml+xml", "application/xml", "text/xml", "image/svg+xml"]), YFi = /* @__PURE__ */ new Set([...qFi, ...[]]), dys = "image/svg+xml", ekr = new Set([...YFi].filter((t) => t !== dys)), tkr = /* @__PURE__ */ new Set(["text/javascript", "application/javascript", "application/wasm"]), XFi = /* @__PURE__ */ new Set(["text/plain", "text/markdown", "text/csv", "text/css", "application/json", "application/manifest+json", "application/pdf", "image/png", "image/jpeg", "image/gif", "image/webp", "image/avif", "image/x-icon", "image/vnd.microsoft.icon", "font/woff", "font/woff2", "font/ttf", "font/otf", "application/font-woff", "application/font-woff2", "audio/mpeg", "audio/ogg", "audio/wav", "audio/webm", "video/mp4", "video/webm", "video/ogg"]);
function lc(t) {
  return JSON.stringify(t).replace(/[^\x20-\x7e]|[<>]/gu, D);
}
function D(t) {
  return t.split("").map((e) => `\\u${e.charCodeAt(0).toString(16).padStart(4, "0")}`).join("");
}
var v = ["pages", "styles", "scripts", "data", "images", "fonts", "media", "documents"];
function I(t) {
  if (t === "text/html") return "pages";
  if (t === "text/css") return "styles";
  if (t === "text/javascript" || t === "application/javascript" || t === "application/wasm") return "scripts";
  if (t.startsWith("image/")) return "images";
  if (t.startsWith("font/")) return "fonts";
  if (t.startsWith("audio/") || t.startsWith("video/")) return "media";
  if (t === "application/pdf") return "documents";
  return "data";
}
var C = v.flatMap((t) => {
  let e = Object.entries(R).filter(([, n]) => I(n) === t).map(([n]) => n);
  return e.length > 0 ? [`${t} ${e.join(" ")}`] : [];
}).join("; "), N = "Nothing was published because one file is of a type artifacts don't serve: ", u = " (contentType ", T = ") \u2014 the served spelling is exactly ", S = ") \u2014 that extension is already served as ", l = `Served types, by extension (a file named with one of these needs no contentType): ${C}.`, w = 'A source, config, log or other text file goes as text/plain (contentType "text/plain", or a .txt name) or rendered into the page.', f = "A document or archive (.xlsx .pptx .zip) can't be attached from here yet under any contentType: render what the page needs from it into the page, or link to where it already lives; a data: or blob: download link is not a way around this (the viewer blocks page-initiated downloads). A .docx can't be published either: where this tool offers asset uploads, upload it as an asset of an existing artifact; otherwise render or link it as above.";
function JFi(t, e, n, i) {
  let r = `${N}${t} ${lc(e)}${u}${lc(n)}`;
  if (i !== void 0) return `${r}${T}${lc(i)}, lowercase with no parameters. Publish again with that contentType.`;
  let o = cle(e);
  if (o !== void 0 && I(o) !== null) return `${r}${S}${lc(o)}. Publish again with no contentType on that file.`;
  return `${r}). ${l} Publish again with every file as a served type. ${w} ${f}`;
}
function nkr(t, e) {
  let n = Hln((0, import_path.extname)(e)), i = n === "" ? "no extension to infer a served type from" : `extension ${lc(n)} is not served`;
  return t === "files" ? `files: ${lc(e)} (no contentType, and ${i}) \u2014 nothing was published. ${l} Publish again with every file as a served type. ${w} ${f}` : `file_path: ${lc(e)} (${i}) \u2014 nothing was published. ${l} Rename a text or data file to one of these (.txt .json .csv), or make another file the \`file_path\` and list this one under \`files\` with contentType "text/plain". ${f}`;
}
var x = /"(?:[^"\\]|\\.)*"/y;
function c(t, e) {
  x.lastIndex = e;
  let n = x.exec(t);
  if (n === null) return;
  try {
    let i = JSON.parse(n[0]);
    return typeof i === "string" ? { raw: i, end: e + n[0].length } : void 0;
  } catch {
    return;
  }
}
function Cgl(t) {
  for (let e of ["supporting file", "file"]) {
    let n = `${N}${e} `;
    if (!t.startsWith(n)) continue;
    let i = c(t, n.length);
    if (i === void 0 || !t.startsWith(u, i.end)) return;
    let r = c(t, i.end + u.length);
    if (r === void 0 || !/^[\x20-\x7e]{1,127}$/.test(r.raw)) return;
    let o = t.startsWith(T, r.end) ? kre(r.raw) : void 0;
    if (t !== JFi(e, i.raw, r.raw, o)) return;
    let d = lc(i.raw);
    return o !== void 0 || t.startsWith(S, r.end) ? `Not published: ${d} was given a file type label artifacts don't recognize. Claude can fix the label and publish again.` : `Not published: ${d} is a type of file artifacts can't include. Claude can convert it or leave it out and publish again.`;
  }
  for (let e of ["files", "file_path"]) {
    let n = `${e}: `;
    if (!t.startsWith(n)) continue;
    let i = c(t, n.length);
    if (i === void 0 || t !== nkr(e, i.raw)) return;
    let r = lc(i.raw);
    return e === "files" ? `Not published: ${r} is a type of file artifacts can't include. Claude can convert it or leave it out and publish again.` : `Not published: ${r} is a type of file artifacts can't include. Claude can convert or rename it and publish again.`;
  }
  return;
}
