const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_zjby1kcv_exports = {};
__export(chunk_zjby1kcv_exports, {
  AXl: () => AXl,
  CXl: () => CXl,
  DXt: () => DXt,
  JNa: () => JNa,
  QNa: () => QNa,
  RXl: () => RXl,
  TXl: () => TXl,
  X9r: () => X9r,
  ZNa: () => ZNa,
  czl: () => czl,
  dzl: () => dzl,
  eFa: () => eFa,
  fzl: () => fzl,
  h5o: () => h5o,
  lzl: () => lzl,
  m5o: () => m5o,
  pzl: () => pzl,
  uzl: () => uzl,
  xXl: () => xXl
});
module.exports = __toCommonJS(chunk_zjby1kcv_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_bsw3jbbx = require("/$bunfs/root/chunk-bsw3jbbx.js");
var import_chunk_0k16ny5f = require("/$bunfs/root/chunk-0k16ny5f.js");
var import_chunk_9cv0y8kw = require("/$bunfs/root/chunk-9cv0y8kw.js");
var import_chunk_jg286npj = require("/$bunfs/root/chunk-jg286npj.js");
var import_chunk_r949v7h0 = require("/$bunfs/root/chunk-r949v7h0.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_stream = require("stream");
var import_promises2 = require("stream/promises");
var import_path = require("path");
var import_promises3 = require("fs/promises");
(0, import_chunk_adx6804h.B)();
var et = 4096, j = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear());
function Ne(e, t, r) {
  if (j.delete(e), j.set(e, { written: t, renamedByNs: BigInt(r + 1) * 1000000n }), j.size > et) {
    let [o] = j.keys();
    if (o !== void 0) j.delete(o);
  }
}
function ce(e) {
  return j.has(e);
}
function tt(e, t) {
  let r = j.get(e);
  if (r === void 0) return 5;
  let { written: o } = r;
  if (o.ino !== t.ino || o.birthtimeNs !== t.birthtimeNs) return 3;
  if (o.size !== t.size || o.mtimeNs !== t.mtimeNs) return 4;
  return t.ctimeNs <= r.renamedByNs ? 1 : 2;
}
var Te = 1048576;
async function Pe(e, t, r) {
  let o;
  try {
    let g = await (0, import_promises3.lstat)(e, { bigint: true });
    if (!g.isFile()) return { replaced: "not_a_file" };
    let d = Number(g.mtimeNs / 1000n) / 1e3;
    if (o = { bytes: Number(g.size), ageSeconds: Math.max(0, Math.round((Date.now() - d) / 1e3)), readOnly: (Number(g.mode) & 146) === 0, vsPlaced: tt(e, g) }, o.bytes !== r) return { replaced: "different_contents", standing: o };
    if (r > Te) return { replaced: "same_size_not_compared", standing: o };
    let [R, k] = await Promise.all([Fe(e), Fe(t)]);
    if (R === null || k === null) return { replaced: "unknown", standing: o };
    return { replaced: R.equals(k) ? "same_contents" : "different_contents", standing: o };
  } catch (g) {
    return (0, import_chunk_jv7av99m.w)(g) === "ENOENT" ? { replaced: "nothing" } : { replaced: "unknown", standing: o };
  }
}
async function Fe(e) {
  let t = await (0, import_chunk_xfj2cwfv.Qdt)(e);
  try {
    let r = await t.stat();
    if (!r.isFile()) return null;
    let o = await (0, import_chunk_xfj2cwfv.IE)(t, Te, r.size);
    return o.overLimit ? null : o.bytes;
  } finally {
    await t.close().catch(() => {
    });
  }
}
var { basename: He, dirname: X, isAbsolute: Ge, join: W, normalize: dt, relative: je, sep: Ve } = import_path.posix, De = (0, import_chunk_6mfepmbb.eP)(), Ce = (0, import_chunk_6mfepmbb.tge)(), Me = (0, import_chunk_6mfepmbb.sce)(), Le = (0, import_chunk_6mfepmbb.nge)(), Ie = (0, import_chunk_6mfepmbb.RJe)(), _e = /* @__PURE__ */ new Set(["connector_download", "browser_download"]), ut = 67108864, be = 3e4, JNa = "connector download not placed: ", QNa = "browser download not placed: ", TXl = `${JNa}tool_container`, CXl = "a /connector-downloads/ mount_path must be a UUID folder, then a name of 1 to 80 letters, digits, dots, underscores and hyphens that starts with neither a dot nor a hyphen, then a dot and 2 to 5 lower-case letters or digits", lzl = 16, oe = 6e4, ct = 500, Ye = "write failed: over_mount_cache_limit", _t = 524288e3, m5o = { lookEveryMs: 3e3, holdForMs: 9e4, async usedBytes(e = "/dev/shm/rclone-vfscache") {
  let t = await (0, import_promises.statfs)(e);
  return (t.blocks - t.bfree) * t.bsize;
}, async serves(e) {
  return (0, import_chunk_jg286npj.x_r)(e).then((t) => t === 1702057286, () => false);
} }, ae = 0, Be = /* @__PURE__ */ new Set();
function Ee(e, t) {
  if (!Be.has(e)) Be.add(e), (0, import_chunk_42tcgre6.q)("warn", "stage_file_mount_cache_limit_not_applied", { why: e, ...t !== void 0 && { code: t } });
}
async function ee(e, t, r, o) {
  if (t <= 0) return true;
  let g = await m5o.usedBytes().catch((d) => (Ee("cache_unreadable", (0, import_chunk_jv7av99m.w)(d) ?? "unknown"), -1 / 0));
  if (g + ae + e > t) {
    if (await m5o.serves(r)) {
      if (o) (0, import_chunk_42tcgre6.q)("info", "stage_file_read_held_back", { bytes: e, used_bytes: g, reserved_bytes: ae, limit_bytes: t });
      return false;
    }
    Ee("not_a_mount");
  }
  if (o) ae += e;
  return true;
}
var Ke = "STAGE_PARENT_ESCAPE", me = /* @__PURE__ */ new Set(["ENAMETOOLONG", "ENOSPC", "EDQUOT", "EFBIG", "EISDIR", "ENOTDIR", "EINVAL", "ELOOP", "ENOTEMPTY", Ke]);
function Se(e) {
  return e < 500 && e !== 408 && e !== 429;
}
function AXl(e) {
  return { ok: true, ...e.noop !== void 0 && { noop: e.noop }, ...e.replaced !== void 0 && { replaced: e.replaced } };
}
function Z(e, t) {
  let r = je(e, t);
  if (r === "" || r === "." || r.split(Ve).includes("..") || Ge(r)) return null;
  return r;
}
function ZNa(e, t = false) {
  if (e.includes("\0")) throw Error("mount_path contains null bytes");
  if (!Ge(e)) throw Error("mount_path must be absolute");
  if (e.split(Ve).includes("..")) throw Error('mount_path must not contain ".." segments');
  let r = dt(e), o = (0, import_chunk_r949v7h0.FG)(t ? "vouched" : import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID, import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND), g = Z(import_chunk_6mfepmbb._Kt, r);
  if (g !== null && (0, import_chunk_3t7ve0wy.Sa)() && o) {
    let h = (0, import_chunk_bsw3jbbx.MMe)(g);
    if (h !== void 0) throw new ue(h);
    return { dest: W(Me, g), root: Me, kind: "home_file", readOnly: false, neverReplace: true };
  }
  if (He(r).startsWith(import_chunk_6mfepmbb.r2)) throw Error("mount_path names a reserved temporary-file name");
  let d = Z(import_chunk_6mfepmbb.S8, r);
  if (d !== null) return { dest: W(De, d), root: De, kind: "upload", readOnly: true, neverReplace: false };
  let R = Z(import_chunk_6mfepmbb.CKn, r);
  if (R !== null) {
    if (!o) {
      let h = Error("staging under /outputs/ is only supported on managed remote sessions");
      throw h.code = "STAGE_OUTPUTS_UNSUPPORTED_RUNNER", h;
    }
    return { dest: W(Ce, R), root: Ce, kind: "output", readOnly: false, neverReplace: false };
  }
  let k = Z(import_chunk_6mfepmbb.AFe, r);
  if (k !== null && o) {
    if (!import_chunk_6mfepmbb.yut.test(k)) {
      let h = Error("a /connector-downloads/ mount_path must be a UUID folder, then a name of 1 to 80 letters, digits, dots, underscores and hyphens that starts with neither a dot nor a hyphen, then a dot and 2 to 5 lower-case letters or digits");
      throw h.code = "STAGE_CONNECTOR_DOWNLOAD_MISSHAPED", h;
    }
    return { dest: W(Le, k), root: Le, kind: "connector_download", readOnly: true, neverReplace: false };
  }
  let O = Z(import_chunk_6mfepmbb.HRt, r);
  if (O !== null && t && o) {
    if (!import_chunk_6mfepmbb.uHr.test(O)) {
      let h = Error("browser download not placed: misshaped_path");
      throw h.code = "STAGE_BROWSER_DOWNLOAD_MISSHAPED", h;
    }
    return { dest: W(Ie, O), root: Ie, kind: "browser_download", readOnly: true, neverReplace: false };
  }
  throw Error("mount_path must be under /uploads/ or /outputs/, under /connector-downloads/ on a managed remote session, or under /browser-downloads/ in a tool container");
}
class ue extends Error {
  refusal;
  constructor(e) {
    super("mount_path names a file that may not be written to the home directory");
    this.refusal = e;
  }
}
function RXl(e) {
  let t;
  try {
    t = ZNa(e);
  } catch (r) {
    if ((0, import_chunk_jv7av99m.w)(r) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER") throw Error("add_directory mount_path must be under /uploads/");
    if (!(r instanceof ue)) throw r;
  }
  if (t?.kind !== "upload") throw Error("add_directory mount_path must be under /uploads/ and not under /uploads/.home/");
  return t.dest;
}
function xe(e, t) {
  if (!(0, import_chunk_6mfepmbb.DRt)(e, t)) throw ke("dest parent escaped stage root");
}
async function pe(e) {
  let t = await (0, import_promises.lstat)(e).catch((r) => {
    if ((0, import_chunk_jv7av99m.kn)(r)) return;
    throw r;
  });
  if (t !== void 0 && !t.isDirectory()) throw ke("the downloads root is not a folder");
}
function ft(e, t) {
  if ((0, import_chunk_z6pfqf6e.rp)(e) || (0, import_chunk_z6pfqf6e.rp)(X(t))) throw ke("a folder on the way to dest has a backslash in its name");
}
function ke(e) {
  let t = Error(e);
  return t.code = Ke, t;
}
function X9r(e) {
  return `${import_chunk_6mfepmbb.r2}${(0, import_chunk_ccm69jjy.Je)(He(e)).slice(0, 16)}.`;
}
async function DXt(e, t) {
  let r = Date.now() - 2 * oe, o;
  try {
    o = await (0, import_promises.readdir)(e);
  } catch {
    return;
  }
  await Promise.all(o.filter((g) => g.startsWith(t)).map(async (g) => {
    let d = W(e, g);
    try {
      if ((await (0, import_promises.stat)(d)).mtimeMs < r) await (0, import_promises.unlink)(d);
    } catch {
    }
  }));
}
function eFa(e, t) {
  return e !== null && e.isFile() && (e.mtimeMs >= t || e.ctimeMs >= t);
}
function Ue(e) {
  return typeof e === "object" && e !== null && e.code === "EROFS";
}
function le(e, t) {
  let { kind: r, status: o } = (0, import_chunk_jv7av99m.$i)(t);
  return { kind: r, status: o, message: `${e} failed: ${r}${o ? ` ${o}` : ""}`, ...r === "http" && o !== void 0 && Se(o) && { permanent: true } };
}
async function xXl(e, t, r = "off", o, g = async () => 0) {
  if (t === void 0 && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID) return { ok: false, error: "CLAUDE_CODE_REMOTE_SESSION_ID unset", permanent: true };
  if (t !== void 0 && e.filestore_path) return { ok: false, error: "synced documents are not staged here" };
  if (e.filestore_path) {
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND !== void 0) return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_stage", "unsupported_runner_kind"), (0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: false, synced_unsupported_runner_kind: true, duration_ms: 0 }), { ok: false, error: "synced-file staging not supported on this runner kind" };
    let { inDownloadsFolder: S } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-fhg0v3gd.js")));
    if (S(e.filestore_path)) return se("synced_document");
    if (e.filestore_path.toLowerCase().includes(import_chunk_6mfepmbb.HRt.slice(1))) return (0, import_chunk_cqa9hrgx.m)("ccr_stage_file_browser_download", "synced_document"), { ok: false, error: `${QNa}synced_document`, permanent: true };
    let { stageSyncedFile: P, SYNCED_FILE_ROOT: _ } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-vcjxnd18.js")));
    return P({ mount_path: e.mount_path, filestore_path: e.filestore_path, content_sha256: e.content_sha256, expected_local_sha256: e.expected_local_sha256 }, pzl, _);
  }
  let d;
  try {
    d = ZNa(e.mount_path, t !== void 0);
  } catch (f) {
    if ((0, import_chunk_jv7av99m.w)(f) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER") (0, import_chunk_cqa9hrgx.m)("ccr_stage_file_outputs", "unsupported_runner_kind"), (0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: false, outputs_unsupported_runner_kind: true, duration_ms: 0 });
    if ((0, import_chunk_jv7av99m.w)(f) === "STAGE_CONNECTOR_DOWNLOAD_MISSHAPED") (0, import_chunk_cqa9hrgx.m)("ccr_stage_file_connector_download", "misshaped_path");
    if ((0, import_chunk_jv7av99m.w)(f) === "STAGE_BROWSER_DOWNLOAD_MISSHAPED") (0, import_chunk_cqa9hrgx.m)("ccr_stage_file_browser_download", "misshaped_path");
    if (f instanceof ue) return U("refused_name", { refusal: f.refusal }), { ok: true, noop: "refused_name" };
    return { ok: false, error: f instanceof Error ? f.message : String(f), permanent: true };
  }
  if (e.keeps_what_stands && d.kind === "upload") {
    if (ce(d.dest)) return { ok: true, noop: "already_present" };
    d.keepsWhatStands = true;
  }
  if (d.kind === "connector_download") if (t !== void 0) {
    if (e.connector_checks_made !== true) return se("tool_container");
  } else {
    let { stagedConnectorFileStopped: f } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-43cs4m2j.js"))), S = await f();
    if (S !== void 0) return se(S);
  }
  if (d.kind === "browser_download" && e.browser_checks_made !== true) return (0, import_chunk_cqa9hrgx.m)("ccr_stage_file_browser_download", "checks_not_made"), { ok: false, error: `${QNa}checks_not_made`, permanent: true };
  if (d.neverReplace && r === "off") return U("home_files_off", {}), { ok: true, noop: "home_files_off" };
  if (d.neverReplace && e.resync !== void 0) return U("resent_announcement", {}), { ok: true, noop: "resent_announcement" };
  if (d.neverReplace && e.force !== false) return U("unchecked_announcement", {}), { ok: true, noop: "unchecked_announcement" };
  if (d.neverReplace && r === "not_loaded") return U("flag_not_loaded", {}), { ok: false, error: "the flag for home files has not loaded" };
  let R = d.kind === "output" ? { outputPath: d.dest } : {}, k = d.kind === "output" && !e.force ? async () => await g() * 1048576 : void 0;
  if (!e.force && !d.neverReplace) try {
    let f = await (0, import_promises.stat)(d.dest);
    if (f.isFile()) {
      if (d.kind === "connector_download") {
        let { noteStagedConnectorDownload: S } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-4we8byyt.js")));
        S();
      }
      return (0, import_chunk_42tcgre6.q)("debug", "stage_file_noop_already_present", {}), (0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: true, noop_already_present: true, duration_ms: 0 }), { ok: true, noop: "already_present", ...(k === void 0 || await ee(f.size, await k(), d.root, false)) && R };
    }
  } catch {
  }
  let O = Date.now();
  return (d.kind === "connector_download" && t !== void 0 ? Xe : mt)(e.mount_path, d, O, t, czl(e, o), t === void 0 ? e.resync === true : void 0, k, e.force === true);
}
var ve = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear());
function mt(e, t, r, o, g, d, R, k) {
  let O = ve.get(t.root);
  if (O === void 0) O = (0, import_chunk_w71cxznt.Rl)(lzl, pt), ve.set(t.root, O);
  return O(e, t, r, o, g, d, R, k);
}
function pt(...e) {
  let [t, r, o, g] = e;
  return r.neverReplace ? gt(t, r, o, g) : Xe(...e);
}
async function Xe(e, { dest: t, root: r, kind: o, readOnly: g, keepsWhatStands: d }, R, k, O, h, f, S) {
  let P = performance.now(), _ = Math.max(0, Date.now() - R), i = () => Math.round(performance.now() - P), A = O !== void 0, F = o === "upload" && !A && !import_chunk_c203g5kd.s.CLAUDE_STAGE_FILE_ROOT, L = A ? { in_place: true } : {}, I = f === void 0 ? 0 : await f();
  if (o === "connector_download" && k === void 0) {
    let { connectorFilesStoppedNow: y } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-43cs4m2j.js"))), N = y();
    if (N !== void 0) return se(N);
  }
  let x = X9r(t), z, D = W(X(t), `${x}${Date.now()}.${Math.random().toString(36).slice(2)}`);
  try {
    if (ft(r, t), _e.has(o)) await pe(r);
    await (0, import_promises.mkdir)(X(t), { recursive: true });
    let y = await (0, import_promises.realpath)(r), N = await (0, import_promises.realpath)(X(t));
    if (xe(y, N), _e.has(o)) await pe(r);
    z = await (0, import_promises.lstat)(t).catch((J) => {
      if ((0, import_chunk_jv7av99m.w)(J) === "ENAMETOOLONG") throw J;
      return;
    }), await DXt(X(t), x);
  } catch (y) {
    let N = typeof y === "object" && y !== null && "code" in y ? String(y.code) : "unknown";
    if (F && Ue(y)) return (0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: true, noop: true, duration_ms: i(), queued_ms: _, bytes: 0 }), (0, import_chunk_42tcgre6.q)("debug", "stage_file_noop_readonly_mount", { duration_ms: i() }), { ok: true, noop: "readonly_mount" };
    return (0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: false, duration_ms: i(), queued_ms: _, ...L }), (0, import_chunk_42tcgre6.q)("warn", "stage_file_mkdir_failed", { code: N, duration_ms: i(), queued_ms: _ }), ge(o, "mkdir_failed"), { ok: false, error: `mkdir failed: ${N}`, ...me.has(N) && { permanent: true } };
  }
  let V = (0, import_chunk_9cv0y8kw.J9r)(e);
  if (h && V !== void 0 && z?.isFile() && z.nlink === 1 && z.size > 0 && (z.mode & 4095) === 292 && (0, import_chunk_865at33z.b)(import_chunk_865at33z.wxl, false) === true) return (0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: true, noop: true, noop_already_present: true, duration_ms: i(), queued_ms: _, bytes: 0 }), (0, import_chunk_42tcgre6.q)("info", "stage_file_noop_resent_attachment", { duration_ms: i(), queued_ms: _, attachment_path_shape: V, download_skipped_bytes: z.size }), { ok: true, noop: "already_present" };
  if (o === "connector_download") {
    let { noteStagedConnectorDownload: y } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-4we8byyt.js")));
    y();
  }
  let Re = async () => {
    if (I === 0) return h5o(e, D, k, O);
    let y = 0;
    try {
      return await h5o(e, D, k, O, async (N) => {
        let J = await ee(N, I, r, true);
        return y = J ? N : 0, J;
      });
    } finally {
      ae -= y;
    }
  }, Oe = async () => {
    let y = await (0, import_promises.stat)(t).catch(() => null);
    if (!y?.isFile()) return;
    let N = eFa(y, R);
    if ((0, import_chunk_42tcgre6.q)("info", N ? "stage_file_noop_newer_local" : "stage_file_shown_by_mount", { bytes: y.size, duration_ms: i(), queued_ms: _ }), (0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: true, ...N ? { noop: true, bytes: 0 } : { noop_already_present: true }, duration_ms: i(), queued_ms: _, outputs_root: true }), (0, import_chunk_cqa9hrgx.u)("ccr_stage_file_outputs"), N) return { ok: true, noop: "newer_local" };
    return { ok: true, noop: "already_present", ...await ee(y.size, I, r, false) && { outputPath: t } };
  };
  if (I > 0) {
    let y = await Oe();
    if (y !== void 0) return y;
  }
  let M = I > 0 && !await ee(0, I, r, true) ? { ok: false, error: Ye, heldBackBytes: 0 } : await Re();
  while (!M.ok && M.heldBackBytes !== void 0 && Date.now() - R < m5o.holdForMs) {
    await (0, import_chunk_5appeerh.K)(m5o.lookEveryMs);
    let y = await Oe();
    if (y !== void 0) return y;
    if (await ee(M.heldBackBytes, I, r, false)) M = await Re();
  }
  if (!M.ok) {
    if (await (0, import_promises.unlink)(D).catch(() => {
    }), F && M.errno === "EROFS") return (0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: true, noop: true, duration_ms: i(), queued_ms: _, bytes: 0 }), (0, import_chunk_42tcgre6.q)("debug", "stage_file_noop_readonly_mount", { duration_ms: i() }), { ok: true, noop: "readonly_mount" };
    if ((0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: false, gated: M.gated, duration_ms: i(), queued_ms: _, ...L }), M.heldBackBytes !== void 0) (0, import_chunk_42tcgre6.q)("warn", "stage_file_gave_up_over_mount_cache_limit", { bytes: M.heldBackBytes, duration_ms: i(), queued_ms: _ }), (0, import_chunk_cqa9hrgx.l)("ccr_stage_file_outputs", "over_mount_cache_limit");
    else ge(o, "fetch_failed");
    return { ok: false, error: M.error, ...(M.permanent === true || M.gated === true || M.errno !== void 0 && me.has(M.errno)) && { permanent: true }, ...M.notFound && { notFound: true } };
  }
  let Q = M.bytes, Y = i(), { replaced: G, standing: v } = o === "upload" ? await Pe(t, D, Q) : {};
  if (d && (G !== "nothing" || ce(t))) return await (0, import_promises.unlink)(D).catch(() => {
  }), { ok: true, noop: "already_present" };
  try {
    if (o === "output") {
      let y = await (0, import_promises.stat)(t).catch(() => null);
      if (eFa(y, R)) return await (0, import_promises.unlink)(D).catch(() => {
      }), (0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: true, noop: true, duration_ms: i(), queued_ms: _, bytes: 0, outputs_root: true }), (0, import_chunk_42tcgre6.q)("info", "stage_file_noop_newer_local", { duration_ms: i() }), (0, import_chunk_cqa9hrgx.u)("ccr_stage_file_outputs"), { ok: true, noop: "newer_local" };
    }
    if (await (0, import_promises.chmod)(D, g ? 292 : 420), _e.has(o)) await pe(r), xe(await (0, import_promises.realpath)(r), await (0, import_promises.realpath)(X(t)));
    if (o !== "upload" || S) await (0, import_promises.rename)(D, t);
    else {
      let y = await (0, import_chunk_0k16ny5f.jDt)(D, t);
      if (await (0, import_promises.unlink)(D).catch(() => {
      }), !y) return (0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: true, noop: true, noop_already_present: true, fetch_ms: Y, duration_ms: i(), queued_ms: _, bytes: 0 }), (0, import_chunk_42tcgre6.q)("info", "stage_file_noop_file_came_before_placing", { download_discarded_bytes: Q, fetch_ms: Y, duration_ms: i(), queued_ms: _ }), { ok: true, noop: "already_present" };
    }
  } catch (y) {
    if (await (0, import_promises.unlink)(D).catch(() => {
    }), F && Ue(y)) return (0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: true, noop: true, fetch_ms: Y, duration_ms: i(), queued_ms: _, bytes: 0 }), (0, import_chunk_42tcgre6.q)("debug", "stage_file_noop_readonly_mount", { duration_ms: i() }), { ok: true, noop: "readonly_mount" };
    let N = typeof y === "object" && y !== null && "code" in y ? String(y.code) : "unknown";
    return (0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: false, fetch_ms: Y, duration_ms: i(), queued_ms: _, bytes: Q, ...L }), (0, import_chunk_42tcgre6.q)("warn", "stage_file_write_failed", { code: N, duration_ms: i(), queued_ms: _ }), ge(o, "write_failed"), { ok: false, error: `write failed: ${N}`, ...me.has(N) && { permanent: true } };
  }
  if (o === "upload") Ne(t, M.written, Date.now());
  if ((0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: true, fetch_ms: Y, duration_ms: i(), queued_ms: _, bytes: Q, outputs_root: o === "output", ...L, replaced: (0, import_chunk_78g0060s.fe)(G), ...v !== void 0 && { standing_vs_placed_code: v.vsPlaced } }), o === "output") (0, import_chunk_cqa9hrgx.u)("ccr_stage_file_outputs");
  else if (o === "connector_download") (0, import_chunk_cqa9hrgx.u)("ccr_stage_file_connector_download");
  else if (o === "browser_download") (0, import_chunk_cqa9hrgx.u)("ccr_stage_file_browser_download");
  return (0, import_chunk_42tcgre6.q)(G === "different_contents" ? "warn" : "info", "stage_file_ok", { bytes: Q, fetch_ms: Y, duration_ms: i(), queued_ms: _, root: o === "connector_download" ? "connector_downloads" : o === "browser_download" ? "browser_downloads" : o === "upload" ? "uploads" : "outputs", resent: h, attachment_path_shape: V, ...G !== void 0 && { replaced: G }, ...v !== void 0 && { replaced_bytes: v.bytes, replaced_mtime_age_s: v.ageSeconds, replaced_read_only: v.readOnly, standing_vs_placed_code: v.vsPlaced } }), { ok: true, ...G !== void 0 && { replaced: G }, ...v !== void 0 && { standing_vs_placed_code: v.vsPlaced }, ...o === "output" && { outputPath: t } };
}
function se(e) {
  return (0, import_chunk_cqa9hrgx.m)("ccr_stage_file_connector_download", e), { ok: false, error: `${JNa}${e}`, permanent: true };
}
function ge(e, t) {
  if (e === "output") (0, import_chunk_cqa9hrgx.m)("ccr_stage_file_outputs", t);
  else if (e === "connector_download") (0, import_chunk_cqa9hrgx.m)("ccr_stage_file_connector_download", t);
  else if (e === "browser_download") (0, import_chunk_cqa9hrgx.m)("ccr_stage_file_browser_download", t);
}
function U(e, t) {
  let r = e === "flag_not_loaded" || e === "probe_failed" || e === "fetch_failed" || e === "place_failed";
  if ((0, import_chunk_42tcgre6.q)(r ? "warn" : "info", "stage_file_home", { outcome: e, ...t }), (0, import_chunk_y53wbr8a.a)("tengu_stage_file_completed", { ok: !r, noop: !r && e !== "placed", home_root: true, bytes: t.bytes ?? 0, duration_ms: t.duration_ms ?? 0, queued_ms: t.queued_ms ?? 0 }), r) (0, import_chunk_cqa9hrgx.m)("ccr_stage_file_home", e);
  else if (e === "placed" || e === "already_present") (0, import_chunk_cqa9hrgx.u)("ccr_stage_file_home");
  else (0, import_chunk_cqa9hrgx.l)("ccr_stage_file_home", e);
}
function ze(e, t, r) {
  switch (e.outcome) {
    case "placed":
      return U(e.outcome, r), { ok: true, outputPath: t };
    case "already_present":
    case "path_occupied":
      return U(e.outcome, r), { ok: true, noop: e.outcome };
    case "refused_name":
      return U(e.outcome, { refusal: e.refusal, ...r }), { ok: true, noop: e.outcome };
  }
}
async function gt(e, { dest: t, root: r }, o, g) {
  let d = performance.now(), R = Math.max(0, Date.now() - o), k = () => ({ duration_ms: Math.round(performance.now() - d), queued_ms: R }), O = je(r, t), h = W(r, `${X9r(t)}${Date.now()}.${Math.random().toString(36).slice(2)}`);
  try {
    let f = await (0, import_chunk_bsw3jbbx.lnt)(r, O);
    if (await DXt(r, import_chunk_6mfepmbb.r2), f !== void 0) return ze(f, t, k());
  } catch (f) {
    let S = (0, import_chunk_jv7av99m.w)(f) ?? "unknown";
    return U("probe_failed", { code: S, ...k() }), { ok: false, error: `mkdir failed: ${S}` };
  }
  try {
    let f = await h5o(e, h, g);
    if (!f.ok && !f.gated && g === void 0) await (0, import_promises.unlink)(h).catch(() => {
    }), await (0, import_chunk_5appeerh.K)(ct), f = await h5o(e, h, g);
    if (!f.ok) return U("fetch_failed", { code: f.errno, ...k() }), { ok: false, error: f.error };
    return ze(await (0, import_chunk_bsw3jbbx.xJt)(h, r, O, void 0), t, { bytes: f.bytes, ...k() });
  } catch (f) {
    let S = (0, import_chunk_jv7av99m.w)(f) ?? "unknown";
    return U("place_failed", { code: S, ...k() }), { ok: false, error: `write failed: ${S}` };
  } finally {
    await (0, import_promises.unlink)(h).catch(() => {
    });
  }
}
var dzl = "read failed: credential expired";
function wt(e) {
  let t = false;
  return async () => {
    if (t) return { ok: false, error: dzl };
    return t = true, qe(e);
  };
}
function qe(e) {
  let { filestore_jwt: t, filesystem_id: r } = e;
  if (!t || !r) return { ok: false, error: "list returned incomplete credential", permanent: true };
  let o = (0, import_chunk_865at33z.Odt)(e.filestore_url);
  if (e.filestore_url && !o) (0, import_chunk_42tcgre6.q)("warn", "stage_file_filestore_url_rejected", { reason: (0, import_chunk_865at33z.nIl)(e.filestore_url) });
  return { ok: true, cred: { filestoreJwt: t, filesystemId: r, filestoreUrl: o } };
}
async function Qe(e, t, r) {
  let o = await uzl(e, t, r);
  return o.ok ? qe(o.data) : o;
}
var we = "/worker/files", ht = "x-ccr-connector-download", yt = "connector_folder", Et = "stage_request_id", bt = /^stage-file-inplace-req_[0-9A-Za-z_]{1,72}$/;
function czl(e, t) {
  return e.in_place === true && typeof t === "string" && bt.test(t) ? t : void 0;
}
async function uzl(e, t, r) {
  let o = performance.now(), g = () => Math.round(performance.now() - o);
  try {
    let d = await import_chunk_865at33z.zt.get(r !== void 0 ? `${we}?${yt}=${encodeURIComponent(import_path.posix.dirname(r))}` : t !== void 0 ? `${we}?${Et}=${encodeURIComponent(t)}` : we, { auth: "session-jwt", host: "ccr-session", headers: { "anthropic-version": "2023-06-01", ...r !== void 0 && { [ht]: import_chunk_6mfepmbb.dHr.test(r) ? r : import_path.posix.dirname(r) } }, timeout: be, signal: e });
    if (!d.ok) return (0, import_chunk_42tcgre6.q)("warn", "stage_file_list_gated", { reason: d.reason, duration_ms: g() }), { ok: false, error: `list gated: ${d.reason}`, gated: true, permanent: true };
    if (d.status < 200 || d.status >= 300) return (0, import_chunk_42tcgre6.q)("warn", "stage_file_list_failed", { kind: "http", status: d.status, duration_ms: g() }), { ok: false, error: `list failed: http ${d.status}`, status: d.status, ...Se(d.status) && { permanent: true } };
    let { filestore_jwt: R, filesystem_id: k, filestore_url: O } = d.data;
    return { ok: true, data: { filestore_jwt: R, filesystem_id: k, filestore_url: O } };
  } catch (d) {
    let { kind: R, status: k, message: O, permanent: h } = le("list", d);
    return (0, import_chunk_42tcgre6.q)("warn", "stage_file_list_failed", { kind: R, status: k, duration_ms: g() }), { ok: false, error: O, status: k, permanent: h };
  }
}
async function St(e, t, r) {
  try {
    let o = await import_chunk_865at33z.zt.post("/v1/filestore/fs/readFileMetadata", { filesystem_id: e.filesystemId, path: t }, { auth: "none", host: "api", baseUrl: e.filestoreUrl, headers: { Authorization: `Bearer ${e.filestoreJwt}` }, timeout: be, maxContentLength: 65536, signal: r, validateStatus: () => true, maxRedirects: 0 });
    if (!o.ok) return "gated";
    if (o.status < 200 || o.status >= 300) return o.status === 404 && (0, import_chunk_ma3kja9f.T)(o.data) && o.data.code === "not_found" && (o.data.details === void 0 || Array.isArray(o.data.details) && o.data.details.length === 0) ? "not_found" : `http_${o.status}`;
    let g = kt().safeParse(o.data), d = g.success ? Number(g.data.file.file.size ?? 0) : NaN;
    return Number.isSafeInteger(d) && d >= 0 ? d : "shape";
  } catch {
    return "no_answer";
  }
}
var kt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ file: (0, import_chunk_adx6804h.c)({ file: (0, import_chunk_adx6804h.c)({ size: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)()]).optional() }) }) }));
async function h5o(e, t, r, o, g) {
  let d = performance.now(), R = () => Math.round(performance.now() - d), k = r === void 0 ? () => Qe(void 0, o, (0, import_chunk_6mfepmbb.cHr)(e)) : wt(r), O = await k();
  if (!O.ok) return O;
  let h = O.cred;
  for (let f = 0; f <= 1; f++) {
    let S = new AbortController(), P = setTimeout((_) => _.abort(Error("readFile stall: no bytes for 60s")), oe, S);
    try {
      if (g !== void 0 && f === 0) {
        let D = await St(h, e, S.signal);
        if (D !== "not_found") {
          if (typeof D === "string") Ee("no_size", D);
          let V = typeof D === "string" ? _t : D;
          if (!await g(V)) return clearTimeout(P), { ok: false, error: Ye, heldBackBytes: V };
        }
        P.refresh();
      }
      let _ = await import_chunk_865at33z.zt.post("/v1/filestore/fs/readFile", { filesystem_id: h.filesystemId, path: e }, { auth: "none", host: "api", baseUrl: h.filestoreUrl, headers: { Authorization: `Bearer ${h.filestoreJwt}` }, responseType: "stream", timeout: 0, signal: S.signal, validateStatus: () => true });
      if (!_.ok) return clearTimeout(P), (0, import_chunk_42tcgre6.q)("warn", "stage_file_read_gated", { reason: _.reason, duration_ms: R() }), { ok: false, error: `read gated: ${_.reason}`, gated: true };
      if (_.status === 401 && f === 0) {
        if (clearTimeout(P), _.data instanceof import_stream.Readable) _.data.destroy();
        if ((0, import_chunk_42tcgre6.q)("info", "stage_file_read_remint_jwt", { duration_ms: R() }), O = await k(), !O.ok) return O;
        h = O.cred;
        continue;
      }
      if (_.status < 200 || _.status >= 300) {
        if (clearTimeout(P), _.data instanceof import_stream.Readable) _.data.destroy();
        return (0, import_chunk_42tcgre6.q)("warn", "stage_file_read_failed", { kind: "http", status: _.status, duration_ms: R() }), { ok: false, error: `read failed: http ${_.status}`, status: _.status, ...Se(_.status) && { permanent: true }, ..._.status === 404 && { notFound: true } };
      }
      let i = Number(_.response?.headers["content-length"] ?? -1);
      _.data.on("data", () => P.refresh()), await (0, import_promises2.pipeline)(_.data, (0, import_fs.createWriteStream)(t, { flags: "wx" })), clearTimeout(P);
      let A = await (0, import_promises.stat)(t, { bigint: true }), F = Number(A.size);
      if (i >= 0 && F !== i) return (0, import_chunk_42tcgre6.q)("warn", "stage_file_read_truncated", { expected: i, got: F, duration_ms: R() }), { ok: false, error: `read truncated: got ${F} of ${i} bytes` };
      let { ino: L, birthtimeNs: I, size: x, mtimeNs: z } = A;
      return { ok: true, bytes: F, written: { ino: L, birthtimeNs: I, size: x, mtimeNs: z } };
    } catch (_) {
      clearTimeout(P);
      let i = typeof _ === "object" && _ !== null && "code" in _ ? String(_.code) : void 0;
      if (i && !("isAxiosError" in _)) return (0, import_chunk_42tcgre6.q)("warn", "stage_file_write_failed", { code: i, duration_ms: R() }), { ok: false, error: `write failed: ${i}`, errno: i };
      if (S.signal.aborted) return (0, import_chunk_42tcgre6.q)("warn", "stage_file_read_stalled", { stall_ms: oe, duration_ms: R() }), { ok: false, error: `read stalled: no bytes for ${oe}ms` };
      let { kind: A, status: F, message: L, permanent: I } = le("read", _);
      return (0, import_chunk_42tcgre6.q)("warn", "stage_file_read_failed", { kind: A, status: F, duration_ms: R() }), { ok: false, error: L, permanent: I };
    }
  }
  throw Error("unreachable: fetchFilestoreToFile retry loop fell through");
}
var Rt = 1048576;
async function fzl(e) {
  let t = await Qe(e);
  if (!t.ok) return t;
  let { filestoreJwt: r, filesystemId: o, filestoreUrl: g } = t.cred, d = { auth: "none", host: "api", baseUrl: g, headers: { Authorization: `Bearer ${r}` }, timeout: be };
  async function R(h, { maxBytes: f, signal: S } = {}) {
    let P = performance.now(), _ = () => Math.round(performance.now() - P);
    try {
      let i = await import_chunk_865at33z.zt.post("/v1/filestore/fs/readFile", { filesystem_id: o, path: h }, { ...d, responseType: "arraybuffer", maxContentLength: f ?? ut, signal: S });
      if (!i.ok) return (0, import_chunk_42tcgre6.q)("warn", "stage_file_read_gated", { reason: i.reason, duration_ms: _() }), { ok: false, error: `read gated: ${i.reason}`, gated: true };
      if (i.status < 200 || i.status >= 300) return (0, import_chunk_42tcgre6.q)("warn", "stage_file_read_failed", { kind: "http", status: i.status, duration_ms: _() }), { ok: false, error: `read failed: http ${i.status}`, status: i.status, ...i.status === 404 && { notFound: true } };
      return { ok: true, buf: Buffer.from(i.data) };
    } catch (i) {
      let { kind: A, status: F, message: L } = le("read", i);
      return (0, import_chunk_42tcgre6.q)("warn", "stage_file_read_failed", { kind: A, status: F, duration_ms: _() }), { ok: false, error: L, status: F, ...F === 404 && { notFound: true }, ...(0, import_chunk_jv7av99m.rH)(i) && { tooLarge: true } };
    }
  }
  async function k(h, { signal: f, ...S }) {
    let { limit: P } = S, _ = performance.now();
    try {
      let i = await import_chunk_865at33z.zt.post("/v1/filestore/fs/listDirectory", { filesystem_id: o, path: h, ...S }, { ...d, maxContentLength: Rt, signal: f });
      if (!i.ok) return re("gated", void 0, _), { ok: false, error: `directory listing gated: ${i.reason}`, gated: true };
      if (i.status < 200 || i.status >= 300) return re("http", i.status, _), { ok: false, error: `directory listing failed: http ${i.status}`, status: i.status, ...i.status === 404 && { notFound: true } };
      let A = Ot().safeParse(i.data);
      if (!A.success) return re("shape", i.status, _), { ok: false, error: "directory listing failed: unexpected answer", status: i.status };
      let F = A.data.entries ?? [], L = F.slice(0, P), I = L.flatMap(({ file: x }) => x?.file === void 0 ? [] : { path: x.path, bytes: x.file.size ?? 0, isChatUpload: x.file.metadata?.chat_file_uuid !== void 0 });
      return { ok: true, files: L.flatMap((x) => x.file?.path ?? []), directories: L.flatMap((x) => x.directory?.path ?? []), ...I.length > 0 && { sized: I }, more: F.length > P || (A.data.cursor ?? "") !== "", ...A.data.cursor && { cursor: A.data.cursor } };
    } catch (i) {
      let { kind: A, status: F, message: L } = le("directory listing", i);
      return re(A, F, _), { ok: false, error: L, status: F, ...F === 404 && { notFound: true } };
    }
  }
  async function O(h, { signal: f }) {
    try {
      let S = await import_chunk_865at33z.zt.post("/v1/filestore/fs/readFileMetadata", { filesystem_id: o, path: h }, { ...d, maxContentLength: 65536, signal: f, validateStatus: () => true, maxRedirects: 0 });
      if (!S.ok) return "no_answer";
      if (S.status >= 200 && S.status < 300) return "a_file";
      return S.status === 404 && (0, import_chunk_ma3kja9f.T)(S.data) && S.data.code === "not_found" && (S.data.details === void 0 || Array.isArray(S.data.details) && S.data.details.length === 0) ? "nothing" : "no_answer";
    } catch {
      return "no_answer";
    }
  }
  return { ok: true, reader: { readBytes: R, listDirectory: k }, facts: { holdsAt: O, filesystemId: o } };
}
function re(e, t, r) {
  (0, import_chunk_42tcgre6.q)(t === 404 ? "info" : "warn", "stage_file_directory_failed", { kind: e, status: t, duration_ms: Math.round(performance.now() - r) });
}
var Ot = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ entries: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ file: (0, import_chunk_adx6804h.c)({ path: (0, import_chunk_adx6804h.n)(), file: (0, import_chunk_adx6804h.c)({ size: (0, import_chunk_adx6804h.Tft)().nonnegative().optional(), metadata: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).nullish() }).optional().catch(void 0) }).optional(), directory: (0, import_chunk_adx6804h.c)({ path: (0, import_chunk_adx6804h.n)() }).optional() })).optional(), cursor: (0, import_chunk_adx6804h.n)().optional() }));
async function pzl(e, t = {}) {
  let r = await fzl(t.signal);
  return r.ok ? r.reader.readBytes(e, t) : r;
}
