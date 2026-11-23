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
var chunk_r48wrczg_exports = {};
__export(chunk_r48wrczg_exports, {
  AAn: () => AAn,
  AMe: () => AMe,
  BXt: () => BXt,
  CAn: () => CAn,
  CMe: () => CMe,
  Gti: () => Gti,
  HFa: () => HFa,
  IFa: () => IFa,
  Jrr: () => Jrr,
  Kti: () => Kti,
  Ltt: () => Ltt,
  MFa: () => MFa,
  Ntt: () => Ntt,
  OFa: () => OFa,
  PFa: () => PFa,
  Qrr: () => Qrr,
  RFa: () => RFa,
  TAn: () => TAn,
  Vti: () => Vti,
  W5o: () => W5o,
  WXt: () => WXt,
  Xrr: () => Xrr,
  YJ: () => YJ,
  Yrr: () => Yrr,
  Yti: () => Yti,
  Zrr: () => Zrr,
  bW: () => bW,
  cUe: () => cUe,
  cq: () => cq,
  f8r: () => f8r,
  fTe: () => fTe,
  j5o: () => j5o,
  m8r: () => m8r,
  p8r: () => p8r,
  q2: () => q2,
  qrr: () => qrr,
  qti: () => qti,
  xFa: () => xFa,
  zti: () => zti
});
module.exports = __toCommonJS(chunk_r48wrczg_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_ac8t6db0 = require("/$bunfs/root/chunk-ac8t6db0.js");
var import_chunk_3a2r0s2z = require("/$bunfs/root/chunk-3a2r0s2z.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_ddfyyyy7 = require("/$bunfs/root/chunk-ddfyyyy7.js");
var import_chunk_0rbztqww = require("/$bunfs/root/chunk-0rbztqww.js");
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_7xms8wr2 = require("/$bunfs/root/chunk-7xms8wr2.js");
var import_chunk_7j8he8m3 = require("/$bunfs/root/chunk-7j8he8m3.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_fs = require("fs");
var import_path = require("path");
var import_util = require("util");
function qrr() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_ASSETS ?? ((0, import_chunk_ac8t6db0.xEt)() || ((0, import_chunk_7xms8wr2.h8r)().capabilities?.includes("assets") ?? false));
}
function RFa() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_ASSETS !== void 0) return "env";
  return (0, import_chunk_ac8t6db0.xEt)() ? "agent" : (0, import_chunk_7xms8wr2.h8r)().source;
}
var j = "image/svg+xml", f8r = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ke = 2097152;
function TAn(e) {
  return e === j ? ke : import_chunk_ddfyyyy7.Q$n;
}
var H = /* @__PURE__ */ new Map([[".png", "image/png"], [".jpg", "image/jpeg"], [".jpeg", "image/jpeg"], [".gif", "image/gif"], [".webp", "image/webp"], [".svg", j], [".mp4", "video/mp4"], [".webm", "video/webm"], [".pdf", "application/pdf"], [".docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], [".woff2", "font/woff2"], [".woff", "font/woff"], [".ttf", "font/ttf"], [".otf", "font/otf"], [".csv", "text/csv"], [".md", "text/markdown"], [".markdown", "text/markdown"], [".json", "application/json"], [".txt", "text/plain"], [".ts", "text/plain"], [".css", "text/css"], [".js", "text/javascript"], [".mjs", "text/javascript"], [".cjs", "text/javascript"], [".xlsx", f8r]]), xFa = (0, import_chunk_4smdap7r.M)(H.values()).flatMap((e) => j5o(e) ?? []), Yrr = [...H.keys()].map((e) => e.slice(1)).join(", ");
function Ltt(e) {
  return H.get((0, import_path.extname)(e).toLowerCase());
}
var Ee = /* @__PURE__ */ new Set(["text/csv", "text/markdown", "application/json", "text/plain", f8r]);
function CAn(e) {
  return e !== void 0 && Ee.has(e);
}
var O = "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) \u2014 retry the upload so it is checked again", de = "reading where file_path resolves is blocked by a Read permission rule \u2014 the upload was not attempted", ue = "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking \u2014 upload the file by its resolved path, or copy it under the working directory first", Xrr = "file_path must name a regular file to upload", Jrr = "the file is empty \u2014 nothing to upload";
function Qrr(e, r) {
  return `too large: ${Math.ceil(Number(e) * 10 / 1024 / 1024) / 10}MB (max ${r / 1024 / 1024}MB)`;
}
var p8r = "file_path is on a volume that reports no usable file identity (some network, FUSE, and virtual-disk mounts), so the approved file cannot be told apart from a replacement \u2014 copy it to an ordinary local directory and upload the copy";
function N(e) {
  if ((0, import_chunk_jv7av99m.J)(e)) return { kind: "missing" };
  let r = (0, import_chunk_jv7av99m.w)(e);
  return { kind: "error", reason: "read_error", message: `cannot read file_path (${r ?? "unexpected error"})`, errnoCode: r };
}
function BXt(e) {
  return `${e.dev}:${e.ino}:${e.size}:${e.mtimeNs}`;
}
function PFa(e) {
  let r = e.split(":");
  if (r.length !== 4 || !r.every((a) => /^\d+$/.test(a))) return;
  return Number(r[2]);
}
var Zrr = "upload_asset reads only local files \u2014 file_path names a network path (UNC share, /net automount, or device-style path), reaches one through a link on the way, or has a directory or link on the way that could not be examined; if the file is on a network location, copy it onto a local disk first";
function YJ(e) {
  if ((0, import_chunk_mha8pjbc.RWt)(e)) return { kind: "network" };
  let r = (0, import_chunk_w578pjby.ig)((0, import_chunk_w578pjby.le)(), e, (0, import_chunk_w578pjby.Ace)());
  if (r === import_chunk_w578pjby.Pg) return { kind: "unresolved", error: (0, import_chunk_w578pjby.J0o)(e) };
  if (r === import_chunk_w578pjby.II || r !== void 0 && (0, import_chunk_mha8pjbc.RWt)(r) || (0, import_chunk_mha8pjbc.w0)(e)) return { kind: "network" };
  let a;
  try {
    a = (0, import_fs.realpathSync)(e);
  } catch (d) {
    return { kind: "unresolved", error: d };
  }
  return (0, import_chunk_mha8pjbc.RWt)(a) ? { kind: "network" } : { kind: "resolved", real: a };
}
function WXt(e) {
  try {
    let r = (0, import_fs.lstatSync)(e, { bigint: true });
    return { real: e, identity: BXt(r), ...r.isFile() && r.nlink > 1n && { linked: true } };
  } catch {
    return { real: e, identity: null };
  }
}
function m8r(e, r = YJ(e), a = r.kind !== "network" && xe(e)) {
  return CAn(Ltt(e)) || r.kind === "resolved" && CAn(Ltt(r.real)) || a;
}
function xe(e) {
  return Ntt(e).link;
}
function Ntt(e) {
  try {
    return { link: (0, import_fs.lstatSync)(e).isSymbolicLink(), unreadable: null };
  } catch (r) {
    return { link: true, unreadable: (0, import_chunk_jv7av99m.w)(r) ?? "unexpected error" };
  }
}
var ce = (0, import_util.promisify)(import_fs.read);
function Gti(e, r, a, d) {
  let n = r, f = typeof n === "object" && n !== null && typeof n.real === "string" ? { real: n.real, identity: typeof n.identity === "string" && (n.digest === void 0 || typeof n.digest === "string") ? n.identity : null, ...typeof n.digest === "string" && { digest: n.digest } } : void 0, o = YJ(e);
  if (o.kind === "network") return { kind: "error", reason: "network", message: Zrr };
  if (o.kind === "unresolved") {
    if (f !== void 0 && f.identity !== null) return { kind: "error", reason: "changed", message: O };
    let g = (0, import_chunk_w578pjby.Ei)(e).slice(1).map(a);
    return g.includes("deny") ? { kind: "error", reason: "read_denied", message: de } : g.some((b) => b !== "allow") ? { kind: "error", reason: "via_link", message: ue } : N(o.error);
  }
  let { real: i } = o, c = i === e ? void 0 : a(i);
  if (c === "deny") return { kind: "error", reason: "read_denied", message: de };
  if (f !== void 0) {
    if (i !== f.real) return { kind: "error", reason: "changed", message: O };
  } else if (c !== void 0 && c !== "allow") return { kind: "error", reason: "via_link", message: ue };
  let E;
  try {
    E = (0, import_fs.lstatSync)(i, { bigint: true });
  } catch (g) {
    return f !== void 0 && (0, import_chunk_jv7av99m.J)(g) ? { kind: "error", reason: "changed", message: O } : N(g);
  }
  if (E.isSymbolicLink()) return { kind: "error", reason: "changed", message: O };
  if (!E.isFile()) return { kind: "error", reason: "not_a_file", message: Xrr };
  if (f === void 0 && E.nlink > 1n) return { kind: "error", reason: "hard_link", message: "file_path is one of several hard links to its file, and this approval did not examine that \u2014 copy the file to a fresh path under the working directory and upload the copy" };
  let h = 536870912 | import_fs.constants.O_NONBLOCK, v;
  try {
    v = (0, import_fs.openSync)(i, import_fs.constants.O_RDONLY | import_chunk_jxja0v0z.cr | h);
  } catch (g) {
    if ((0, import_chunk_jv7av99m.w)(g) === "ELOOP") return { kind: "error", reason: "changed", message: O };
    return N(g);
  }
  let R = false;
  try {
    let g = (0, import_fs.fstatSync)(v, { bigint: true });
    if (!g.isFile()) return { kind: "error", reason: "not_a_file", message: Xrr };
    if ((0, import_chunk_kpby9tcv.ia)(g.ino)) return { kind: "error", reason: "no_identity", message: p8r };
    if (BXt(g) !== (f !== void 0 ? f.identity : BXt(E))) return { kind: "error", reason: "changed", message: O };
    try {
      let C = YJ(e);
      if (C.kind !== "resolved" || C.real !== i) return { kind: "error", reason: "changed", message: O };
      let L = (0, import_fs.lstatSync)(i, { bigint: true });
      if (L.dev !== g.dev || L.ino !== g.ino) return { kind: "error", reason: "changed", message: O };
    } catch {
      return { kind: "error", reason: "changed", message: O };
    }
    let b = Number(g.size);
    if (b === 0 || b > d) return { kind: "error", reason: "size", message: b === 0 ? Jrr : Qrr(b, d), sizeBytes: b };
    return R = true, { kind: "opened", fd: v, size: b, real: i, identity: BXt(g), digest: f?.digest };
  } catch (g) {
    return N(g);
  } finally {
    if (!R) (0, import_fs.closeSync)(v);
  }
}
async function zti(e) {
  let { fd: r, size: a, identity: d, digest: n } = e;
  try {
    if (BXt((0, import_fs.fstatSync)(r, { bigint: true })) !== d) return { kind: "error", reason: "changed", message: O };
    let f = Buffer.allocUnsafe(a), o = 0;
    while (o < a) {
      let { bytesRead: c } = await ce(r, f, o, a - o, o);
      if (c === 0) break;
      o += c;
    }
    let { bytesRead: i } = await ce(r, Buffer.alloc(1), 0, 1, a);
    if (o !== a || i !== 0) return { kind: "error", reason: "changed", message: O };
    if (n !== void 0 && (0, import_chunk_ccm69jjy.Je)(f) !== n) return { kind: "error", reason: "changed", message: O };
    return { kind: "ok", bytes: f };
  } catch (f) {
    return N(f);
  } finally {
    (0, import_fs.closeSync)(r);
  }
}
function Vti(e) {
  try {
    (0, import_fs.closeSync)(e.fd);
  } catch {
  }
}
async function AAn(e, r, a, d) {
  let n = Gti(e, r, a, d);
  return n.kind === "opened" ? zti(n) : n;
}
var ve = /* @__PURE__ */ new Set(["invalid_request", "too_large", "unsupported_type", "quota_or_state", "rate_limited", "capability_disabled", "store_unavailable", "upstream_error", "credential_rejected", "not_found", "asset_not_found", "not_copyable"]), cUe = /^\/?_blob\/[0-9a-f]{32}$/;
function te(e, r) {
  return r === `_blob/${e}` || r === `/_blob/${e}` ? r : `/_blob/${e}`;
}
var cq = /^[0-9a-f]{64}$/, Re = 50, Kti = 40, qti = 73, fTe = /^[A-Za-z0-9_=-]{1,4096}$/, Yti = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/, bW = /^[a-z0-9]{1,24}\/[a-z0-9.+-]{1,80}$/, CMe = 10, q2 = 25, AMe = 1024, me = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ opaque_id: (0, import_chunk_rnm2beqc.we)().regex(import_chunk_r8478wtb.ey), url: (0, import_chunk_rnm2beqc.we)().optional().catch(void 0), size_bytes: (0, import_chunk_rnm2beqc.nr)().int().nonnegative(), content_type: (0, import_chunk_rnm2beqc.we)().regex(bW), sha256: (0, import_chunk_rnm2beqc.we)().regex(cq).optional() })), Te = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ assets: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ opaque_id: (0, import_chunk_rnm2beqc.we)().regex(import_chunk_r8478wtb.ey), url: (0, import_chunk_rnm2beqc.we)().optional().catch(void 0), content_type: (0, import_chunk_rnm2beqc.we)().regex(bW).max(qti), size_bytes: (0, import_chunk_rnm2beqc.nr)().int().nonnegative().max(import_chunk_ddfyyyy7.vEt), sha256: (0, import_chunk_rnm2beqc.we)().regex(cq).optional(), created_at: (0, import_chunk_rnm2beqc.we)().regex(Yti).max(Kti) })).max(1e3), usage: (0, import_chunk_rnm2beqc.on)({ files: (0, import_chunk_rnm2beqc.nr)().int().nonnegative(), bytes: (0, import_chunk_rnm2beqc.nr)().int().nonnegative(), max_files: (0, import_chunk_rnm2beqc.nr)().int().nonnegative(), max_bytes: (0, import_chunk_rnm2beqc.nr)().int().nonnegative() }), next: (0, import_chunk_rnm2beqc.we)().regex(fTe).or((0, import_chunk_rnm2beqc.Cg)("")).nullish().transform((e) => e || void 0), cowritten: (0, import_chunk_rnm2beqc.Cg)(true).optional().catch(void 0), outside_writer: (0, import_chunk_rnm2beqc.Ci)().optional().catch(void 0) })), Fe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ deleted: (0, import_chunk_rnm2beqc.Ci)() })), $e = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ error: (0, import_chunk_rnm2beqc.on)({ code: (0, import_chunk_rnm2beqc.we)(), message: (0, import_chunk_rnm2beqc.we)().optional() }) })), Oe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ error: (0, import_chunk_rnm2beqc.we)(), reason: (0, import_chunk_rnm2beqc.we)() })), Ce = 2e4, re = 3e4, Le = 9e4;
function De(e) {
  return `/api/frame/blob/${e}/agent-upload`;
}
function he(e) {
  return `/api/frame/blob/${e}/agent-list`;
}
function Me(e, r) {
  return `/api/frame/blob/${e}/${r}/agent-delete`;
}
function Pe(e) {
  return `/api/frame/blob/${e}/agent-copy`;
}
function q(e, r) {
  let a = $e().safeParse(r);
  if (a.success) {
    let d = a.data.error.code;
    if (ve.has(d)) {
      let n = a.data.error.message && Z(a.data.error.message);
      return { code: d, reason: d, ...n && { detail: n } };
    }
    return { code: "upstream_error", reason: "unknown_code" };
  }
  if (e === 403 || e === 503) {
    let d = Oe().safeParse(r);
    if (d.success) return { code: "policy_denied", reason: "policy_denied", detail: Z(d.data.error) };
  }
  if (e === 403) {
    if (typeof r === "string" && r.trim() === "not a writer") return { code: "not_writer", reason: "not_writer" };
    if (typeof r === "string" && /^\s*</.test(r)) return { code: "upstream_error", reason: "http_403_page" };
    return { code: "credential_rejected", reason: (0, import_chunk_ac8t6db0.mle)(e, r) ? "restricted_sandbox" : "http_403" };
  }
  if (e === 404) return typeof r === "string" && r.trim() === "not found" ? { code: "not_found", reason: "http_404" } : { code: "store_unavailable", reason: "unrouted", detail: "this asset route is not served on this path yet (an older deployment, or a cloud session whose gateway does not relay it) \u2014 nothing changed; retry later" };
  if (e === 401) return { code: "upstream_auth", reason: "http_401" };
  if (e === 409) return { code: "quota_or_state", reason: "http_409" };
  if (e === 413) return { code: "too_large", reason: "http_413" };
  if (e === 415) return { code: "unsupported_type", reason: "http_415" };
  if (e === 429) return { code: "rate_limited", reason: "http_429" };
  if (e === 502 || e === 503 || e === 504) return { code: "store_unavailable", reason: `http_${e}` };
  return { code: "upstream_error", reason: `http_${e}` };
}
function Z(e) {
  return (0, import_chunk_7cfjrnwy.ee)(e.replace(/[\p{Cc}\p{Cf}\p{Co}]/gu, " "), 200);
}
function Ne(e, r, a = "upload", d) {
  let n = `asset ${a} failed (${e})`;
  switch (e) {
    case "invalid_request":
      return `${n}: ${r ?? "the server could not accept the request as shaped"}`;
    case "too_large":
      return `${n}: ${r ?? "rejected as too large by the server or an intermediary although under the client limit \u2014 compress or split it"}`;
    case "unsupported_type":
      return `${n}: ${r ?? "the server or an intermediary on this path refused the content type, which this client supports \u2014 a retry will not help"}`;
    case "quota_or_state":
      return `${n}: ${r ?? (a === "upload" || a === "copy" ? "the Artifact cannot take uploads right now \u2014 it is a live document, unpublished, retired, being deleted, or over its asset storage quota" : "the Artifact has no asset store right now \u2014 it is a live document, unpublished, retired, or being deleted")}`;
    case "rate_limited":
      return `${n}: calling too often \u2014 wait${r ? ` ${r}` : ""} before retrying, and never loop`;
    case "upstream_auth":
      return `${n}: could not authenticate \u2014 the session's credential may need a refresh; try again`;
    case "capability_disabled":
      return `${n}: the Artifact's published version does not declare the assets capability \u2014 republish it with assets: {} added to its declared capabilities, then retry`;
    case "store_unavailable":
      return `${n}: ${r ?? `the asset store is unavailable right now \u2014 retry once after a short wait${a === "upload" ? " (an upload that timed out upstream may already be stored; a duplicate costs quota)" : ""}`}`;
    case "upstream_error":
      return `${n}: unexpected answer from the server${r ? ` (${r})` : ""}`;
    case "not_found":
      return a === "copy" && d === "not_found" ? `${n}: the SOURCE Artifact (from_url) does not exist, is not one this session can open, or cannot be copied from \u2014 the cases are deliberately indistinguishable; check from_url with action "list", scope "shared"` : `${n}: no such Artifact, or artifact assets are not available to this account or Artifact \u2014 the cases are deliberately indistinguishable; check the url with action "list"`;
    case "asset_not_found":
      return `${n}: ${r ?? "the source Artifact holds no asset with one of the given ids"} \u2014 run action "list_assets" on from_url for its current ids; nothing was copied`;
    case "not_copyable":
      return `${n}: ${r ?? "this source cannot be copied from"}; nothing was copied`;
    case "not_writer":
      return `${n}: this account can open the Artifact but not edit it \u2014 only writers can ${a === "copy" ? "copy assets into it" : `${a} assets`}`;
    case "credential_rejected":
      if (d === "restricted_sandbox") return `${n}: ${import_chunk_ac8t6db0.gZ}`;
      return `${n}: the server refused this session's credential at the asset door \u2014 not an access or existence answer; report this as a client/server integration fault${r ? ` (${r})` : ""}`;
    case "policy_denied":
      return `${n}: ${r ?? "blocked by the organization's artifact policy"}`;
    case "unavailable_to_account":
      return `${n}: artifact assets are not available to this account`;
  }
}
function G(e, r) {
  return (a, d, n) => (e(d), { kind: "error", code: a, message: Ne(a, n, r, d), reason: d });
}
var Be = "asset uploads, copies, listing, and deletes from an agent session (one with no user account) aren't enabled on the server for this organization; retrying from here will not help";
async function Y(e, r) {
  let { verb: a, route: d, body: n, contentType: f, marks: o, fail: i } = e, c = (T) => ({ replied: false, failure: T }), E = (0, import_chunk_ac8t6db0.xEt)();
  if (E) o.agent_direct = true;
  let h = (0, import_chunk_ac8t6db0.rUn)() || (0, import_chunk_ac8t6db0.Gbe)() && (0, import_chunk_ac8t6db0.Bln)(import_chunk_ac8t6db0._Z), v = !E && h && !(0, import_chunk_ac8t6db0.r9)(import_chunk_ac8t6db0._Z), R = !E && !h && (0, import_chunk_ac8t6db0.Gbe)() || v, g = () => c(i("store_unavailable", "relay_unavailable", "asset uploads, copies, listing, and deletes run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help"));
  if (!R && !E && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return g();
  if (R && !(0, import_chunk_ac8t6db0.mj)(import_chunk_ac8t6db0._Z)) return c(i("store_unavailable", "relay_not_served", "asset uploads, copies, listing, and deletes aren't available from this kind of session; retrying from here will not help"));
  let b = (0, import_chunk_0rkwgmhx.se)();
  if (!b.assetsOnRoster) {
    let T = b.accountEpoch, x = b.roster === void 0, F = b.roster ?? await (0, import_chunk_f2vegtjy.L0e)({ timeoutMs: 5e3, signal: r, credentials: e.credentials });
    if ("err" in F) o[`roster_${F.cause}`] = true;
    else if (x && !(0, import_chunk_f2vegtjy.z8e)({ session: b, epoch: T, roster: F, storageV5: void 0 }).adopted) o.roster_outlived = true;
    else if (!F.capabilities.includes("assets")) if (!R) return c(i("unavailable_to_account", "roster_no_assets"));
    else o.roster_no_assets = true;
  }
  let C = { maxRedirects: 0, headers: { ...(0, import_chunk_ddfyyyy7.sm)(), "Content-Type": f, Accept: "application/json" }, ...e.verb === "upload" ? { streamUpload: { tailFloorMs: () => Le, onSettled: (T) => {
    if (T.stalled) o.stalled = true;
  } } } : { timeout: e.timeoutMs }, ...e.maxBodyLength !== void 0 && { maxBodyLength: e.maxBodyLength }, maxContentLength: 262144, validateStatus: () => true, signal: r }, L = async () => R ? (await (0, import_chunk_ac8t6db0.zyo)("POST", d, n, C, import_chunk_ac8t6db0._Z)).res : import_chunk_865at33z.zt.post(d, n, { ...C, host: "frame", auth: "claude-ai-oauth", refreshOAuth: true, credentials: e.credentials }), S;
  try {
    if (v && e.verb === "upload" && !(0, import_chunk_ac8t6db0.PEt)(import_chunk_ac8t6db0._Z)) {
      let x;
      try {
        x = (await (0, import_chunk_ac8t6db0.zyo)("POST", e.probeRoute, (0, import_chunk_w578pjby._)({ limit: 1 }), { maxRedirects: 0, headers: { ...(0, import_chunk_ddfyyyy7.sm)(), "Content-Type": "application/json", Accept: "application/json" }, timeout: re, maxContentLength: 262144, validateStatus: () => true, signal: r }, import_chunk_ac8t6db0._Z)).res;
      } catch (D) {
        if ((0, import_chunk_3jjr3wje.wd)(D) || D instanceof import_chunk_jv7av99m.Ie) throw D;
        return (0, import_chunk_ac8t6db0.zbe)(import_chunk_ac8t6db0._Z, true), c(i("store_unavailable", "probe_request_error", "the session gateway did not answer; nothing was uploaded \u2014 one retry is safe"));
      }
      let F = (0, import_chunk_ac8t6db0.xys)(x);
      if (F.refused) return (0, import_chunk_ac8t6db0.zbe)(import_chunk_ac8t6db0._Z), g();
      if (!F.vouched) {
        if (!x.ok || x.status >= 500 || x.status === 499) (0, import_chunk_ac8t6db0.zbe)(import_chunk_ac8t6db0._Z, true);
        return c(i("store_unavailable", "probe_unvouched", "the session gateway could not confirm the asset route; nothing was uploaded \u2014 retry later"));
      }
      (0, import_chunk_ac8t6db0.hRe)(import_chunk_ac8t6db0._Z);
    }
    let T = (x) => {
      if (!v) return false;
      let F = (0, import_chunk_ac8t6db0.xys)(x);
      if (F.refused && !(x.ok && x.status === 413)) return (0, import_chunk_ac8t6db0.zbe)(import_chunk_ac8t6db0._Z), (0, import_chunk_ac8t6db0.Ays)(import_chunk_ac8t6db0._Z), true;
      if (F.vouched) (0, import_chunk_ac8t6db0.hRe)(import_chunk_ac8t6db0._Z);
      else if (!(0, import_chunk_ac8t6db0.PEt)(import_chunk_ac8t6db0._Z) && (!x.ok || x.status >= 500 || x.status === 499)) (0, import_chunk_ac8t6db0.zbe)(import_chunk_ac8t6db0._Z, true);
      return false;
    };
    if (S = await L(), T(S)) return g();
    if (S.ok && (S.status === 429 || S.status === 503) && q(S.status, S.data).code !== "policy_denied") {
      let x = (0, import_chunk_865at33z.qp)(S.response.headers?.["retry-after"]);
      if (x !== void 0 && x <= Ce) {
        if (await (0, import_chunk_5appeerh.K)(x, r), r.aborted) throw new import_chunk_jv7av99m.Ie();
        if (o.retried = true, S = await L(), T(S)) return g();
      }
    }
  } catch (T) {
    if ((0, import_chunk_3jjr3wje.wd)(T) || T instanceof import_chunk_jv7av99m.Ie) throw T;
    if (v && !(0, import_chunk_ac8t6db0.PEt)(import_chunk_ac8t6db0._Z)) (0, import_chunk_ac8t6db0.zbe)(import_chunk_ac8t6db0._Z, true);
    if ((0, import_chunk_3jjr3wje.gD)(T) !== void 0) return c(i("store_unavailable", "proxy_refused", "a network proxy refused the connection; nothing was sent \u2014 one retry is safe"));
    return c(i("store_unavailable", "request_error", a === "upload" ? "the request failed in transit or timed out \u2014 a timed-out upload may already be stored; one retry is safe (a duplicate costs quota)" : a === "copy" ? 'the request failed in transit or timed out \u2014 a timed-out copy may already have landed; run action "list_assets" on the destination before retrying, or the assets may be copied twice' : "the request failed in transit or timed out \u2014 one retry is safe"));
  }
  if (!S.ok) return c({ ...i("store_unavailable", S.reason.replace(/-/g, "_")), message: S.reason === "no-auth" ? R ? (0, import_chunk_7j8he8m3.djt)(S.detail) : (0, import_chunk_7j8he8m3.TE)(S.detail) : `asset ${a} unavailable: ${S.reason}` });
  if (E && S.status === 403 && q(S.status, S.data).reason === "credential_rejected") return c({ ...i("credential_rejected", "agent_not_enabled"), message: `asset ${a} failed (credential_rejected): ${Be}` });
  return { replied: true, status: S.status, data: S.data, retryAfter: S.response.headers?.["retry-after"] };
}
function X(e, r) {
  let { code: a, reason: d, detail: n } = q(e.status, e.data), f = (0, import_chunk_865at33z.qp)(e.retryAfter);
  return r(a, d, a === "rate_limited" ? f !== void 0 ? `${Math.max(1, Math.ceil(f / 1e3))}s` : void 0 : a === "upstream_error" && n === void 0 ? `HTTP ${e.status}` : n);
}
async function W5o(e, r) {
  let { slug: a, bytes: d, contentType: n } = e, f = {}, o = G((v) => (0, import_chunk_cqa9hrgx.m)("artifact_asset_upload", v, f), "upload");
  if (!import_chunk_r8478wtb.yo.test(a)) return o("invalid_request", "invalid_slug", "not a valid artifact id");
  let i = TAn(n);
  if (d.length === 0 || d.length > i) return d.length === 0 ? o("invalid_request", "size", "the file is empty") : o("too_large", "size", n === j ? `the SVG exceeds the ${i >> 20} MiB limit for SVG assets \u2014 simplify or rasterize it` : `the file exceeds the ${i >> 20} MiB per-asset limit \u2014 compress or split it`);
  let c = await Y({ verb: "upload", route: De(a), probeRoute: he(a), body: d, contentType: n, maxBodyLength: import_chunk_ddfyyyy7.Q$n + 4096, marks: f, fail: o, credentials: e.credentials }, r), E = (v) => f.retried === true ? { ...v, resent: true } : v;
  if (!c.replied) return E(c.failure);
  if (c.status !== 200) return E(X(c, o));
  let h = me().safeParse(c.data);
  if (!h.success || h.data.content_type !== n || (n === j ? h.data.size_bytes === 0 || h.data.size_bytes > import_chunk_ddfyyyy7.Q$n : h.data.size_bytes !== d.length)) return E(o("upstream_error", "malformed_echo", "the upload probably succeeded but the reply was unreadable \u2014 retry at most once; if it repeats, stop and report it"));
  return (0, import_chunk_0rkwgmhx.se)().assetsOnRoster = true, (0, import_chunk_cqa9hrgx.u)("artifact_asset_upload", { ...f, size_bytes: h.data.size_bytes }), { kind: "ok", id: h.data.opaque_id, url: te(h.data.opaque_id, h.data.url), sizeBytes: h.data.size_bytes, contentType: h.data.content_type, ...h.data.sha256 !== void 0 && { sha256: h.data.sha256 }, ...f.retried === true && { resent: true } };
}
async function OFa(e, r) {
  let { slug: a, after: d } = e, n = {}, f = G((c) => (0, import_chunk_cqa9hrgx.m)("artifact_asset_list", c, n), "list");
  if (!import_chunk_r8478wtb.yo.test(a)) return f("invalid_request", "invalid_slug", "not a valid artifact id");
  if (d !== void 0 && !fTe.test(d)) return f("invalid_request", "invalid_cursor", "after must be the next value from an earlier list_assets result");
  let o = await Y({ verb: "list", route: he(a), body: (0, import_chunk_w578pjby._)({ ...d !== void 0 && { after: d }, limit: Re }), contentType: "application/json", timeoutMs: re, marks: n, fail: f, credentials: e.credentials }, r);
  if (!o.replied) return o.failure;
  if (o.status !== 200) return X(o, f);
  let i = Te().safeParse(o.data);
  if (!i.success) return f("upstream_error", "malformed_reply", "the listing was unreadable");
  return (0, import_chunk_0rkwgmhx.se)().assetsOnRoster = true, (0, import_chunk_qtg8rez4._Un)(a, i.data.cowritten), (0, import_chunk_qtg8rez4.Qln)(a, i.data.outside_writer), (0, import_chunk_cqa9hrgx.u)("artifact_asset_list", { ...n, count: i.data.assets.length }), { kind: "ok", assets: i.data.assets.map((c) => ({ id: c.opaque_id, url: te(c.opaque_id, c.url), contentType: c.content_type, sizeBytes: c.size_bytes, ...c.sha256 !== void 0 && { sha256: c.sha256 }, createdAt: Z(c.created_at) })), usage: { files: i.data.usage.files, bytes: i.data.usage.bytes, maxFiles: i.data.usage.max_files, maxBytes: i.data.usage.max_bytes }, ...i.data.next !== void 0 && { next: i.data.next }, ...i.data.cowritten && { cowritten: true }, ...i.data.outside_writer !== void 0 && { outsideWriter: i.data.outside_writer } };
}
async function IFa(e, r) {
  let { slug: a, id: d } = e, n = {}, f = G((c) => (0, import_chunk_cqa9hrgx.m)("artifact_asset_delete", c, n), "delete");
  if (!import_chunk_r8478wtb.yo.test(a)) return f("invalid_request", "invalid_slug", "not a valid artifact id");
  if (!import_chunk_r8478wtb.ey.test(d)) return f("invalid_request", "invalid_id", "not a valid asset id");
  let o = await Y({ verb: "delete", route: Me(a, d), body: "{}", contentType: "application/json", timeoutMs: re, marks: n, fail: f, credentials: e.credentials }, r);
  if (!o.replied) return o.failure;
  if (o.status !== 200) return X(o, f);
  let i = Fe().safeParse(o.data);
  if (!i.success) return f("upstream_error", "malformed_reply", "the delete may have succeeded but the reply was unreadable \u2014 list the assets to check");
  return (0, import_chunk_0rkwgmhx.se)().assetsOnRoster = true, (0, import_chunk_cqa9hrgx.u)("artifact_asset_delete", { ...n, deleted: i.data.deleted }), { kind: "ok", deleted: i.data.deleted };
}
var ze = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ assets: (0, import_chunk_rnm2beqc._o)(me().extend({ from_id: (0, import_chunk_rnm2beqc.we)().regex(import_chunk_r8478wtb.ey) })).max(CMe) })), Ue = 12e4;
async function MFa(e, r) {
  let { slug: a, fromSlug: d, ids: n } = e, f = e.crossOrgOk === true, o = {}, i = G((h) => (0, import_chunk_cqa9hrgx.m)("artifact_asset_copy", h, o), "copy");
  if (!import_chunk_r8478wtb.yo.test(a) || !import_chunk_r8478wtb.yo.test(d)) return i("invalid_request", "invalid_slug", "not a valid artifact id");
  if (a === d) return i("invalid_request", "same_artifact", "from_url names the destination itself \u2014 its assets are already there");
  if (n.length === 0 || n.length > CMe || !n.every((h) => import_chunk_r8478wtb.ey.test(h)) || new Set(n).size !== n.length) return i("invalid_request", "invalid_ids", `asset_ids must be 1\u2013${CMe} distinct asset ids`);
  let c = await Y({ verb: "copy", route: Pe(a), body: (0, import_chunk_w578pjby._)({ from: d, ids: n, ...f && { cross_org_ok: true } }), contentType: "application/json", timeoutMs: Ue, marks: o, fail: i, credentials: e.credentials }, r);
  if (!c.replied) return c.failure;
  if (c.status !== 200) return f && c.status === 400 && q(400, c.data).detail === "invalid request body" ? i("not_copyable", "predates_cross_org", "this server doesn't support copying from another organization's artifact yet, so don't retry the copy, and tell the user cross-organization copies aren't supported yet") : X(c, i);
  let E = ze().safeParse(c.data);
  if (!E.success || E.data.assets.length !== n.length || E.data.assets.some((h, v) => h.from_id !== n[v])) return i("upstream_error", "malformed_reply", 'the copy probably succeeded but the reply was unreadable \u2014 run action "list_assets" on the destination before retrying, or the assets may be copied twice');
  return (0, import_chunk_0rkwgmhx.se)().assetsOnRoster = true, (0, import_chunk_cqa9hrgx.u)("artifact_asset_copy", { ...o, count: n.length }), { kind: "ok", assets: E.data.assets.map((h) => ({ fromId: h.from_id, id: h.opaque_id, url: te(h.opaque_id, h.url), sizeBytes: h.size_bytes, contentType: h.content_type, ...h.sha256 !== void 0 && { sha256: h.sha256 } })) };
}
var W = 9e4;
function j5o(e) {
  for (let [r, a] of H) if (a === e) return r;
  return;
}
var fe = "asset reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help";
async function HFa(e, r, a, d, { admitPublicRead: n, probeToolUseId: f } = {}) {
  let o = (y, k) => ((0, import_chunk_cqa9hrgx.m)("artifact_asset_read", y), { kind: "error", message: `asset read failed: ${k}`, reason: y });
  if (!import_chunk_r8478wtb.yo.test(e.slug)) return o("invalid_slug", "not a valid artifact id");
  if (!import_chunk_r8478wtb.ey.test(r)) return o("invalid_id", "not a valid asset id");
  let i = (0, import_chunk_ac8t6db0.bkr)(), c = (0, import_chunk_ac8t6db0.xEt)(), E = !i && ((0, import_chunk_ac8t6db0.Gbe)() || (0, import_chunk_ac8t6db0.rUn)() && !(0, import_chunk_ac8t6db0.r9)(import_chunk_865at33z.FN));
  if (!E && !i && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return o("relay_unavailable", fe);
  let h = await (0, import_chunk_mha8pjbc.l1)(e, "artifact_asset_read", a, { gatePublicRead: false, credentials: d, probeToolUseId: f });
  if (h.err !== null) return { kind: "error", message: h.err.replace(/^artifact read/, "asset read"), reason: h.status === 404 ? "boot_404" : "boot" };
  let { ver: v, assetToken: R } = h, g = R === void 0;
  if (g && !(0, import_chunk_0rbztqww.zH)()) return o("tokenless", "this artifact is served to you as a public (non-member) reader, and assets are not readable that way");
  if (g && n?.() !== true) return (0, import_chunk_cqa9hrgx.l)("artifact_asset_read", import_chunk_0rbztqww.X0e), { kind: "error", reason: import_chunk_0rbztqww.X0e, message: `asset read failed: ${import_chunk_0rbztqww.qkr}` };
  let b = E && !g, C = `/_f/${v}/_blob/${r}`, L = `frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`, { host: S, base: T, headers: x } = (0, import_chunk_mha8pjbc.M$n)(e), F = () => ((0, import_chunk_0rkwgmhx.se)().contentHostEgressDenied.add(e.env), o("egress_blocked", `this environment's network allowlist blocks ${S}, so the asset cannot be fetched (access to the artifact itself is fine). ${g ? `Public artifacts from outside your organization are fetched from that host directly, so it must be on this session's network allowlist. ${(0, import_chunk_mha8pjbc.H$n)(e.env)}` : import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE ? "This is a restriction of where this session runs; retrying from here will not help." : `To allow it, add *.${L} to the network allowlist this session runs behind (the sandbox's allowed domains, or the Claude desktop app's network settings).`}`)), D = (y, k) => ((0, import_chunk_w578pjby.t)(`[artifact] asset fetch: egress proxy denied (${k})`), o("egress_denied", `artifact content fetch refused by the environment's egress proxy (${(0, import_chunk_3jjr3wje.qX)(y)})`)), _e = (y, k) => {
    if (k !== void 0) (0, import_chunk_w578pjby.t)(`[artifact] asset fetch: proxy refused, marker ${k}`);
    return o("proxy_refused", `the proxy refused the connection to the artifact's content host (${(0, import_chunk_3jjr3wje.qX)(y)})`);
  }, B = false, I;
  if (!b && R !== void 0 && (0, import_chunk_mha8pjbc.O$n)(h.data)) {
    try {
      I = await (0, import_chunk_mha8pjbc.I$n)(e.slug, C, { token: R, timeout: W, maxContentLength: import_chunk_ddfyyyy7.fle + 1, signal: a, credentials: d });
    } catch (y) {
      if ((0, import_chunk_3jjr3wje.wd)(y) || y instanceof import_chunk_jv7av99m.Ie) throw y;
      return o("request_error", `the content fetch failed in transit, timed out, or exceeded the ${import_chunk_ddfyyyy7.fle >> 20} MiB limit`);
    }
    B = I.kind === "answer";
  }
  let A;
  try {
    if (I?.kind === "answer") A = I;
    else if (b) {
      if (R === void 0) return o("internal", "internal error: a public artifact read was routed where it cannot be served \u2014 this is a bug in this build; do not retry");
      let y = await (0, import_chunk_mha8pjbc.P$n)(e.slug, C, { token: R, timeout: W, maxContentLength: import_chunk_ddfyyyy7.fle + 1, signal: a, retryBudget: (0, import_chunk_mha8pjbc._Et)() });
      if (!y.ok) return o(y.reason.replace(/-/g, "_"), y.reason === "no-auth" ? (0, import_chunk_7j8he8m3.djt)(y.detail) : `artifact content is unreachable from this session (${y.reason})`);
      A = { status: y.status, headers: y.response.headers, data: y.data };
    } else {
      let y = R === void 0 ? "" : `?__frame_t=${encodeURIComponent(R)}`, k = await import_chunk_np189awg.Xd.get(`${T}${C}${y}`, { signal: a, timeout: W, responseType: "arraybuffer", maxRedirects: 0, maxContentLength: import_chunk_ddfyyyy7.fle + 1, validateStatus: () => true, ...x && { headers: x } });
      if ((0, import_chunk_3a2r0s2z.iX)(k.status, k.headers)) return F();
      let P = (0, import_chunk_3a2r0s2z.nxe)(k.headers);
      if (P !== void 0 && (k.status < 200 || k.status >= 300)) return D(k.status, P);
      (0, import_chunk_0rkwgmhx.se)().contentHostEgressDenied.delete(e.env), A = { status: k.status, headers: k.headers, data: k.data };
    }
  } catch (y) {
    if ((0, import_chunk_3jjr3wje.wd)(y) || y instanceof import_chunk_jv7av99m.Ie) throw y;
    if (b) (0, import_chunk_ac8t6db0.eYe)();
    let k = b ? void 0 : (0, import_chunk_3jjr3wje.gD)(y);
    if (k !== void 0) {
      if ((0, import_chunk_3a2r0s2z.iX)(k.connectStatus, k.headers)) return F();
      let P = (0, import_chunk_3a2r0s2z.nxe)(k.headers);
      if (P !== void 0) return D(k.connectStatus, P);
      return _e(k.connectStatus, (0, import_chunk_3a2r0s2z.Ycn)(k.headers));
    }
    return o("request_error", `the content fetch failed in transit, timed out, or exceeded the ${import_chunk_ddfyyyy7.fle >> 20} MiB limit`);
  }
  if (b && (0, import_chunk_ac8t6db0.VWt)(A.status)) return o("relay_unavailable", fe);
  if (b && (0, import_chunk_ac8t6db0.zWt)(A.status, A.data)) return o("network_off", `${import_chunk_ac8t6db0.GWt}; retrying from here will not help`);
  if (b && (0, import_chunk_mha8pjbc.L7)(A.status)) return o(`http_${A.status}`, (0, import_chunk_mha8pjbc.x$n)(A.status));
  if (b) (0, import_chunk_ac8t6db0.eYe)(A.status);
  if (A.status === 404) return o("http_404", b ? `not found through this cloud session's artifact mount \u2014 no asset has that id, or asset reads are not enabled for this session yet; a writer of the artifact can tell which with action "list_assets"` : 'no asset with that id in this artifact (it may have been deleted) \u2014 a writer of the artifact can check the id with action "list_assets"');
  if (g && A.status === 403 && (0, import_chunk_qtg8rez4.fat)(A.headers, (0, import_chunk_3a2r0s2z.txe)(A.headers, A.data, (y) => y))) return o("public_refused", "this public artifact serves no asset with that id to readers outside its organization, or it is no longer public");
  let V = b ? void 0 : (0, import_chunk_3a2r0s2z.Kcn)({ status: A.status, headers: A.headers, data: A.data, redact: (y) => (0, import_chunk_mha8pjbc.DWt)(y, R), label: "[artifact] asset fetch" });
  if (V !== void 0) return o(V, import_chunk_3a2r0s2z.qcn[V]);
  if (A.status === 401 || A.status === 403) return o(`http_${A.status}`, b ? "the cloud session's artifact mount refused the read \u2014 asset reads may not be enabled for this session, or the artifact was unshared or taken down" : "access to the artifact content was refused \u2014 the artifact may have been unshared or taken down since the id was listed");
  if (A.status !== 200) return o(`http_${A.status}`, `unexpected answer from the ${B ? "artifact service" : "content host"} (HTTP ${A.status})`);
  if (b) (0, import_chunk_ac8t6db0.hRe)(import_chunk_865at33z.FN);
  let ne = A.headers, ae = b || B ? (0, import_chunk_mha8pjbc.yEt)(ne) : ne?.["content-type"], oe = typeof ae === "string" ? (0, import_chunk_7cfjrnwy.nt)(ae, ";").trim().toLowerCase() : "";
  if (j5o(oe) === void 0) return o("unexpected_type", `the ${B ? "artifact service" : "content host"} served a type this tool does not save`);
  let z = Buffer.from(A.data ?? new ArrayBuffer(0));
  if (z.length === 0 || z.length > import_chunk_ddfyyyy7.fle) return o("size", z.length === 0 ? "the asset is empty" : `the asset exceeds the ${import_chunk_ddfyyyy7.fle >> 20} MiB limit`);
  return { kind: "ok", bytes: z, contentType: oe, relay: b, agentDirect: c, publicRead: g };
}
