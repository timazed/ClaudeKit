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
var chunk_kzzkh06w_exports = {};
__export(chunk_kzzkh06w_exports, {
  BOi: () => BOi,
  DT: () => DT,
  Eyr: () => Eyr,
  Gdl: () => Gdl,
  Lps: () => Lps,
  Nps: () => Nps,
  QUt: () => QUt,
  Tyr: () => Tyr,
  WOi: () => WOi,
  Wdl: () => Wdl,
  cmo: () => cmo,
  cy: () => cy,
  fFn: () => fFn,
  fmo: () => fmo,
  jdl: () => jdl,
  kpe: () => kpe,
  qae: () => qae,
  umo: () => umo,
  vyr: () => vyr,
  zdl: () => zdl
});
module.exports = __toCommonJS(chunk_kzzkh06w_exports);
var kpe = { "image/png": "png", "image/jpeg": "jpg", "image/gif": "gif", "image/webp": "webp" };
function Wdl(n) {
  return Object.hasOwn(kpe, n);
}
function cy(n) {
  if (n.length < 4) return null;
  if (n[0] === 137 && n[1] === 80 && n[2] === 78 && n[3] === 71) return "image/png";
  if (n[0] === 255 && n[1] === 216 && n[2] === 255) return "image/jpeg";
  if (n.length >= 6 && n[0] === 71 && n[1] === 73 && n[2] === 70 && n[3] === 56 && (n[4] === 55 || n[4] === 57) && n[5] === 97) return "image/gif";
  if (n[0] === 82 && n[1] === 73 && n[2] === 70 && n[3] === 70 && n.length >= 12 && n[8] === 87 && n[9] === 69 && n[10] === 66 && n[11] === 80) return "image/webp";
  return null;
}
function Eyr(n) {
  if (n.subarray(0, 4).toString("latin1").toLowerCase() === "%pdf") return "pdf";
  if (n[0] === 80 && n[1] === 75 && n[2] === 3 && n[3] === 4) return "zip";
  return null;
}
function vyr(n) {
  let e = n.subarray(0, 32), t = e.toString("latin1").replace(/[^\x20-\x7e]/g, "."), r = t.toLowerCase();
  if (r.includes("<!doctype") || r.includes("<html")) return `HTML document (starts with "${t.slice(0, 24)}")`;
  if (r.startsWith("<?xml") || r.startsWith("<svg")) return `XML/SVG document (starts with "${t.slice(0, 24)}")`;
  if (r.startsWith("{") || r.startsWith("[")) return `JSON/text (starts with "${t.slice(0, 24)}")`;
  let a = Eyr(e);
  if (a === "pdf") return "PDF document";
  if (a === "zip") return "ZIP archive (Office documents such as .pptx/.docx/.xlsx are ZIPs)";
  return `unrecognized bytes (hex: ${e.subarray(0, 8).toString("hex").replace(/(..)/g, "$1 ").trim()})`;
}
function qae(n) {
  return cy(n) ?? "image/png";
}
function QUt(n) {
  try {
    let e = Buffer.from(n, "base64");
    return qae(e);
  } catch {
    return "image/png";
  }
}
var Lps = 87400;
function DT(n) {
  if (n.length < 10) return;
  if (n[0] === 137 && n[1] === 80 && n[2] === 78 && n[3] === 71 && n.length >= 24) return { width: n.readUInt32BE(16), height: n.readUInt32BE(20) };
  if (n[0] === 71 && n[1] === 73 && n[2] === 70) return { width: n.readUInt16LE(6), height: n.readUInt16LE(8) };
  let e = E(n);
  if (e !== void 0) return { height: n.readUInt16BE(e + 5), width: n.readUInt16BE(e + 7) };
  if (n[0] === 255 && n[1] === 216) return;
  if (n[0] === 82 && n[1] === 73 && n[2] === 70 && n[3] === 70 && n.length >= 30 && n[8] === 87 && n[9] === 69 && n[10] === 66 && n[11] === 80) {
    let t = n.toString("ascii", 12, 16);
    if (t === "VP8 ") return { width: n.readUInt16LE(26) & 16383, height: n.readUInt16LE(28) & 16383 };
    if (t === "VP8L") {
      let r = n.readUInt32LE(21);
      return { width: (r & 16383) + 1, height: (r >> 14 & 16383) + 1 };
    }
    if (t === "VP8X") return { width: n.readUIntLE(24, 3) + 1, height: n.readUIntLE(27, 3) + 1 };
  }
  return;
}
function BOi(n, e) {
  let t = DT(n);
  return t !== void 0 && Math.max(t.width, t.height) > e;
}
function E(n) {
  if (n.length < 4 || n[0] !== 255 || n[1] !== 216) return;
  let e = 2;
  while (e + 9 < n.length) {
    if (n[e] !== 255) {
      e++;
      continue;
    }
    let t = n[e + 1];
    if (t === 255) {
      e++;
      continue;
    }
    if (t !== void 0 && t >= 192 && t <= 207 && t !== 196 && t !== 200 && t !== 204) return e;
    if (t === void 0 || t >= 208 && t <= 217 || t <= 1) {
      e += 2;
      continue;
    }
    let r = n.readUInt16BE(e + 2);
    if (r < 2) return;
    e += 2 + r;
  }
  return;
}
function Nps(n) {
  let e = E(n);
  return e === void 0 ? void 0 : n[e + 9];
}
function cmo(n) {
  let e = E(n);
  if (e === void 0) return false;
  let t = n[e + 1];
  return (t === 192 || t === 193 || t === 194) && n[e + 4] === 8;
}
var y = 11e5, S = 64, C = Buffer.from([255, 218]), N = 8192;
function umo(n, e) {
  if (n.length < 4 || n[0] !== 255 || n[1] !== 216) return 0;
  let t = e + n.length / N, r = 0;
  for (let c = n.indexOf(C); c !== -1; c = n.indexOf(C, c + 2)) if (++r > t) return e + 1;
  let a = y + n.length / S, s = 0, d = 0, i = 2;
  for (let c = 0; s <= e; c++) {
    if (c > a) return e + 1;
    if (n[i] !== 255) i = n.indexOf(255, i);
    if (i === -1 || i + 3 >= n.length) break;
    let o = n[i + 1] ?? 0;
    if (o === 255) {
      i++;
      continue;
    }
    if (o === 217) break;
    if (o <= 1 || o >= 208 && o <= 216) {
      i += 2;
      continue;
    }
    let l = n.readUInt16BE(i + 2);
    if (o < 192 || l < 2) return e + 1;
    if (o >= 201 && o <= 207 && o !== 204) return e + 1;
    if (o === 218) {
      let u = n[i + 4];
      if (u !== void 0 && l !== 6 + 2 * u) return e + 1;
      s++;
    }
    if (o >= 192 && o <= 207 && o !== 196 && o !== 200 && o !== 204) {
      if (++d > 1 || l !== 8 + 3 * (n[i + 9] ?? 0)) return e + 1;
    }
    i += 2 + l;
  }
  return s;
}
var B = 1229472850, w = 1347179589, _ = 1951551059, P = 1229209940, U = 1229278788, A = 1700284774, R = /* @__PURE__ */ new Set([B, w, P, U]), F = /* @__PURE__ */ new Set([_, 1732332865, 1665684045, 1934772034, 1933723988, 1665745744, 1766015824]), T = /* @__PURE__ */ new Map([[1732332865, 4], [1665684045, 32], [1934772034, 1], [1665745744, 4]]), H = 4096, M = 1e5;
function fmo(n) {
  if (cy(n) !== "image/png") return n;
  let e = /* @__PURE__ */ new Set(), t = [[0, 8]], r = 8;
  for (let s = 0; r + 12 <= n.length; s++) {
    if (s === M) return null;
    let d = n.readUInt32BE(r), i = n.readUInt32BE(r + 4), c = r + 12 + d;
    if (c > n.length) break;
    let o = F.has(i) && d <= H && (T.get(i) ?? d) === d && !e.has(i);
    if (o) e.add(i);
    if (i === B && r !== 8) return null;
    if (R.has(i) || o) {
      let l = t.at(-1);
      if (l !== void 0 && l[1] === r) l[1] = c;
      else t.push([r, c]);
    }
    if (r = c, i === U) break;
  }
  let a = t[0];
  if (t.length === 1 && a !== void 0 && a[1] === n.length) return n;
  return Buffer.concat(t.map(([s, d]) => n.subarray(s, d)));
}
function Tyr(n) {
  if (cy(n) !== "image/png" || n.length < 26 || n.readUInt32BE(8) !== 13 || n.readUInt32BE(12) !== B) return true;
  let e = n[25];
  if (e !== 0 && e !== 2 && e !== 3) return true;
  let t = 8;
  for (let r = 0; r < 1e3 && t + 8 <= n.length; r++) {
    let a = n.readUInt32BE(t + 4);
    if (a === _) return true;
    if (a === P) return false;
    t += 12 + n.readUInt32BE(t);
  }
  return true;
}
function jdl(n) {
  if (cy(n) !== "image/png") return false;
  let e = 8;
  while (e + 8 <= n.length) {
    let t = n.readUInt32BE(e);
    if (n.readUInt32BE(e + 4) === A) {
      let r = n.subarray(e + 8, e + 8 + t);
      if (r.includes("", 0, "latin1") || r.includes("", 0, "latin1")) return true;
    }
    e += 12 + t;
  }
  return false;
}
var O = 2, L = 16, k = 32, G = 1e3;
function m(n, e) {
  let t = [], r = e;
  while (r + 8 <= n.length && t.length < G) {
    let a = n.readUInt32LE(r + 4), s = r + 8 + a;
    if (s > n.length) return null;
    t.push({ fourCC: n.toString("latin1", r, r + 4), payload: n.subarray(r + 8, s) }), r = s + (a & 1);
  }
  return t;
}
function g(n, e) {
  let t = Buffer.alloc(8);
  t.write(n, 0, "ascii"), t.writeUInt32LE(e.length, 4);
  let r = Buffer.alloc(e.length & 1);
  return Buffer.concat([t, e, r]);
}
function I(n) {
  let e = Buffer.concat([Buffer.from("WEBP", "ascii"), ...n]), t = Buffer.alloc(8);
  return t.write("RIFF", 0, "ascii"), t.writeUInt32LE(e.length, 4), Buffer.concat([t, e]);
}
function fFn(n) {
  return n.length >= 30 && n.toString("latin1", 0, 4) === "RIFF" && n.toString("latin1", 8, 12) === "WEBP" && n.toString("latin1", 12, 16) === "VP8X" && ((n[20] ?? 0) & O) !== 0;
}
function WOi(n) {
  if (cy(n) !== "image/webp") return false;
  return m(n, 12)?.find((t) => t.fourCC === "VP8L" || t.fourCC === "VP8 " || t.fourCC === "ANMF")?.fourCC === "VP8L";
}
function Gdl(n) {
  let e = m(n, 12);
  return e === null || e.some(({ fourCC: t, payload: r }) => t === "VP8X" && ((r[0] ?? 0) & L) !== 0 || t === "VP8L" && ((r[4] ?? 0) & 16) !== 0);
}
function zdl(n) {
  if (!fFn(n)) return null;
  let e = Math.min(n.length, 8 + n.readUInt32LE(4)), t = m(n.subarray(0, e), 12), r = t?.[0], a = t?.find((x) => x.fourCC === "ANMF");
  if (!r || r.payload.length < 10 || !a || a.payload.length < 16) return null;
  let s = r.payload.readUIntLE(4, 3) + 1, d = r.payload.readUIntLE(7, 3) + 1, i = a.payload;
  if (i.readUIntLE(0, 3) !== 0 || i.readUIntLE(3, 3) !== 0 || i.readUIntLE(6, 3) + 1 !== s || i.readUIntLE(9, 3) + 1 !== d) return null;
  let c = m(a.payload, 16), o = c?.find((x) => x.fourCC === "VP8 " || x.fourCC === "VP8L");
  if (!o) return null;
  let l = I([g(o.fourCC, o.payload)]), u = DT(l);
  if (u?.width !== s || u.height !== d) return null;
  let h = t?.find((x) => x.fourCC === "ICCP"), p = o.fourCC === "VP8 " ? c?.find((x) => x.fourCC === "ALPH") : void 0;
  if (!h && !p) return l;
  let f = Buffer.alloc(10);
  return f[0] = (h ? k : 0) | (p ? L : 0), f.writeUIntLE(s - 1, 4, 3), f.writeUIntLE(d - 1, 7, 3), I([g("VP8X", f), ...h ? [g("ICCP", h.payload)] : [], ...p ? [g("ALPH", p.payload)] : [], g(o.fourCC, o.payload)]);
}
