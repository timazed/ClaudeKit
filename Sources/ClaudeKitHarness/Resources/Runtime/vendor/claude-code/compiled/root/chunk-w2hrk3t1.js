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
var chunk_w2hrk3t1_exports = {};
__export(chunk_w2hrk3t1_exports, {
  Nol: () => Nol,
  PDe: () => PDe,
  QF: () => QF,
  oAe: () => oAe
});
module.exports = __toCommonJS(chunk_w2hrk3t1_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var _ = import_chunk_jxja0v0z.mO | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NOFOLLOW | import_chunk_jxja0v0z.cr;
function s(n) {
  return `/proc/self/fd/${n.fd}`;
}
async function D(n) {
  return (await n.stat()).uid === process.getuid?.();
}
async function QF(n, r) {
  return "not_linux";
}
async function Nol(n, r) {
  throw Error("a directory can be held only on Linux");
}
async function PDe(n) {
  let r = (0, import_path.join)(n.at, `.probe-${(0, import_crypto.randomUUID)()}`), t = `${r}-moved`, e;
  try {
    await (0, import_promises.mkdir)(r, { mode: 448 }), e = await (0, import_promises.open)(r, _), await (0, import_promises.rename)(r, t);
    let a = await (0, import_promises.readlink)(s(e)).catch(() => ""), o = await (0, import_promises.stat)(s(e)).catch(() => {
      return;
    });
    return (0, import_path.basename)(a) === (0, import_path.basename)(t) && o?.ino === (await e.stat()).ino || "holds_do_not_follow";
  } catch (a) {
    return (0, import_chunk_jv7av99m.Cr)(a) ?? "unknown";
  } finally {
    await e?.close(), await Promise.allSettled([(0, import_promises.rmdir)(r), (0, import_promises.rmdir)(t)]);
  }
}
async function oAe(n) {
  let r = (0, import_chunk_f9x2f6cx.qEe)();
  if (r === null || (0, import_path.dirname)(n) !== r) return await (0, import_promises.mkdir)(n, { recursive: true, mode: 448 }), { at: n, release: async () => {
  } };
  let t = await QF(n, 2);
  if (t === "no_parent") {
    if (await (0, import_promises.mkdir)((0, import_path.dirname)(r), { mode: 493 }).then(() => true, () => false)) (0, import_chunk_42tcgre6.q)("warn", "attachments_in_user_data", { state: "parent_made_again" }), (0, import_chunk_cqa9hrgx.l)("bridge_attachment_user_data_root", "parent_made_again");
    t = await QF(n, 2);
  }
  if (typeof t === "string") throw (0, import_chunk_42tcgre6.q)("warn", "attachments_in_user_data", { state: "write_refused", reason: t }), (0, import_chunk_cqa9hrgx.m)("bridge_attachment_user_data_root", t), new import_chunk_jv7av99m.A(`nothing was saved: the attachments folder cannot be used (${t})`, "nothing was saved: the attachments folder cannot be used");
  return t;
}
