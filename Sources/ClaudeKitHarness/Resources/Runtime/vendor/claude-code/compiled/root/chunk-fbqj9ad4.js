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
var chunk_fbqj9ad4_exports = {};
__export(chunk_fbqj9ad4_exports, {
  $ol: () => $ol,
  AAi: () => AAi,
  Bol: () => Bol,
  CAi: () => CAi,
  EA: () => EA,
  I$t: () => I$t,
  Jco: () => Jco,
  Kcs: () => Kcs,
  OAi: () => OAi,
  PAi: () => PAi,
  Qco: () => Qco,
  RAi: () => RAi,
  Sgr: () => Sgr,
  Uol: () => Uol,
  Vcs: () => Vcs,
  Ycs: () => Ycs,
  Yne: () => Yne,
  Zfe: () => Zfe,
  bgr: () => bgr,
  fwt: () => fwt,
  jLn: () => jLn,
  kon: () => kon,
  lU: () => lU,
  pwt: () => pwt,
  qcs: () => qcs,
  qne: () => qne,
  uwt: () => uwt,
  won: () => won,
  xAi: () => xAi,
  ygr: () => ygr
});
module.exports = __toCommonJS(chunk_fbqj9ad4_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_r6fna520 = require("/$bunfs/root/chunk-r6fna520.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_kzzkh06w = require("/$bunfs/root/chunk-kzzkh06w.js");
var import_chunk_ve5qgcmh = require("/$bunfs/root/chunk-ve5qgcmh.js");
var import_chunk_9xt9z453 = require("/$bunfs/root/chunk-9xt9z453.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
function oe(e) {
  return false;
}
var Be = ["image_dimensions_too_large", "image_processing_failed", "unsupported_file_format", "image_format_mismatch", "image_too_large", "file_too_large", "file_limit_exceeded", "upload_busy", "upload_timeout"], Zfe = 8e3;
function Te(e) {
  return Be.some((n) => n === e);
}
function I$t(e) {
  return Te(e) ? e : void 0;
}
function ae(e) {
  switch (e) {
    case "image_dimensions_too_large":
      return { cause: `the image is more than ${Zfe} pixels wide or tall`, remedy: `send a copy scaled to at most ${Zfe} pixels on its longer side, or send it in a non-image format such as a .zip` };
    case "image_processing_failed":
      return { cause: "the server could not process this image (it may be damaged, truncated, not an image format it can decode, or took too long to convert)", remedy: "re-export it as PNG or JPEG, or send it inside a .zip" };
    case "unsupported_file_format":
      return { cause: "the file's contents are an image format the server does not accept, whatever its extension says (it accepts PNG, JPEG, GIF and WebP)", remedy: "convert it to one of those or send it inside a .zip" };
    case "image_format_mismatch":
      return { cause: "the image's contents do not match its file extension (for example JPEG data in a .png file)", remedy: "rename or re-export it so the two agree" };
    case "image_too_large":
      return { cause: "images have a lower size limit than other files", remedy: "reduce this image's file size, or send it in a non-image format such as a .zip" };
    case "file_too_large":
      return { cause: "the file is larger than the server's upload size limit", remedy: "send a smaller or compressed copy" };
    case "file_limit_exceeded":
      return { cause: "this account has uploaded as many files as it is allowed for now (a count of files, not a size)", remedy: "sending again, even a smaller file, will fail the same way until the allowance resets, so tell the user instead of retrying", stop: true };
    case "upload_busy":
      return { cause: "the server is busy with other large uploads", remedy: "try again shortly", passes: true };
    case "upload_timeout":
      return { cause: "the server timed out receiving the file", remedy: "try again", passes: true };
  }
}
var W = /^upload failed: server returned (\d+)$/, Me = { cause: "this session's cloud environment is not signed in to send files, most likely because its sign-in has expired", remedy: `an expired sign-in is renewed once this turn has ended and the environment has then run no tool call or ${import_chunk_9xt9z453.Xo} watch for about five minutes, so do not send again or run sleep now; tell the user to wait at least five minutes without sending anything else in this chat, and then to ask for the file again. If a send after such a wait fails like this too, tell the user instead that sending files may not work in this chat for now`, stop: true };
function se(e, n) {
  return I$t(n) === void 0 && W.exec(e)?.[1] === "401" && (0, import_chunk_f9x2f6cx.st)();
}
var ue = /^upload failed: (?:network error \(|the connection closed before the server answered$|the server did not answer within \d|the transfer stalled \()/, de = /\bInvalid URL\b|certificate/i, Ae = /* @__PURE__ */ new Set([429, 500, 502, 503, 504, 507, 520, 521, 522, 523, 524, 529]);
function CAi(e, n, r = false) {
  let o = I$t(n), m = o !== void 0 ? ae(o) : se(e, n) ? Me : void 0;
  if (m === void 0) return e;
  let { cause: s, remedy: p, stop: c } = m, g = [...W.test(e) ? [s] : [], ...r && !c ? [] : [p]];
  return g.length === 0 ? e : `${e} \u2014 ${g.join("; ")}`;
}
var Jco = 31457280;
function AAi(e) {
  let n = e / 1048576;
  return `${Number.isInteger(n) ? n : n.toFixed(1)} MiB`;
}
var ze = /* @__PURE__ */ new Set([502, 503, 504, 507, 520, 524]);
function Vcs(e, n) {
  if (I$t(n) !== void 0) return false;
  return ze.has(Number(W.exec(e)?.[1])) || ue.test(e) && !de.test(e);
}
function RAi(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e > 0;
}
function Oe(e) {
  return RAi(e.upload_suspected_limit_bytes) && e.size > Jco && Vcs(e.upload_error, e.upload_error_code);
}
var ie = "upload aborted";
function Qco(e) {
  if (e.upload_error === ie) return `${ie} \u2014 the turn was stopped before the upload finished, which says nothing about the file or the network. Send the file again if the user still wants it`;
  return Oe(e) ? `${e.upload_error} \u2014 the cause is unknown and may pass. If the same file fails like this again, it may be over the upload limit that applies to this session, which was not named and is never under ${AAi(Jco)}` : CAi(e.upload_error, e.upload_error_code);
}
function Ce(e, n) {
  let r = I$t(n);
  if (r !== void 0) return ae(r).passes === true;
  return Ae.has(Number(W.exec(e)?.[1])) || ue.test(e) && !de.test(e);
}
function jLn(e) {
  let n = e.filter((s) => Ce(s.upload_error, s.upload_error_code));
  if (n.length === 0 || e.some((s) => se(s.upload_error, s.upload_error_code))) return "";
  let r = (0, import_chunk_7cfjrnwy.O)(n.length, "failure"), o = `also tell the user they can ask you to send ${(0, import_chunk_7cfjrnwy.O)(n.length, "it", "them")} again in a few minutes.`;
  if (n.length === e.length) return ` The ${r} may be temporary, so ${o}`;
  return ` For ${new Intl.ListFormat("en", { type: "conjunction" }).format(n.map((s) => s.path))}, whose ${r} may be temporary, ${o}`;
}
var De = false, K = "ERR_IMAGE_DECODING_OFF", ve = Zfe * Zfe, je = 4, Ne = (0, import_chunk_w71cxznt.Rl)(je, (e) => e.toBuffer()), le = 100, me = /* @__PURE__ */ new WeakMap();
function ke() {
  return Promise.reject(Object.assign(Error("Image is too costly to decode"), { code: "ERR_IMAGE_DECODE_FAILED" }));
}
function v(e) {
  return { metadata: () => e.metadata(), resize: (n, r, o) => v(e.resize(n, r, o)), rotate: (n) => v(e.rotate(n)), jpeg: (n) => v(e.jpeg(n)), png: (n) => v(e.png(n)), webp: (n) => v(e.webp(n)), toBuffer: () => Ne(e) };
}
function V(e) {
  let n = { metadata: e, resize: () => n, rotate: () => n, jpeg: () => n, png: () => n, webp: () => n, toBuffer: e };
  return n;
}
function won() {
  return !oe() && (De || !ce());
}
function $e(e) {
  let n = ce();
  if (!won()) return V(() => Promise.reject(Object.assign(Error("Images are not decoded in a claude-code-server session"), { code: K })));
  if (typeof Bun.Image !== "function") return V(() => Promise.reject(Object.assign(Error("This runtime has no Bun.Image"), { code: "ERR_IMAGE_UNAVAILABLE" })));
  let r = (0, import_chunk_kzzkh06w.zdl)(e) ?? e;
  if (!n) return new Bun.Image(r);
  let o = me.get(r);
  if (o === void 0) o = (0, import_chunk_kzzkh06w.umo)(r, le) > le ? null : (0, import_chunk_kzzkh06w.fmo)(r), me.set(r, o);
  return o === null ? V(ke) : v(new Bun.Image(o, { maxPixels: ve }));
}
function qne() {
  return Promise.resolve($e);
}
function ce() {
  return (0, import_chunk_f9x2f6cx.Y)() || (0, import_chunk_f9x2f6cx.Pd)();
}
var Le = 85, pe = 5, We = 10, Fe = 1398100;
function ygr(e, n, r) {
  if (e > r.maxWidth) n = Math.round(n * r.maxWidth / e), e = r.maxWidth;
  if (n > r.maxHeight) e = Math.round(e * r.maxHeight / n), n = r.maxHeight;
  return r.maxImageTokens === void 0 ? [e, n] : (0, import_chunk_r6fna520.iUn)(e, n, 1 / 0, r.maxImageTokens);
}
async function Kcs(e) {
  let n = await qne(), r = Buffer.from(e.buffer, e.byteOffset, e.byteLength), o = await n(r).metadata(), [m, s] = (0, import_chunk_r6fna520.iUn)(o.width, o.height), p = m !== o.width || s !== o.height, c = Le + pe, g;
  do {
    c -= pe;
    let y = n(r);
    if (p) y = y.resize(m, s, { fit: "fill" });
    g = await y.jpeg({ quality: c }).toBuffer();
  } while (g.length * 4 > Fe * 3 && c > We);
  return { jpeg: g, w: m, h: s };
}
var Ge = 2, _e = 3, Ue = 4, He = 5, Ye = 8, Je = 9, ee = 10, Q = 11, Xe = "tengu_parsed_eagle", be = /* @__PURE__ */ new Set(["png", "jpeg", "gif", "webp"]);
function we(e) {
  switch (e) {
    case "jpeg":
    case "jpg":
      return "jpeg";
    case "webp":
      return "webp";
    default:
      return "png";
  }
}
class lU extends Error {
  constructor(e) {
    super(e);
    this.name = "ImageResizeError";
  }
}
function ye(e) {
  if ((0, import_chunk_kzzkh06w.Nps)(e) === 4) return { reason: "it is a CMYK JPEG, which Claude Code cannot decode", advice: "Re-save it as an RGB PNG or JPEG and try again." };
  if ((0, import_chunk_kzzkh06w.fFn)(e)) return { reason: "it is an animated WebP whose first frame Claude Code cannot decode", advice: "Save its first frame as a PNG or JPEG and try again." };
  return { reason: "its pixels could not be decoded (the file may be damaged, or use an encoding Claude Code cannot read)", advice: "Re-save it as a PNG or JPEG and try again." };
}
function uwt(e) {
  switch ((0, import_chunk_jv7av99m.w)(e)) {
    case "ERR_IMAGE_DECODE_FAILED":
      return ee;
    case K:
      return Q;
    case "ERR_IMAGE_UNKNOWN_FORMAT":
      return Ge;
    case "ERR_IMAGE_TOO_MANY_PIXELS":
      return Ue;
    case "ERR_IMAGE_FORMAT_UNSUPPORTED":
      return Je;
    case "EACCES":
    case "EPERM":
      return Ye;
    case "ENOMEM":
      return He;
    default:
      return _e;
  }
}
function fwt(e) {
  return e === _e;
}
function Ee(e) {
  if (!(e instanceof Error)) return { error_name: (0, import_chunk_78g0060s.f)(typeof e), error_code: (0, import_chunk_78g0060s.S)("") };
  return { error_name: (0, import_chunk_jv7av99m.tH)(e.name !== "Error" ? e.name : e.constructor?.name) ?? (0, import_chunk_78g0060s.S)("Error"), error_code: (0, import_chunk_jv7av99m.Cr)(e) ?? (0, import_chunk_78g0060s.S)("") };
}
function Ie(e) {
  let n = (0, import_chunk_kzzkh06w.cy)(e);
  return { ...n === "image/jpeg" && { jpeg_components: (0, import_chunk_kzzkh06w.Nps)(e) }, ...n === "image/webp" && { webp_animated: (0, import_chunk_kzzkh06w.fFn)(e) } };
}
function xe(e) {
  let n = 5381;
  for (let r = 0; r < e.length; r++) n = (n << 5) + n + e.charCodeAt(r) | 0;
  return n >>> 0;
}
function F(e) {
  return { rejectMaxWidth: e.rejectMaxWidth ?? e.maxWidth, rejectMaxHeight: e.rejectMaxHeight ?? e.maxHeight };
}
var Z = 8e3;
async function ge(e, n, r) {
  return (0, import_chunk_kzzkh06w.Tyr)(n) && (0, import_chunk_kzzkh06w.Tyr)(await e(r).resize(256, 256, { fit: "inside", withoutEnlargement: true }).png({ palette: true }).toBuffer());
}
async function pwt(e, n, r, o, { timings: m, directWebpMaxBytes: s, byteBudget: p } = {}) {
  if (e.length === 0) throw new lU("Image file is empty (0 bytes)");
  try {
    let c = await qne(), g = await c(e).metadata(), y = g.format ?? r, E = y === "jpg" ? "jpeg" : y, h = e, P = n;
    if (!be.has(E)) {
      let { width: M, height: B } = g, z = M === void 0 || B === void 0 ? void 0 : ygr(M, B, o), A = z !== void 0 && z[0] === M && z[1] === B ? (await qcs(() => c(e), s)).webp : void 0;
      h = A ?? await c(e).png().toBuffer(), P = h.length, g = await c(h).metadata(), E = A ? "webp" : "png";
    }
    if (!g.width || !g.height) {
      let M = (0, import_chunk_kzzkh06w.DT)(h), { rejectMaxWidth: B, rejectMaxHeight: z } = F(o);
      if (M === void 0 || M.width > B || M.height > z) throw new lU(`Unable to resize image \u2014 could not verify image dimensions are within the ${B}x${z}px API limit.`);
      if (P > o.targetRawSize) return (0, import_chunk_y53wbr8a.a)("tengu_image_resize", { over_byte_limit: true, over_dimension_limit: false, resized_for_tokens: false, original_size_bytes: P }), { buffer: await c(h).jpeg({ quality: 80 }).toBuffer(), mediaType: "jpeg" };
      return { buffer: h, mediaType: E };
    }
    let _ = g.width, I = g.height, [x, R] = ygr(_, I, o), C = x !== _ || R !== I;
    if (P <= o.targetRawSize && !C) return { buffer: h, mediaType: E, dimensions: { originalWidth: _, originalHeight: I, displayWidth: x, displayHeight: R } };
    let N = E === "png", D = N && p !== void 0 && p < o.targetRawSize ? p : void 0, U = D ?? o.targetRawSize;
    if ((0, import_chunk_y53wbr8a.a)("tengu_image_resize", { over_byte_limit: P > o.targetRawSize, over_dimension_limit: _ > o.maxWidth || I > o.maxHeight, resized_for_tokens: C && x < o.maxWidth && R < o.maxHeight, original_size_bytes: P, original_width: _, original_height: I, target_width: x, target_height: R, max_width: o.maxWidth, max_height: o.maxHeight, max_image_tokens: o.maxImageTokens }), !C && P > o.targetRawSize) {
      let M = { originalWidth: _, originalHeight: I, displayWidth: x, displayHeight: R }, B = D === void 0 ? void 0 : await c(h).png().toBuffer(), z = B === void 0 || B.length > U && (B.length <= o.targetRawSize || await ge(c, h, B));
      if (N && z) {
        let A = await he(() => c(h).png({ compressionLevel: 9, palette: true }).toBuffer(), m);
        if (A.length <= U) return { buffer: A, mediaType: "png", dimensions: M };
      }
      if (B !== void 0) return { buffer: B, mediaType: "png", dimensions: M };
      for (let A of [80, 60, 40, 20]) {
        let k = await c(h).jpeg({ quality: A }).toBuffer();
        if (k.length <= o.targetRawSize) return { buffer: k, mediaType: "jpeg", dimensions: M };
      }
    }
    (0, import_chunk_w578pjby.t)(`Resizing to ${x}x${R}`);
    let H = C && s !== void 0 && _ <= F(o).rejectMaxWidth && I <= F(o).rejectMaxHeight && (0, import_chunk_kzzkh06w.WOi)(h) ? "png" : we(E), J = c(h).resize(x, R, { fit: "inside", withoutEnlargement: true });
    if (H !== E) J = J.png();
    let X = H === "png" ? await qcs(() => c(h).resize(x, R, { fit: "inside", withoutEnlargement: true }), s) : {}, q = X.webp ?? await J.toBuffer(), re = { buffer: q, mediaType: X.webp ? "webp" : H, dimensions: { originalWidth: _, originalHeight: I, displayWidth: x, displayHeight: R }, losslessWebp: X.lossless };
    if (q.length > o.targetRawSize) {
      if (N && (D === void 0 || await ge(c, h, q))) {
        let A = await he(() => c(h).resize(x, R, { fit: "inside", withoutEnlargement: true }).png({ compressionLevel: 9, palette: true }).toBuffer(), m);
        if (A.length <= U) return { buffer: A, mediaType: "png", dimensions: { originalWidth: _, originalHeight: I, displayWidth: x, displayHeight: R } };
      }
      if (D !== void 0) return re;
      for (let A of [80, 60, 40, 20]) {
        let k = await c(h).resize(x, R, { fit: "inside", withoutEnlargement: true }).jpeg({ quality: A }).toBuffer();
        if (k.length <= o.targetRawSize) return { buffer: k, mediaType: "jpeg", dimensions: { originalWidth: _, originalHeight: I, displayWidth: x, displayHeight: R } };
      }
      let M = Math.min(x, 1e3), B = Math.round(R * M / Math.max(x, 1));
      (0, import_chunk_w578pjby.t)("Still too large, compressing with JPEG");
      let z = await c(h).resize(M, B, { fit: "inside", withoutEnlargement: true }).jpeg({ quality: 20 }).toBuffer();
      return (0, import_chunk_w578pjby.t)(`JPEG compressed buffer size: ${z.length}`), { buffer: z, mediaType: "jpeg", dimensions: { originalWidth: _, originalHeight: I, displayWidth: M, displayHeight: B } };
    }
    return re;
  } catch (c) {
    if (c instanceof lU) throw c;
    let g = uwt(c), y = (0, import_chunk_jv7av99m.d)(c);
    if (fwt(g)) (0, import_chunk_k449cc64.i)(c);
    else (0, import_chunk_w578pjby.t)(`Image resize failed: ${y}`, { level: "error" });
    (0, import_chunk_y53wbr8a.a)("tengu_image_resize_failed", { original_size_bytes: n, error_type: g, error_message_hash: xe(y), ...Ee(c), ...Ie(e) });
    let h = (0, import_chunk_kzzkh06w.qae)(e).slice(6), P = Math.ceil(n * 4 / 3), _ = (0, import_chunk_kzzkh06w.DT)(e);
    if (_ === void 0) throw new lU("Unable to resize image \u2014 image processing is unavailable and dimensions could not be read from the file header. Please convert the image to PNG, JPEG, GIF, or WebP.");
    let { rejectMaxWidth: I, rejectMaxHeight: x } = g === Q && (0, import_chunk_zhr7rpv7.Ss)() ? { rejectMaxWidth: Z, rejectMaxHeight: Z } : F(o), R = _.width > I || _.height > x;
    if (P <= o.maxBase64Size && !R) return (0, import_chunk_y53wbr8a.a)("tengu_image_resize_fallback", { original_size_bytes: n, base64_size_bytes: P, error_type: g }), { buffer: e, mediaType: h };
    if (g === Q) throw new lU(R ? `Unable to send image \u2014 at ${_.width}x${_.height}px it is over the ${I}x${x}px limit, and this session cannot shrink images. Resize it to fit within ${I}x${x}px and try again.` : `Unable to send image \u2014 it is ${(0, import_chunk_7e12xj51.dn)(P)} in base64, over the API's ${(0, import_chunk_7e12xj51.dn)(o.maxBase64Size)} limit, and this session cannot shrink images. Make it smaller than ${Math.floor(o.targetRawSize / 1024 / 1024 * 10) / 10}MB and try again.`);
    if (g === ee) {
      let { reason: C, advice: N } = ye(e), D = R ? `at ${_.width}x${_.height}px it is over the ${I}x${x}px limit` : `it is over the ${(0, import_chunk_7e12xj51.dn)(o.maxBase64Size)} API limit (${(0, import_chunk_7e12xj51.dn)(n)} raw, ${(0, import_chunk_7e12xj51.dn)(P)} base64)`;
      throw new lU(`Unable to resize image \u2014 ${C}, and ${D}, so it cannot be sent. ${N}`);
    }
    throw new lU(R ? `Unable to resize image \u2014 dimensions exceed the ${I}x${x}px limit and image processing failed. Please resize the image to reduce its pixel dimensions.` : `Unable to resize image (${(0, import_chunk_7e12xj51.dn)(n)} raw, ${(0, import_chunk_7e12xj51.dn)(P)} base64). The image exceeds the ${(0, import_chunk_7e12xj51.dn)(o.maxBase64Size)} API limit and compression failed. Please resize the image manually or use a smaller image.`);
  }
}
async function he(e, n) {
  let r = performance.now();
  try {
    return await e();
  } finally {
    if (n !== void 0) n.pngPaletteMs += performance.now() - r;
  }
}
async function xAi(e, n, r) {
  let o = await qne(), m = (E) => o(e).jpeg({ quality: E }).toBuffer(), s = e, p = 90;
  if (!/jpe?g/i.test(r)) {
    let E = await m(90);
    if (E.length < s.length) s = E;
    if (E.length <= n) return E;
    p = 89;
  }
  let g = 1, y;
  for (let E = 0; E < 5; E++) {
    let h = Math.floor((g + p) / 2), P = await m(h);
    if (P.length < s.length) s = P;
    if (P.length <= n) y = P, g = h + 1;
    else p = h - 1;
    if (g > p) break;
  }
  return y ?? s;
}
async function EA({ data: e, mediaType: n, limits: r, timings: o, allowWebp: m = true, from: s }) {
  let p = Buffer.isBuffer(e) ? e : Buffer.from(e, "base64");
  if ((0, import_chunk_f9x2f6cx.Y)()) {
    let _ = (0, import_chunk_kzzkh06w.DT)(p), I = _ ? Math.max(_.width, _.height) : 0;
    (0, import_chunk_y53wbr8a.a)("tengu_image_input", { over_byte_budget: p.length > import_chunk_r6fna520.B7, over_byte_limit: p.length > import_chunk_r6fna520.Qv.targetRawSize, over_many_images_side_limit: I > import_chunk_r6fna520.YWt, over_side_limit: I > Z, from: (0, import_chunk_78g0060s.fe)(s) });
  }
  let c = m && r.allowWebp !== false, g = n?.includes("/") ? n.split("/")[1] || "png" : n || "png", y, E = performance.now();
  try {
    y = await pwt(p, p.length, g, r, { timings: o, directWebpMaxBytes: c ? Sgr(import_chunk_r6fna520.B7) : void 0, byteBudget: import_chunk_r6fna520.B7 });
  } catch (_) {
    if (_ instanceof lU) return j(_.message, "resize_error");
    throw _;
  } finally {
    if (o !== void 0) o.resizeMs = performance.now() - E;
  }
  let h = y.buffer;
  if (h.length > import_chunk_r6fna520.B7) {
    let _ = performance.now();
    try {
      h = await xAi(y.buffer, import_chunk_r6fna520.B7, y.mediaType);
    } catch (I) {
      (0, import_chunk_w578pjby.t)(`Image byte-budget compression failed: ${(0, import_chunk_jv7av99m.d)(I)}`, { level: "error" });
    }
    if (o !== void 0) o.byteBudgetMs = performance.now() - _;
    if (y.mediaType === "png" && h.length > r.targetRawSize) return j(`it is over the ${Math.floor(r.targetRawSize / 1024 / 1024 * 10) / 10}MB limit and compression failed. Resize it or use a smaller image.`, "resize_error");
  }
  return h = await PAi(p, y.buffer, h, import_chunk_r6fna520.B7, c, y.losslessWebp), { block: { type: "image", source: { type: "base64", media_type: (0, import_chunk_kzzkh06w.qae)(h), data: h.toString("base64") } }, dimensions: y.dimensions };
}
function te() {
  if ((0, import_chunk_f9x2f6cx.Y)()) return "off";
  let e = (0, import_chunk_zhr7rpv7.Ss)() ? (0, import_chunk_865at33z.b)(Xe, "off") : "off";
  return e === "lossless" || e === "all" ? e : "off";
}
function Sgr(e) {
  return te() === "off" ? void 0 : e;
}
async function G(e) {
  try {
    return await e();
  } catch (n) {
    if (fwt(uwt(n))) (0, import_chunk_k449cc64.i)(n);
    else (0, import_chunk_w578pjby.t)(`WebP step: an encode failed: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "error" });
    return;
  }
}
function ne(e, n) {
  return G(async () => {
    let r = await (await e()).webp(n).toBuffer();
    if (n.lossless && !(0, import_chunk_kzzkh06w.WOi)(r)) throw Error("a lossless WebP encode wrote a file that is not lossless");
    return r;
  });
}
async function Se(e) {
  let n = await ne(e, { lossless: true });
  if (n === void 0 || !(0, import_chunk_kzzkh06w.Gdl)(n)) return n;
  let r = await e(), o = r === await e() ? void 0 : { compressionLevel: 0 }, m = await qne(), [s, p] = await Promise.all([G(() => r.png(o).toBuffer()), G(() => m(n).png(o).toBuffer())]);
  if (s === void 0 || p === void 0) return;
  return p.equals(s) ? n : "not_exact";
}
async function qe(e, n, r, o) {
  if (n.length <= r / 2) return { result: "lossless", webp: n };
  if (o !== "all") return { result: "too_large" };
  let m = await ne(e, { lossless: false, quality: 90 });
  if (m === void 0) return { result: "failed" };
  if (m.length > r) return { result: "too_large" };
  let s = await G(() => e().jpeg({ quality: 90 }).toBuffer());
  if (s === void 0) return { result: "failed" };
  if (s.length > r) return { result: "no_yardstick" };
  if (m.length >= s.length) return { result: "not_smaller" };
  return n.length <= m.length ? { result: "lossless", webp: n } : { result: "lossy", webp: m };
}
async function qcs(e, n) {
  let r = te();
  if (n === void 0 || r === "off") return {};
  let o = performance.now(), m = await Se(e), { result: s, webp: p } = m === void 0 ? { result: "failed", webp: void 0 } : m === "not_exact" ? { result: m, webp: void 0 } : await qe(e, m, n, r);
  if ((0, import_chunk_y53wbr8a.a)("tengu_image_webp_direct", { mode: (0, import_chunk_78g0060s.f)(r), result: (0, import_chunk_78g0060s.f)(s), ...p !== void 0 && { sent_size_bytes: p.length }, encode_ms: Math.round(performance.now() - o) }), p === void 0) return { lossless: m };
  return (0, import_chunk_cqa9hrgx.u)("input_image_webp"), { webp: p };
}
async function PAi(e, n, r, o, m, s) {
  let p = te(), c = (0, import_chunk_kzzkh06w.qae)(n), g = c === "image/webp" && (0, import_chunk_kzzkh06w.qae)(e) !== "image/webp", y = n.length > o, E = m && c === "image/png" && (y ? p === "all" : p !== "off") && !(0, import_chunk_kzzkh06w.jdl)(n), h = performance.now(), P = async () => (await qne())(n), _ = !E ? void 0 : y ? await ne(P, { lossless: false, quality: 90 }) : s ?? await Se(P), I = _ === "not_exact" ? void 0 : _, x = I !== void 0 && I.length < r.length ? I : r, R = _ === "not_exact" ? _ : I === void 0 ? "failed" : "not_smaller";
  if (x === I) (0, import_chunk_cqa9hrgx.u)("input_image_webp");
  else if (E) (0, import_chunk_cqa9hrgx.l)("input_image_webp", R === "failed" ? "encode_failed" : R);
  return (0, import_chunk_y53wbr8a.a)("tengu_image_output", { mode: (0, import_chunk_78g0060s.f)(p), webp_try: (0, import_chunk_78g0060s.f)(g ? "direct" : !E ? "none" : y ? "lossy" : "lossless"), ...!g && { resized_format: (0, import_chunk_78g0060s.f)(c), resized_size_bytes: n.length, without_webp_size_bytes: r.length }, sent_format: (0, import_chunk_78g0060s.f)((0, import_chunk_kzzkh06w.qae)(x)), sent_size_bytes: x.length, ...E && { webp_result: (0, import_chunk_78g0060s.f)(x === I ? "sent" : R), webp_encode_ms: Math.round(performance.now() - h) } }), x;
}
var Pe = /* @__PURE__ */ new WeakSet();
async function bgr(e, n, { timings: r } = {}) {
  let o = (0, import_chunk_kzzkh06w.cy)(e);
  if (o === null) return null;
  try {
    let { block: m } = await EA({ data: e, mediaType: o, limits: n, timings: r, from: "file" });
    if (m.type !== "image") return null;
    return Pe.add(m), m;
  } catch {
    return null;
  }
}
var OAi = import_chunk_r6fna520.B7, Re = /* @__PURE__ */ new WeakSet();
function $ol(e, n, r, o) {
  if (e.length === n.length) return "copy_is_original";
  let m = (0, import_chunk_kzzkh06w.DT)(e), s = (0, import_chunk_kzzkh06w.Nps)(e), p = (0, import_chunk_kzzkh06w.DT)(n);
  if ((0, import_chunk_kzzkh06w.cy)(e) !== "image/jpeg") return "copy_unusable";
  if (o !== void 0 && o !== e.length || e.at(-2) !== 255 || e.at(-1) !== 217) return "copy_cut_short";
  if (e.length > OAi || !(0, import_chunk_kzzkh06w.cmo)(e) || s !== 1 && s !== 3 || m === void 0 || m.width > Math.min(r.maxWidth, import_chunk_r6fna520.YWt) || m.height > Math.min(r.maxHeight, import_chunk_r6fna520.YWt) || r.maxImageTokens !== void 0 && (0, import_chunk_r6fna520.Qpe)(m.width, m.height) > r.maxImageTokens || p === void 0) return "copy_unusable";
  let c = ygr(p.width, p.height, r);
  if (Math.max(m.width, m.height) < Math.max(...c) - import_chunk_r6fna520.Jyo || Math.min(m.width, m.height) < Math.min(...c) - import_chunk_r6fna520.Jyo) return "copy_too_small";
  let g = { type: "image", source: { type: "base64", media_type: "image/jpeg", data: e.toString("base64") } };
  return Re.add(g), g;
}
async function kon(e, n) {
  if (Re.has(e)) return (0, import_chunk_cqa9hrgx.u)("bridge_attachment_model_copy_not_resized"), { block: e };
  if (!(0, import_chunk_ma3kja9f.T)(e.source)) return e.source == null ? j("image block has no source object", "no_source") : j("image block source must be an object", "malformed_source");
  if (e.source.type !== "base64") return { block: e };
  let r = e.source.media_type;
  if (r != null && typeof r !== "string") return j("base64 image media_type must be a string", "malformed_source");
  let o = typeof r === "string" ? r : void 0, m = e.source.data, s;
  try {
    s = Buffer.isBuffer(m) ? m : Buffer.from(m, "base64");
  } catch (p) {
    return j((0, import_chunk_jv7av99m.d)(p), "malformed_source");
  }
  return EA({ data: s, mediaType: o, limits: n, from: Pe.has(e) ? "built_block" : "block" });
}
function j(e, n) {
  return (0, import_chunk_y53wbr8a.a)("tengu_image_resize_degraded", { reason: (0, import_chunk_78g0060s.f)(n) }), { block: { type: "text", text: `[Image could not be processed: ${e}]` } };
}
async function Ycs(e, n, r) {
  let o = r?.split("/")[1] || "jpeg", m = o === "jpg" ? "jpeg" : o;
  try {
    let s = await qne(), p = await s(e).metadata(), c = p.format || m, g = e.length, y = e;
    if (!be.has(c === "jpg" ? "jpeg" : c)) y = await s(e).png().toBuffer(), p = await s(y).metadata(), c = "png";
    let E = { imageBuffer: y, metadata: p, format: c, maxBytes: n, originalSize: g };
    if (y.length <= n) return L(y, c, g);
    let h = await Ve(E, s);
    if (h) return h;
    if (c === "png") {
      let _ = await Qe(E, s);
      if (_) return _;
    }
    let P = await Ze(E, 50, s);
    if (P) return P;
    return await et(E, s);
  } catch (s) {
    let p = uwt(s), c = (0, import_chunk_jv7av99m.d)(s);
    if (fwt(p)) (0, import_chunk_k449cc64.i)(s);
    else (0, import_chunk_w578pjby.t)(`Image compression failed: ${c}`, { level: "error" });
    if ((0, import_chunk_y53wbr8a.a)("tengu_image_compress_failed", { original_size_bytes: e.length, max_bytes: n, error_type: p, error_message_hash: xe(c), ...Ee(s), ...Ie(e) }), e.length <= n) {
      let g = (0, import_chunk_kzzkh06w.qae)(e);
      return { base64: e.toString("base64"), mediaType: g, originalSize: e.length };
    }
    if (p === ee) {
      let { reason: g, advice: y } = ye(e);
      throw new lU(`Unable to compress image (${(0, import_chunk_7e12xj51.dn)(e.length)}) to fit within ${(0, import_chunk_7e12xj51.dn)(n)} \u2014 ${g}. ${y}`);
    }
    throw new lU(`Unable to compress image (${(0, import_chunk_7e12xj51.dn)(e.length)}) to fit within ${(0, import_chunk_7e12xj51.dn)(n)}. Please use a smaller image.`);
  }
}
async function Uol(e, n, r) {
  let o = Math.floor(n / 0.125), m = Math.floor(o * 0.75);
  return Ycs(e, m, r);
}
async function Bol(e, n) {
  if (e.source.type !== "base64") return e;
  let r = Buffer.from(e.source.data, "base64");
  if (r.length <= n) return e;
  let o = await Ycs(r, n);
  return { type: "image", source: { type: "base64", media_type: o.mediaType, data: o.base64 } };
}
function L(e, n, r) {
  let o = n === "jpg" ? "jpeg" : n;
  return { base64: e.toString("base64"), mediaType: `image/${o}`, originalSize: r };
}
async function Ve(e, n) {
  let r = [1, 0.75, 0.5, 0.25];
  for (let o of r) {
    let m = Math.round((e.metadata.width || 2e3) * o), s = Math.round((e.metadata.height || 2e3) * o), p = n(e.imageBuffer).resize(m, s, { fit: "inside", withoutEnlargement: true }), c = we(e.format);
    p = Ke(p, c);
    let g = await p.toBuffer();
    if (g.length <= e.maxBytes) return L(g, c, e.originalSize);
  }
  return null;
}
function Ke(e, n) {
  switch (n) {
    case "png":
      return e.png({ compressionLevel: 9, palette: true });
    case "jpeg":
      return e.jpeg({ quality: 80 });
    case "webp":
      return e.webp({ quality: 80 });
  }
}
async function Qe(e, n) {
  let r = await n(e.imageBuffer).resize(800, 800, { fit: "inside", withoutEnlargement: true }).png({ compressionLevel: 9, palette: true, colors: 64 }).toBuffer();
  if (r.length <= e.maxBytes) return L(r, "png", e.originalSize);
  return null;
}
async function Ze(e, n, r) {
  let o = await r(e.imageBuffer).resize(600, 600, { fit: "inside", withoutEnlargement: true }).jpeg({ quality: n }).toBuffer();
  if (o.length <= e.maxBytes) return L(o, "jpeg", e.originalSize);
  return null;
}
async function et(e, n) {
  let r = await n(e.imageBuffer).resize(400, 400, { fit: "inside", withoutEnlargement: true }).jpeg({ quality: 20 }).toBuffer();
  return L(r, "jpeg", e.originalSize);
}
function Yne(e, n) {
  let { originalWidth: r, originalHeight: o, displayWidth: m, displayHeight: s } = e;
  if (!r || !o || !m || !s || m <= 0 || s <= 0) {
    if (n) return `${import_chunk_ve5qgcmh.xst}${n}]`;
    return null;
  }
  let p = r !== m || o !== s;
  if (!p && !n) return null;
  let c = [];
  if (n) c.push(`source: ${n}`);
  if (p) {
    let g = r / m;
    c.push(`original ${r}x${o}, displayed at ${m}x${s}. Multiply coordinates by ${g.toFixed(2)} to map to original image.`);
  }
  return `${import_chunk_ve5qgcmh.Eon}${c.join(", ")}]`;
}
